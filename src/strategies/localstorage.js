/* global localStorage */
'use strict';

const {STORAGE_PREFIX, PREFIX_SEPARATOR, KEY_SEPARATOR, NOT_FOUND} = require('../constants');

function getCacheKey(key, options) {
  return getCachePrefix(options) + KEY_SEPARATOR + key;
}

function getCachePrefix(options) {
  return [STORAGE_PREFIX, options.namespace, options.scope]
      .filter(x => x)
      .concat([''])
      .join(PREFIX_SEPARATOR);
}

function parseCacheKey(fullKey) {
  const [prefix, key] = fullKey.split(KEY_SEPARATOR);
  const [, namespace, scope] = prefix.split(PREFIX_SEPARATOR);
  return {namespace, scope, key};
}

class LocalStorageStrategy {
  setItem(key, value, options) {
    key = getCacheKey(key, options);
    localStorage.setItem(key, value);
    return Promise.resolve(key);
  }

  getItem(key, options) {
    const value = localStorage.getItem(getCacheKey(key, options));
    if (value) {
      return Promise.resolve(value);
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
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(prefix)) {
        const item = parseCacheKey(key);
        items.push(Object.assign(item, {value: localStorage.getItem(key)}));
      }
    }
    return Promise.resolve(items);
  }
}

module.exports = LocalStorageStrategy;
