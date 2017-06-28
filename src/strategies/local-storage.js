/* global localStorage */
'use strict';

const BaseStorage = require('../base-storage');
const localStorageCleaner = require('../utils/local-storage-cleaner');
const {NOT_FOUND} = require('../utils/constants');
const {getCacheKey, getCachePrefix, getCacheRecords, deserializeData, isExpired} = require('../utils/record-utils');

function serializeData(value, options) {
  return JSON.stringify({
    createdAt: Date.now(),
    expiration: options.expiration,
    value
  });
}

function updateAccessTime(fullKey, data) {
  const expiration = data.expiration;
  localStorage.setItem(fullKey, serializeData(data.value, {expiration}));
}

class LocalStorageStrategy extends BaseStorage {
  setItem(key, value, options) {
    key = getCacheKey(key, options);
    value = serializeData(value, options);
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      localStorageCleaner(key.length + value.length);
      localStorage.setItem(key, value);
    }
    return Promise.resolve();
  }

  getItem(key, options) {
    const fullKey = getCacheKey(key, options);
    let data = localStorage.getItem(fullKey);
    data = data && deserializeData(data);
    if (data && !isExpired(data)) {
      updateAccessTime(fullKey, data);
      return Promise.resolve(data.value);
    } else {
      return Promise.reject(NOT_FOUND);
    }
  }

  removeItem(key, options) {
    key = getCacheKey(key, options);
    localStorage.removeItem(key);
    return Promise.resolve();
  }

  getAllItems(options) {
    const prefix = getCachePrefix(options);
    const items = {};
    getCacheRecords(prefix).forEach(record => {
      if (!isExpired(record)) {
        items[record.key] = record.value;
      }
    });
    return Promise.resolve(items);
  }
}

module.exports = LocalStorageStrategy;
