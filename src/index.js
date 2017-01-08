'use strict';

const LocalStorageStrategy = require('./strategies/local-storage');
const FrameStorageStrategy = require('./strategies/frame-storage');
const FrameStorageListener = require('./frame-storage-listener');
const WixStorageStrategy = require('./strategies/wix-storage');
const CachedStorageStrategy = require('./strategies/cached-storage');
const DataCapsule = require('./data-capsule');
const {NOT_FOUND} = require('./constants');

function LocalStorageCapsule(options) {
  return new DataCapsule(Object.assign({}, options, {strategy: new LocalStorageStrategy()}));
}

function LocalStorageCachedCapsule(options) {
  return new DataCapsule(Object.assign({}, options, {
    strategy: new CachedStorageStrategy(options.remoteStrategy)
  }));
}

module.exports = {
  NOT_FOUND,
  DataCapsule,
  FrameStorageListener,
  FrameStorageStrategy,
  LocalStorageStrategy,
  LocalStorageCapsule,
  WixStorageStrategy,
  CachedStorageStrategy,
  LocalStorageCachedCapsule
};
