'use strict';

const nock = require('nock');
const sinon = require('sinon');
const {expect} = require('chai');
const {LocalStorage} = require('node-localstorage');
const {NOT_FOUND, WixStorageStrategy, CachedStorageStrategy, LocalStorageCachedCapsule} = require('../../src');

describe('cached-storage-strategy', () => {
  beforeEach(() => {
    global.localStorage = new LocalStorage('./scratch');
  });

  afterEach(() => {
    global.localStorage.clear();
  });

  it('should cache items when setting items', async () => {
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').post('/_api/wix-user-preferences-webapp/set',
      {nameSpace: 'wix', key: 'shahata', blob: 123}).reply(200);
    await capsule.setItem('shahata', 123, {namespace: 'wix'});
    expect(await capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
  });

  it('should query server if item is not in cache', async () => {
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').get('/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata')
      .reply(200, {shahata: 123});
    expect(await capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
  });

  it('should cache items when getting items', async () => {
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').get('/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata')
      .reply(200, {shahata: 123});
    expect(await capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
    expect(await capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
  });

  it('should cache items only for one hour', async () => {
    const clock = sinon.useFakeTimers();
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').get('/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata')
      .reply(200, {shahata: 123});
    expect(await capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
    clock.tick(3600000);
    nock('http://localhost').get('/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata')
      .reply(200, {shahata: 123});
    expect(await capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
    expect(await capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
    clock.restore();
  });

  it('should cache items when getting all items', async () => {
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').get('/_api/wix-user-preferences-webapp/getVolatilePrefs/wix')
      .reply(200, {shahata: 123});
    expect(await capsule.getAllItems({namespace: 'wix'})).to.eql({shahata: 123});
    expect(await capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
  });

  it('should cache also the knowledge about inexistence of items', async () => {
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').get('/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata').reply(404);
    await expect(capsule.getItem('shahata', {namespace: 'wix'})).to.be.rejectedWith(NOT_FOUND);
    await expect(capsule.getItem('shahata', {namespace: 'wix'})).to.be.rejectedWith(NOT_FOUND);
  });

  it('should cache also the knowledge about removal of items', async () => {
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').post('/_api/wix-user-preferences-webapp/delete',
      {nameSpace: 'wix', key: 'shahata'}).reply(200);
    await capsule.removeItem('shahata', {namespace: 'wix'});
    await expect(capsule.getItem('shahata', {namespace: 'wix'})).to.be.rejectedWith(NOT_FOUND);
  });

  it('should throw if non BaseStorage is passed', () => {
    expect(() => new CachedStorageStrategy({})).to.throw('must extend BaseStorage');
    expect(() => new CachedStorageStrategy(new WixStorageStrategy(), {})).to.throw('must extend BaseStorage');
  });
});
