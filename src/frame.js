const FrameStorageStrategy = require('./strategies/frame-storage');
const { NOT_FOUND } = require('./utils/constants');
const BaseStorage = require('./base-storage');
const DataCapsule = require('./data-capsule');

module.exports = {
  NOT_FOUND,
  BaseStorage,
  DataCapsule,
  FrameStorageStrategy,
};
