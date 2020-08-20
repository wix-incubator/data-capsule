/* global localStorage */

import { SerializedData } from '../strategies/local-storage';
import { KEY_SEPARATOR, PREFIX_SEPARATOR, STORAGE_PREFIX } from './constants';

function parseCacheKey(cacheKey: string) {
  const [prefix, key] = cacheKey.split(KEY_SEPARATOR);
  const [, namespace, scope] = prefix.split(PREFIX_SEPARATOR);
  if (scope === undefined) {
    return { namespace, key };
  } else {
    return { namespace, scope, key };
  }
}

function deserializeData(data: string): SerializedData {
  return JSON.parse(data);
}

export type TCacheRecords = SerializedData &
  ReturnType<typeof parseCacheKey> & {
    size: number;
    originalKey: string;
  };

function getCacheRecords(
  prefix = STORAGE_PREFIX + PREFIX_SEPARATOR,
): TCacheRecords[] {
  const items = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      const data = localStorage.getItem(key);
      items.push({
        size: key.length + data.length,
        originalKey: key,
        ...deserializeData(data),
        ...parseCacheKey(key),
      });
    }
  }
  return items;
}

function isExpired(data: SerializedData) {
  if (data.expiration) {
    return data.createdAt + data.expiration * 1000 <= Date.now();
  } else {
    return false;
  }
}

export { deserializeData, getCacheRecords, isExpired };
