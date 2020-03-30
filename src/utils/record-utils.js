/* global localStorage */

import { STORAGE_PREFIX, PREFIX_SEPARATOR, KEY_SEPARATOR } from './constants';

function parseCacheKey(cacheKey) {
  const [prefix, key] = cacheKey.split(KEY_SEPARATOR);
  const [, namespace, scope] = prefix.split(PREFIX_SEPARATOR);
  if (scope === undefined) {
    return { namespace, key };
  } else {
    return { namespace, scope, key };
  }
}

function deserializeData(data) {
  return JSON.parse(data);
}

function getCacheRecords(prefix = STORAGE_PREFIX + PREFIX_SEPARATOR) {
  const items = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      const data = localStorage.getItem(key);
      items.push(
        Object.assign(
          {
            size: key.length + data.length,
            originalKey: key,
          },
          deserializeData(data),
          parseCacheKey(key),
        ),
      );
    }
  }
  return items;
}

function isExpired(data) {
  if (data.expiration) {
    return data.createdAt + data.expiration * 1000 <= Date.now();
  } else {
    return false;
  }
}

export { deserializeData, getCacheRecords, isExpired };
