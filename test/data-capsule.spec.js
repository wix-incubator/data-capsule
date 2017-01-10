'use strict';

const nock = require('nock');
const {expect} = require('chai');
const {LocalStorage} = require('node-localstorage');
const {DataCapsule, LocalStorageStrategy, CachedStorageStrategy, WixStorageStrategy} = require('../src');

describe('data-capsule', () => {
  describe('with localstorgae strategy', () => {
    beforeEach(() => {
      global.localStorage = new LocalStorage('./target/scratch');
    });

    afterEach(() => {
      global.localStorage.clear();
    });

    it('should store and retrieve information', async () => {
      const capsule = new DataCapsule({strategy: new LocalStorageStrategy()});
      await capsule.setItem('shahata', 123, {namespace: 'wix'});
      expect(await capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
    });

    it('should cache items when setting items', async () => {
      const capsule = new DataCapsule({strategy: new CachedStorageStrategy(new WixStorageStrategy())});
      nock('http://localhost').post('/_api/wix-user-preferences-webapp/set',
        {nameSpace: 'wix', key: 'shahata', blob: 123}).reply(200);
      await capsule.setItem('shahata', 123, {namespace: 'wix'});
      expect(await capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
    });

    it('should throw if non BaseStorage is passed', () => {
      expect(() => new DataCapsule({strategy: {}})).to.throw('must extend BaseStorage');
    });
  });
});
