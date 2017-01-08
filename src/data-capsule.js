'use strict';

function validateNamespace(options) {
  if (!options.namespace) {
    throw new Error('namespace is required');
  } else if (typeof options.namespace !== 'string') {
    throw new Error('namespace should be a string');
  }
}

function buildValidadateOptions(capsuleOptions, options) {
  options = Object.assign({}, capsuleOptions, options);
  validateNamespace(options);
  return options;
}

class DataCapsule {
  constructor({strategy, namespace, scope}) {
    this.storageStrategy = strategy;
    this._options = {namespace, scope};
  }


  setItem(key, value, options) {
    options = buildValidadateOptions(this._options, options);
    return this.storageStrategy.setItem(key, value, options);
  }

  getItem(key, options) {
    options = buildValidadateOptions(this._options, options);
    return this.storageStrategy.getItem(key, options);
  }

  removeItem(key, options) {
    options = buildValidadateOptions(this._options, options);
    return this.storageStrategy.removeItem(key, options);
  }

  getAllItems(options) {
    options = buildValidadateOptions(this._options, options);
    return this.storageStrategy.getAllItems(options);
  }
}

module.exports = DataCapsule;
