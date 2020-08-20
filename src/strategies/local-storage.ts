import { BaseStorage, BaseStorageOptions } from '../base-storage';
import {
  ConsentPolicyCategories,
  verifyConsentPolicy,
} from '../consent-policy';
import {
  KEY_SEPARATOR,
  LOCAL_STORAGE_UNSUPPORTED,
  NOT_FOUND,
  PREFIX_SEPARATOR,
  STORAGE_PREFIX,
} from '../utils/constants';
import { localStorageCleaner } from '../utils/local-storage-cleaner';
import {
  deserializeData,
  getCacheRecords,
  isExpired,
} from '../utils/record-utils';

export interface LocalStorageStrategyOptions extends BaseStorageOptions {
  expiration?: number;
  createdAt?: number;
  category?: ConsentPolicyCategories;
}

export class LocalStorageStrategy extends BaseStorage<
  LocalStorageStrategyOptions
> {
  async setItem<T>(
    key: string,
    value: T,
    options: LocalStorageStrategyOptions,
  ) {
    const serializedKey = getCacheKey(key, options);
    const serializedValue = serializeData(value, options);

    // not mandatory, yet (gradual enforcement)
    if (options.category) {
      verifyConsentPolicy(options.category);
    }

    try {
      localStorage.setItem(serializedKey, serializedValue);
    } catch (e) {
      localStorageCleaner(serializedKey.length + serializedValue.length);
      localStorage.setItem(serializedKey, serializedValue);
    }
  }

  getItem<T = any>(
    key: string,
    options: LocalStorageStrategyOptions,
  ): Promise<T> {
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

  removeItem(key: string, options: LocalStorageStrategyOptions) {
    key = getCacheKey(key, options);
    localStorage.removeItem(key);
    return Promise.resolve();
  }

  getAllItems<T = any>(options: LocalStorageStrategyOptions): Promise<T> {
    const prefix = getCachePrefix(options);
    const items: any = {};
    getCacheRecords(prefix).forEach((record) => {
      if (!isExpired(record)) {
        items[record.key] = record.value;
      }
    });
    return Promise.resolve(items);
  }
}

function getCacheKey(
  key: string,
  options: LocalStorageStrategyOptions,
): string {
  return getCachePrefix(options) + key;
}

function stringify(obj: any) {
  return typeof obj === 'string' ? obj : JSON.stringify(obj);
}

function getCachePrefix(options: LocalStorageStrategyOptions) {
  return (
    [STORAGE_PREFIX, options.namespace, stringify(options.scope)]
      .filter((x) => x)
      .join(PREFIX_SEPARATOR) + KEY_SEPARATOR
  );
}

export interface SerializedData {
  lastUsed: number;
  createdAt: number;
  expiration?: number;
  value: any;
}

function serializeData(
  value: any,
  options: { createdAt?: number; expiration?: number },
) {
  const data: SerializedData = {
    lastUsed: Date.now(),
    createdAt: options.createdAt || Date.now(),
    expiration: options.expiration,
    value,
  };
  return JSON.stringify(data);
}

function updateAccessTime(fullKey: string, data: SerializedData) {
  const { expiration, createdAt } = data;
  localStorage.setItem(
    fullKey,
    serializeData(data.value, { expiration, createdAt }),
  );
}
