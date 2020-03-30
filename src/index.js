import FrameStorageListener from './utils/frame-storage-listener';
import LocalStorageStrategy from './strategies/local-storage';
import FrameStorageStrategy from './strategies/frame-storage';
import WixStorageStrategy from './strategies/wix-storage';
import CachedStorageStrategy from './strategies/cached-storage';
import InMemoryStorageStrategy from './strategies/in-memory-storage';
import { NOT_FOUND } from './utils/constants';
import BaseStorage from './base-storage';
import DataCapsule from './data-capsule';

function LocalStorageCapsule(options) {
  return new DataCapsule(
    Object.assign({}, options, { strategy: new LocalStorageStrategy() }),
  );
}

function InMemoryStorageCapsule(options) {
  return new DataCapsule(
    Object.assign({}, options, { strategy: new InMemoryStorageStrategy() }),
  );
}

function LocalStorageCachedCapsule(options) {
  return new DataCapsule(
    Object.assign({}, options, {
      strategy: new CachedStorageStrategy({
        remoteStrategy: options.remoteStrategy,
      }),
    }),
  );
}

export {
  NOT_FOUND,
  BaseStorage,
  DataCapsule,
  FrameStorageListener,
  FrameStorageStrategy,
  LocalStorageStrategy,
  LocalStorageCapsule,
  WixStorageStrategy,
  CachedStorageStrategy,
  LocalStorageCachedCapsule,
  InMemoryStorageStrategy,
  InMemoryStorageCapsule,
};
