import { SerializedData } from '../strategies/local-storage';
import { getCacheRecords, isExpired, TCacheRecords } from './record-utils';

function deleteRecord(cleaner: Cleaner, record = cleaner.records[0]) {
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

function deleteExpired(cleaner: Cleaner) {
  const expiredRecords = cleaner.records.filter((record) => isExpired(record));
  expiredRecords.forEach((record) => (cleaner = deleteRecord(cleaner, record)));
  return cleaner;
}

function lastUsedSort(a: SerializedData, b: SerializedData) {
  return a.lastUsed - b.lastUsed;
}

function canClean(cleaner: Cleaner) {
  return cleaner.records.length > 0 && cleaner.requiredSpace > 0;
}

function deleteOld(cleaner: Cleaner) {
  cleaner.records.sort(lastUsedSort);
  while (canClean(cleaner)) {
    cleaner = deleteRecord(cleaner);
  }
  return cleaner;
}

interface Cleaner {
  records: TCacheRecords[];
  requiredSpace: number;
}

export function localStorageCleaner(requiredSpace: number) {
  let cleaner: Cleaner = { records: getCacheRecords(), requiredSpace };
  cleaner = deleteExpired(cleaner);
  deleteOld(cleaner);
}
