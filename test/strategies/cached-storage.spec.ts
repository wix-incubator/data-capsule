import { expect } from 'chai';
import nock from 'nock';
import { LocalStorage } from 'node-localstorage';
import sinon from 'sinon';
import {
  CachedStorageStrategy,
  LocalStorageCachedCapsule,
  NOT_FOUND,
  WixStorageStrategy,
} from '../../src';

describe('cached-storage-strategy', () => {
  beforeEach(() => {
    (global as any).localStorage = new LocalStorage('./scratch');
    (global as any).document = { cookie: '_wixCIDX=wixUser' };
  });

  afterEach(() => {
    (global as any).localStorage.clear();
  });

  it('should cache items when setting items', async () => {
    const capsule = LocalStorageCachedCapsule({
      remoteStrategy: new WixStorageStrategy(),
    });
    nock('http://localhost')
      .post('/_api/wix-user-preferences-webapp/set', {
        nameSpace: 'wix',
        key: 'shahata',
        blob: 123,
      })
      .reply(200);
    await capsule.setItem('shahata', 123, { namespace: 'wix' });
    expect(await capsule.getItem('shahata', { namespace: 'wix' })).to.equal(
      123,
    );
  });

  it('should cache items per user', async () => {
    (global as any).document = { cookie: '_wixCIDX=userId1' };
    const capsule1 = LocalStorageCachedCapsule({
      remoteStrategy: new WixStorageStrategy(),
    });
    nock('http://localhost')
      .post('/_api/wix-user-preferences-webapp/set', {
        nameSpace: 'wix',
        key: 'shahata',
        blob: 123,
      })
      .reply(200);
    await capsule1.setItem('shahata', 123, { namespace: 'wix' });

    (global as any).document = { cookie: '_wixCIDX=userId2' };
    const capsule2 = LocalStorageCachedCapsule({
      remoteStrategy: new WixStorageStrategy(),
    });
    nock('http://localhost')
      .post('/_api/wix-user-preferences-webapp/set', {
        nameSpace: 'wix',
        key: 'shahata',
        blob: 456,
      })
      .reply(200);
    await capsule2.setItem('shahata', 456, { namespace: 'wix' });

    (global as any).document = { cookie: '_wixCIDX=userId1' };
    expect(await capsule1.getItem('shahata', { namespace: 'wix' })).to.equal(
      123,
    );
    (global as any).document = { cookie: '_wixCIDX=userId2' };
    expect(await capsule2.getItem('shahata', { namespace: 'wix' })).to.equal(
      456,
    );
  });

  it('should query server if item is not in cache', async () => {
    const capsule = LocalStorageCachedCapsule({
      remoteStrategy: new WixStorageStrategy(),
    });
    nock('http://localhost')
      .get(
        '/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata',
      )
      .reply(200, { shahata: 123 });
    expect(await capsule.getItem('shahata', { namespace: 'wix' })).to.equal(
      123,
    );
  });

  it('should cache items when getting items', async () => {
    const capsule = LocalStorageCachedCapsule({
      remoteStrategy: new WixStorageStrategy(),
    });
    nock('http://localhost')
      .get(
        '/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata',
      )
      .reply(200, { shahata: 123 });
    expect(await capsule.getItem('shahata', { namespace: 'wix' })).to.equal(
      123,
    );
    expect(await capsule.getItem('shahata', { namespace: 'wix' })).to.equal(
      123,
    );
  });

  it('should cache items only for one hour', async () => {
    const clock = sinon.useFakeTimers();
    const capsule = LocalStorageCachedCapsule({
      remoteStrategy: new WixStorageStrategy(),
    });
    nock('http://localhost')
      .get(
        '/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata',
      )
      .reply(200, { shahata: 123 });
    expect(await capsule.getItem('shahata', { namespace: 'wix' })).to.equal(
      123,
    );
    clock.tick(3600000);
    nock('http://localhost')
      .get(
        '/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata',
      )
      .reply(200, { shahata: 123 });
    expect(await capsule.getItem('shahata', { namespace: 'wix' })).to.equal(
      123,
    );
    expect(await capsule.getItem('shahata', { namespace: 'wix' })).to.equal(
      123,
    );
    clock.restore();
  });

  it('should cache items when getting all items', async () => {
    const capsule = LocalStorageCachedCapsule({
      remoteStrategy: new WixStorageStrategy(),
    });
    nock('http://localhost')
      .get('/_api/wix-user-preferences-webapp/getVolatilePrefs/wix')
      .reply(200, { shahata: 123 });
    expect(await capsule.getAllItems({ namespace: 'wix' })).to.eql({
      shahata: 123,
    });
    expect(await capsule.getItem('shahata', { namespace: 'wix' })).to.equal(
      123,
    );
  });

  it('should cache also the knowledge about inexistence of items', async () => {
    const capsule = LocalStorageCachedCapsule({
      remoteStrategy: new WixStorageStrategy(),
    });
    nock('http://localhost')
      .get(
        '/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata',
      )
      .reply(404);
    await expect(
      capsule.getItem('shahata', { namespace: 'wix' }),
    ).to.be.rejectedWith(NOT_FOUND);
    await expect(
      capsule.getItem('shahata', { namespace: 'wix' }),
    ).to.be.rejectedWith(NOT_FOUND);
  });

  it('should cache also the knowledge about removal of items', async () => {
    const capsule = LocalStorageCachedCapsule({
      remoteStrategy: new WixStorageStrategy(),
    });
    nock('http://localhost')
      .post('/_api/wix-user-preferences-webapp/delete', {
        nameSpace: 'wix',
        key: 'shahata',
      })
      .reply(200);
    await capsule.removeItem('shahata', { namespace: 'wix' });
    await expect(
      capsule.getItem('shahata', { namespace: 'wix' }),
    ).to.be.rejectedWith(NOT_FOUND);
  });

  it('should throw if non BaseStorage is passed', () => {
    expect(() => new CachedStorageStrategy({} as any)).to.throw(
      'must extend BaseStorage',
    );
    expect(
      () =>
        new CachedStorageStrategy({
          remoteStrategy: new WixStorageStrategy(),
          localStrategy: {} as any,
        }),
    ).to.throw('must extend BaseStorage');
  });

  describe('local cache ignorance', () => {
    beforeEach(() => {
      (global as any).localStorage.clear();
      (global as any).document = { cookie: '' };
    });

    it('ignores in case cannot retrieve user id', async () => {
      const capsule = LocalStorageCachedCapsule({
        remoteStrategy: new WixStorageStrategy(),
      });

      nock('http://localhost')
        .post('/_api/wix-user-preferences-webapp/set', {
          nameSpace: 'wix',
          key: 'shahata',
          blob: 123,
        })
        .reply(200);

      nock('http://localhost')
        .get(
          '/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata',
        )
        .reply(200, { shahata: 456 });

      await capsule.setItem('shahata', 123, { namespace: 'wix' });

      expect(await capsule.getItem('shahata', { namespace: 'wix' })).to.equal(
        456,
      );
    });
  });
});
