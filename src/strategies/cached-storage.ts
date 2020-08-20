import { BaseStorage, Scope } from '../base-storage';
import { NOT_FOUND } from '../utils/constants';
import {
  LocalStorageStrategy,
  LocalStorageStrategyOptions,
} from './local-storage';
import { NullStrategy } from './null-storage';
import { getUserId, WixStorageStrategy } from './wix-storage';

const DELETED = '___DELETED___';

export class CachedStorageStrategy<
  A,
  B = LocalStorageStrategyOptions
> extends BaseStorage<A & B> {
  private remoteStrategy: BaseStorage<A>;
  private localStrategy: BaseStorage<B>;

  constructor({
    remoteStrategy,
    localStrategy,
  }: {
    remoteStrategy: BaseStorage<A>;
    localStrategy?: BaseStorage<B>;
  }) {
    super();

    if (shouldIgnoreCache(remoteStrategy)) {
      localStrategy = new NullStrategy();
    }

    this.remoteStrategy = BaseStorage.verify(remoteStrategy);
    this.localStrategy = BaseStorage.verify(
      localStrategy || new LocalStorageStrategy(),
    );
  }

  extendScope(scope: Scope) {
    return this.remoteStrategy.extendScope(scope);
  }

  _cacheItem(key: string, value: any, options: B) {
    return this.localStrategy.setItem(
      key,
      value,
      Object.assign(options, { expiration: 3600 }),
    );
  }

  setItem<T>(key: string, value: T, options: A & B): Promise<void> {
    return this.remoteStrategy
      .setItem<T>(key, value, options)
      .then(() => this._cacheItem(key, value, options));
  }

  removeItem(key: string, options: A & B): Promise<void> {
    return this.remoteStrategy
      .removeItem(key, options)
      .then(() => this._cacheItem(key, DELETED, options));
  }

  getItem<T = any>(key: string, options: A & B): Promise<T> {
    function throwIfDeletedOrReturn(value: any) {
      if (value === DELETED) {
        throw NOT_FOUND;
      }

      return value;
    }

    return this.localStrategy
      .getItem(key, options)
      .catch(() => this._getRemoteAndCache(key, options))
      .then(throwIfDeletedOrReturn);
  }

  getAllItems<T = any>(options: A & B): Promise<T> {
    return this.remoteStrategy
      .getAllItems(options)
      .then((items) =>
        Promise.all(
          Object.keys(items).map((key) =>
            this._cacheItem(key, items[key], options),
          ),
        ).then(() => items),
      );
  }

  private _getRemoteAndCache(key: string, options: A & B) {
    return this.remoteStrategy
      .getItem(key, options)
      .then((value) => {
        return this._cacheItem(key, value, options).then(() => value);
      })
      .catch((e) => {
        if (e === NOT_FOUND) {
          return this._cacheItem(key, DELETED, options).then(() => {
            throw e;
          });
        }
        throw e;
      });
  }
}

// we don't support local strategy in case we cannot
// identify the user - mainly on viewer flow.
function shouldIgnoreCache(remoteStrategy: any) {
  return (
    remoteStrategy &&
    remoteStrategy.constructor === WixStorageStrategy &&
    getUserId() === ''
  );
}
