const co = require('co');
const {expect} = require('chai');
const {LocalStorage} = require('node-localstorage');
const {DataCapsule, LocalStorageStrategy} = require('../src');

describe('data-capsule', () => {
  describe('with localstorgae strategy', () => {
    beforeEach(() => {
      global.localStorage = new LocalStorage('./scratch');
    });

    afterEach(() => {
      global.localStorage.clear();
    });

    it('should store and retrieve information', co.wrap(function* () {
      const capsule = new DataCapsule({strategy: new LocalStorageStrategy()});
      yield capsule.setItem('shahata', 123, {namespace: 'wix'});
      expect(yield capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
    }));
  });
});
