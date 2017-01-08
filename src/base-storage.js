'use strict';

class BaseStorage {
  constructor() {
    ['setItem', 'getItem', 'removeItem', 'getAllItems'].forEach(method => {
      if (this[method] === BaseStorage.prototype[method]) {
        throw new Error(`BaseStorage method [${method}] must be overriden!`);
      }
    });
  }

  setItem(key, value, options) {
    throw options;
  }

  getItem(key, options) {
    throw options;
  }

  removeItem(key, options) {
    throw options;
  }

  getAllItems(options) {
    throw options;
  }

  static verify(strategy) {
    if (strategy instanceof BaseStorage) {
      return strategy;
    } else {
      throw new Error(`This class must extend BaseStorage!`);
    }
  }
}

module.exports = BaseStorage;
