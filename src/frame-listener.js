'use strict';

const FrameStorageListener = require('./utils/frame-storage-listener');
const LocalStorageStrategy = require('./strategies/local-storage');
const {NOT_FOUND} = require('./utils/constants');
const BaseStorage = require('./base-storage');
const DataCapsule = require('./data-capsule');

module.exports = {
  NOT_FOUND,
  BaseStorage,
  DataCapsule,
  LocalStorageStrategy,
  FrameStorageListener,
};
