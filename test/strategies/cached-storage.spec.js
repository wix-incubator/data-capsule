const co = require('co');
const nock = require('nock');
const {expect} = require('chai');
const {LocalStorage} = require('node-localstorage');
const {NOT_FOUND, WixStorageStrategy, LocalStorageCachedCapsule} = require('../../src');

describe('cached-storage-strategy', () => {
  beforeEach(() => {
    global.localStorage = new LocalStorage('./scratch');
  });

  afterEach(() => {
    global.localStorage.clear();
  });

  it('should cache items when setting items', co.wrap(function* () {
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').post('/_api/wix-user-preferences-webapp/set',
      {nameSpace: 'wix', key: 'shahata', blob: 123}).reply(200);
    yield capsule.setItem('shahata', 123, {namespace: 'wix'});
    expect(yield capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
  }));

  it('should query server if item is not in cache', co.wrap(function* () {
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').get('/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata')
      .reply(200, {shahata: 123});
    expect(yield capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
  }));

  it('should cache items when getting items', co.wrap(function* () {
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').get('/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata')
      .reply(200, {shahata: 123});
    expect(yield capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
    expect(yield capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
  }));

  it('should cache items when getting all items', co.wrap(function* () {
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').get('/_api/wix-user-preferences-webapp/getVolatilePrefs/wix')
      .reply(200, {shahata: 123});
    expect(yield capsule.getAllItems({namespace: 'wix'})).to.eql({shahata: 123});
    expect(yield capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
  }));

  it('should cache also the knowledge about inexistence of items', co.wrap(function* () {
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').get('/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata').reply(404);
    yield expect(capsule.getItem('shahata', {namespace: 'wix'})).to.be.rejectedWith(NOT_FOUND);
    yield expect(capsule.getItem('shahata', {namespace: 'wix'})).to.be.rejectedWith(NOT_FOUND);
  }));

  it('should cache also the knowledge about removal of items', co.wrap(function* () {
    const capsule = new LocalStorageCachedCapsule({remoteStrategy: new WixStorageStrategy()});
    nock('http://localhost').post('/_api/wix-user-preferences-webapp/delete',
      {nameSpace: 'wix', key: 'shahata'}).reply(200);
    yield capsule.removeItem('shahata', {namespace: 'wix'});
    yield expect(capsule.getItem('shahata', {namespace: 'wix'})).to.be.rejectedWith(NOT_FOUND);
  }));
});
