'use strict';

const co = require('co');
const {NOT_FOUND} = require('../constants');
const BaseStorage = require('../base-storage');
const LocalStorageStrategy = require('./local-storage');
const DELETED = '___DELETED___';

class CachedStorageStrategy extends BaseStorage {
  constructor(remoteStrategy, localStrategy = new LocalStorageStrategy()) {
    super();
    this.remoteStrategy = remoteStrategy;
    this.localStrategy = localStrategy;

    this.setItem = co.wrap(this.setItem);
    this.getItem = co.wrap(this.getItem);
    this.removeItem = co.wrap(this.removeItem);
    this.getAllItems = co.wrap(this.getAllItems);
    this._getRemoteAndCache = co.wrap(this._getRemoteAndCache);
  }

  _cacheItem(key, value, options) {
    return this.localStrategy.setItem(key, value, Object.assign(options, {expiration: 3600}));
  }

  * setItem(key, value, options) {
    yield this.remoteStrategy.setItem(key, value, options);
    yield this._cacheItem(key, value, options);
  }

  * removeItem(key, options) {
    yield this.remoteStrategy.removeItem(key, options);
    yield this._cacheItem(key, DELETED, options);
  }

  * _getRemoteAndCache(key, options) {
    try {
      const value = yield this.remoteStrategy.getItem(key, options);
      yield this._cacheItem(key, value, options);
      return value;
    } catch (e) {
      if (e === NOT_FOUND) {
        yield this._cacheItem(key, DELETED, options);
      }
      throw e;
    }
  }

  * getItem(key, options) {
    let value;
    try {
      value = yield this.localStrategy.getItem(key, options);
    } catch (e) {
      value = this._getRemoteAndCache(key, options);
    }
    if (value === DELETED) {
      throw NOT_FOUND;
    } else {
      return value;
    }
  }

  * getAllItems(options) {
    const items = yield this.remoteStrategy.getAllItems(options);
    yield Promise.all(Object.keys(items).map(key => {
      return this._cacheItem(key, items[key], options);
    }));
    return items;
  }
}

module.exports = CachedStorageStrategy;
