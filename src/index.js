'use strict';

const FrameStorageListener = require('./utils/frame-storage-listener');
const LocalStorageStrategy = require('./strategies/local-storage');
const MemoryStorageStrategy = require('./strategies/memory-storage');
const FrameStorageStrategy = require('./strategies/frame-storage');
const WixStorageStrategy = require('./strategies/wix-storage');
const CachedStorageStrategy = require('./strategies/cached-storage');
const {NOT_FOUND} = require('./utils/constants');
const BaseStorage = require('./base-storage');
const DataCapsule = require('./data-capsule');

function LocalStorageCapsule(options) {
  return new DataCapsule(Object.assign({}, options, {strategy: new LocalStorageStrategy()}));
}

function MemoryStorageCapsule(options) {
  return new DataCapsule(Object.assign({}, options, {strategy: new MemoryStorageStrategy()}));
}

function LocalStorageCachedCapsule(options) {
  return new DataCapsule(Object.assign({}, options, {
    strategy: new CachedStorageStrategy({remoteStrategy: options.remoteStrategy})
  }));
}

module.exports = {
  NOT_FOUND,
  BaseStorage,
  DataCapsule,
  FrameStorageListener,
  FrameStorageStrategy,
  LocalStorageStrategy,
  MemoryStorageStrategy,
  LocalStorageCapsule,
  MemoryStorageCapsule,
  WixStorageStrategy,
  CachedStorageStrategy,
  LocalStorageCachedCapsule
};
