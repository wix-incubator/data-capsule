'use strict';

const co = require('co');
const nock = require('nock');
const {expect} = require('chai');
const {LocalStorage} = require('node-localstorage');
const {DataCapsule, LocalStorageStrategy, CachedStorageStrategy, WixStorageStrategy} = require('../src');

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

    it('should cache items when setting items', co.wrap(function* () {
      const capsule = new DataCapsule({strategy: new CachedStorageStrategy(new WixStorageStrategy())});
      nock('http://localhost').post('/_api/wix-user-preferences-webapp/set',
        {nameSpace: 'wix', key: 'shahata', blob: 123}).reply(200);
      yield capsule.setItem('shahata', 123, {namespace: 'wix'});
      expect(yield capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
    }));

    it('should throw if non BaseStorage is passed', () => {
      expect(() => new DataCapsule({strategy: {}})).to.throw('must extend BaseStorage');
    });
  });
});
