'use strict';

const BaseStorage = require('../src/base-storage');
const {expect} = require('chai');

describe('base-storage', () => {
  it('should throw if instantiating with pure methods', () => {
    class SomeStorage extends BaseStorage {}
    expect(() => new SomeStorage()).to.throw('must be overriden');
  });

  it('should not throw if you override the methods', () => {
    class SomeStorage extends BaseStorage {
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
    }
    expect(() => new SomeStorage()).not.to.throw();
  });
});
