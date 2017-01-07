'use strict';

const LocalStorageStrategy = require('./strategies/localstorage');
const FrameStorageStrategy = require('./strategies/frame-storage');
const FrameStorageListener = require('./frame-storage-listener');
const DataCapsule = require('./data-capsule');
const {NOT_FOUND} = require('./constants');

function LocalStorageCapsule(options) {
  return new DataCapsule(Object.assign({}, options, {strategy: new LocalStorageStrategy()}));
}

module.exports = {
  NOT_FOUND,
  DataCapsule,
  FrameStorageListener,
  FrameStorageStrategy,
  LocalStorageStrategy,
  LocalStorageCapsule
};
