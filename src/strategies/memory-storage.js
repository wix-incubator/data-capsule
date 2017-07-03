'use strict';

const BaseStorage = require('../base-storage');

const {STORAGE_PREFIX, NOT_FOUND, PREFIX_SEPARATOR} = require('../utils/constants');
const {getCacheKey, getCachePrefix, parseCacheKey} = require('../utils/record-utils');

class MemoryStorageStrategy extends BaseStorage {
  constructor() {
    super();
    this.data = {};
  }

  getCacheRecords(prefix = STORAGE_PREFIX + PREFIX_SEPARATOR) {
    const items = [];
    const keys = Object.keys(this.data);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key.startsWith(prefix)) {
        const data = this.data[key];
        items.push(Object.assign({
          size: key.length + data.length,
          originalKey: key,
          value: data
        }, parseCacheKey(key)));
      }
    }
    return items;
  }

  setItem(key, value, options) {
    key = getCacheKey(key, options);
    this.data[key] = value;
    return Promise.resolve();
  }

  getItem(key, options) {
    key = getCacheKey(key, options);
    const data = this.data[key];
    return data ? Promise.resolve(data) : Promise.reject(NOT_FOUND);
  }

  removeItem(key, options) {
    key = getCacheKey(key, options);
    delete this.data[key];
    return Promise.resolve();
  }

  getAllItems(options) {
    const prefix = getCachePrefix(options);
    const items = {};
    this.getCacheRecords(prefix).forEach(record => {
      items[record.key] = record.value;
    });
    return Promise.resolve(items);
  }
}

module.exports = MemoryStorageStrategy;
