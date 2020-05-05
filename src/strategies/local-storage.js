/* global localStorage */

import BaseStorage from '../base-storage';
import localStorageCleaner from '../utils/local-storage-cleaner';
import { verifyConsentPolicy } from '../consent-policy';
import {
  STORAGE_PREFIX,
  PREFIX_SEPARATOR,
  KEY_SEPARATOR,
  NOT_FOUND,
  LOCAL_STORAGE_UNSUPPORTED,
} from '../utils/constants';
import {
  getCacheRecords,
  deserializeData,
  isExpired,
} from '../utils/record-utils';

function getCacheKey(key, options) {
  return getCachePrefix(options) + key;
}

function stringify(obj) {
  return typeof obj === 'string' ? obj : JSON.stringify(obj);
}

function getCachePrefix(options) {
  return (
    [STORAGE_PREFIX, options.namespace, stringify(options.scope)]
      .filter(x => x)
      .join(PREFIX_SEPARATOR) + KEY_SEPARATOR
  );
}

function serializeData(value, options) {
  return JSON.stringify({
    lastUsed: Date.now(),
    createdAt: options.createdAt || Date.now(),
    expiration: options.expiration,
    value,
  });
}

function updateAccessTime(fullKey, data) {
  const { expiration, createdAt } = data;
  localStorage.setItem(
    fullKey,
    serializeData(data.value, { expiration, createdAt }),
  );
}

export default class LocalStorageStrategy extends BaseStorage {
  async setItem(key, value, options) {
    key = getCacheKey(key, options);
    value = serializeData(value, options);

    this._verifyConsentPolicy(options.category);

    try {
      localStorage.setItem(key, value);
    } catch (e) {
      localStorageCleaner(key.length + value.length);
      localStorage.setItem(key, value);
    }
  }

  getItem(key, options) {
    const fullKey = getCacheKey(key, options);
    let data;
    try {
      data = localStorage.getItem(fullKey);
    } catch (e) {
      return Promise.reject(LOCAL_STORAGE_UNSUPPORTED);
    }
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

  _verifyConsentPolicy(category) {
    if (category && !verifyConsentPolicy(category)) {
      throw new Error('woop 2');
    }
  }
}
