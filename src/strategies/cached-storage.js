'use strict';

const {NOT_FOUND} = require('../utils/constants');
const BaseStorage = require('../base-storage');
const LocalStorageStrategy = require('./local-storage');
const DELETED = '___DELETED___';

class CachedStorageStrategy extends BaseStorage {
  constructor({remoteStrategy, localStrategy = new LocalStorageStrategy()}) {
    super();
    this.remoteStrategy = BaseStorage.verify(remoteStrategy);
    this.localStrategy = BaseStorage.verify(localStrategy);
  }

  _cacheItem(key, value, options) {
    return this.localStrategy.setItem(key, value, Object.assign(options, {expiration: 3600}));
  }

  setItem(key, value, options) {
    return this.remoteStrategy.setItem(key, value, options)
    .then(() => this._cacheItem(key, value, options));
  }

  removeItem(key, options) {
    return this.remoteStrategy.removeItem(key, options)
    .then(() => this._cacheItem(key, DELETED, options));
  }

  _getRemoteAndCache(key, options) {
    return this.remoteStrategy.getItem(key, options).then(value => {
      return this._cacheItem(key, value, options).then(() => value);
    }).catch(e => {
      if (e === NOT_FOUND) {
        return this._cacheItem(key, DELETED, options)
        .then(() => {
          throw e;
        });
      }
      throw e;
    });
  }

  getItem(key, options) {
    function throwIfDeletedOrReturn(value) {
      if (value === DELETED) {
        throw NOT_FOUND;
      }

      return value;
    }

    return this.localStrategy.getItem(key, options)
      .catch(() => this._getRemoteAndCache(key, options))
      .then(throwIfDeletedOrReturn);
  }

  getAllItems(options) {
    return this.remoteStrategy.getAllItems(options)
    .then(items =>
      Promise.all(
        Object.keys(items)
        .map(key => this._cacheItem(key, items[key], options))
      ).then(() => items)
    );
  }
}

module.exports = CachedStorageStrategy;
