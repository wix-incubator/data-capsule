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

  async setItem(key, value, options) {
    await this.remoteStrategy.setItem(key, value, options);
    await this._cacheItem(key, value, options);
  }

  async removeItem(key, options) {
    await this.remoteStrategy.removeItem(key, options);
    await this._cacheItem(key, DELETED, options);
  }

  async _getRemoteAndCache(key, options) {
    try {
      const value = await this.remoteStrategy.getItem(key, options);
      await this._cacheItem(key, value, options);
      return value;
    } catch (e) {
      if (e === NOT_FOUND) {
        await this._cacheItem(key, DELETED, options);
      }
      throw e;
    }
  }

  async getItem(key, options) {
    let value;
    try {
      value = await this.localStrategy.getItem(key, options);
    } catch (e) {
      value = this._getRemoteAndCache(key, options);
    }
    if (value === DELETED) {
      throw NOT_FOUND;
    } else {
      return value;
    }
  }

  async getAllItems(options) {
    const items = await this.remoteStrategy.getAllItems(options);
    await Promise.all(Object.keys(items).map(key => {
      return this._cacheItem(key, items[key], options);
    }));
    return items;
  }
}

module.exports = CachedStorageStrategy;
