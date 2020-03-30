/* global localStorage */

import { getCacheRecords, isExpired } from './record-utils';

function deleteRecord(cleaner, record = cleaner.records[0]) {
  localStorage.removeItem(record.originalKey);
  return {
    records:
      record === cleaner.records[0]
        ? cleaner.records.slice(1)
        : cleaner.records.filter(
            ({ originalKey }) => originalKey !== record.originalKey,
          ),
    requiredSpace: cleaner.requiredSpace - record.size,
  };
}

function deleteExpired(cleaner) {
  const expiredRecords = cleaner.records.filter(record => isExpired(record));
  expiredRecords.forEach(record => (cleaner = deleteRecord(cleaner, record)));
  return cleaner;
}

function lastUsedSort(a, b) {
  return a.lastUsed - b.lastUsed;
}

function canClean(cleaner) {
  return cleaner.records.length > 0 && cleaner.requiredSpace > 0;
}

function deleteOld(cleaner) {
  cleaner.records.sort(lastUsedSort);
  while (canClean(cleaner)) {
    cleaner = deleteRecord(cleaner);
  }
  return cleaner;
}

export default function localStorageCleaner(requiredSpace) {
  let cleaner = { records: getCacheRecords(), requiredSpace };
  cleaner = deleteExpired(cleaner);
  deleteOld(cleaner);
}
