/* global localStorage */
'use strict';

const BaseStorage = require('../base-storage');
const localStorageCleaner = require('../utils/local-storage-cleaner');
const {STORAGE_PREFIX, PREFIX_SEPARATOR, KEY_SEPARATOR, NOT_FOUND} = require('../utils/constants');
const {getCacheRecords, deserializeData, isExpired} = require('../utils/record-utils');

function getCacheKey(key, options) {
  return getCachePrefix(options) + key;
}

function getCachePrefix(options) {
  return [STORAGE_PREFIX, options.namespace, options.scope && JSON.stringify(options.scope)]
      .filter(x => x)
      .join(PREFIX_SEPARATOR) + KEY_SEPARATOR;
}

function serializeData(value, options) {
  return JSON.stringify({
    lastUsed: Date.now(),
    createdAt: options.createdAt || Date.now(),
    expiration: options.expiration,
    value
  });
}

function updateAccessTime(fullKey, data) {
  const {expiration, createdAt} = data;
  localStorage.setItem(fullKey, serializeData(data.value, {expiration, createdAt}));
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
