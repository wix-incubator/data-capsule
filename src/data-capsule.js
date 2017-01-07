'use strict';

const {NOT_FOUND} = require('./constants');

function validateNamespace(options) {
  if (!options.namespace) {
    throw new Error('namespace is required');
  } else if (typeof options.namespace !== 'string') {
    throw new Error('namespace should be a string');
  }
}

function isExpired(data) {
  if (data.expiration) {
    return data.createdAt + (data.expiration * 1000) <= Date.now();
  } else {
    return false;
  }
}

function serializeData(value, options) {
  return JSON.stringify({
    createdAt: Date.now(),
    expiration: options.expiration,
    value
  });
}

function buildValidadateOptions(capsuleOptions, options) {
  options = Object.assign({}, capsuleOptions, options);
  validateNamespace(options);
  return options;
}

function deserializeData(data) {
  return JSON.parse(data || '{}');
}

function validateFound(data) {
  if (data.value && !isExpired(data)) {
    return data.value;
  } else {
    throw NOT_FOUND;
  }
}

class DataCapsule {
  constructor({strategy, namespace, scope}) {
    this.storageStrategy = strategy;
    this._options = {namespace, scope};
  }


  setItem(key, value, options) {
    options = buildValidadateOptions(this._options, options);
    const data = serializeData(value, options);
    return this.storageStrategy.setItem(key, data, options);
  }

  getItem(key, options) {
    options = buildValidadateOptions(this._options, options);
    return this.storageStrategy.getItem(key, options).then(data => {
      data = deserializeData(data);
      return validateFound(data);
    });
  }

  removeItem(key, options) {
    options = buildValidadateOptions(this._options, options);
    return this.storageStrategy.removeItem(key, options);
  }

  getAllItems(options) {
    options = buildValidadateOptions(this._options, options);
    return this.storageStrategy.getAllItems(options).then(items => {
      return items
        .map(item => Object.assign(item, {value: deserializeData(item.value)}))
        .filter(item => !isExpired(item.value))
        .map(item => Object.assign(item, {value: item.value.value}));
    });
  }
}

module.exports = DataCapsule;
