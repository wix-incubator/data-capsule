/* global localStorage */
'use strict';

const {STORAGE_PREFIX, PREFIX_SEPARATOR, KEY_SEPARATOR, NOT_FOUND} = require('../constants');

function getCacheKey(key, options) {
  return getCachePrefix(options) + key;
}

function getCachePrefix(options) {
  return [STORAGE_PREFIX, options.namespace, options.scope && JSON.stringify(options.scope)]
      .filter(x => x)
      .join(PREFIX_SEPARATOR) + KEY_SEPARATOR;
}

function parseCacheKey(key) {
  return key.split(KEY_SEPARATOR).pop();
}

function isExpired(data) {
  if (data.expiration) {
    return data.createdAt + (data.expiration * 1000) <= Date.now();
  } else {
    return false;
  }
}

function serializeData(value, options) {
  return JSON.stringify({
    createdAt: Date.now(),
    expiration: options.expiration,
    value
  });
}

function deserializeData(data) {
  return JSON.parse(data);
}

class LocalStorageStrategy {
  setItem(key, value, options) {
    key = getCacheKey(key, options);
    localStorage.setItem(key, serializeData(value, options));
    return Promise.resolve();
  }

  getItem(key, options) {
    let data = localStorage.getItem(getCacheKey(key, options));
    data = data && deserializeData(data);
    if (data && !isExpired(data)) {
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
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(prefix)) {
        const data = deserializeData(localStorage.getItem(key));
        if (!isExpired(data)) {
          items[parseCacheKey(key)] = data.value;
        }
      }
    }
    return Promise.resolve(items);
  }
}

module.exports = LocalStorageStrategy;
