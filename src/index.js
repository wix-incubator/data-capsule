'use strict';

const FrameStorageListener = require('./utils/frame-storage-listener');
const LocalStorageStrategy = require('./strategies/local-storage');
const LimitedLocalStorageStrategy = require('./strategies/limited-local-storage');
const FrameStorageStrategy = require('./strategies/frame-storage');
const WixStorageStrategy = require('./strategies/wix-storage');
const CachedStorageStrategy = require('./strategies/cached-storage');
const {NOT_FOUND} = require('./utils/constants');
const BaseStorage = require('./base-storage');
const DataCapsule = require('./data-capsule');

function LocalStorageCapsule(options) {
  return new DataCapsule(Object.assign({}, options, {strategy: new LocalStorageStrategy()}));
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
  LimitedLocalStorageStrategy,
  LocalStorageCapsule,
  WixStorageStrategy,
  CachedStorageStrategy,
  LocalStorageCachedCapsule
};
