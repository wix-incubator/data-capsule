const nock = require('nock');
const { expect } = require('chai');
const {
  SERVER_ERROR,
  NOT_FOUND,
  DataCapsule,
  WixStorageStrategy,
} = require('../../src');

describe('wix-storage-strategy', () => {
  it('should set item', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .post('/_api/wix-user-preferences-webapp/set', {
        nameSpace: 'wix',
        key: 'shahata',
        blob: 123,
      })
      .reply(200);
    await capsule.setItem('shahata', 123, { namespace: 'wix' });
  });

  it('should set item with scope', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .post('/_api/wix-user-preferences-webapp/set', {
        nameSpace: 'wix',
        key: 'shahata',
        blob: 123,
        siteId: 456,
      })
      .reply(200);
    await capsule.setItem('shahata', 123, {
      namespace: 'wix',
      scope: { siteId: 456 },
    });
  });

  it('should set item with expiration', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .post('/_api/wix-user-preferences-webapp/set', {
        nameSpace: 'wix',
        key: 'shahata',
        blob: 123,
        TTLInDays: 1,
      })
      .reply(200);
    await capsule.setItem('shahata', 123, { namespace: 'wix', expiration: 1 });
  });

  it('should set item with expiration in days', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .post('/_api/wix-user-preferences-webapp/set', {
        nameSpace: 'wix',
        key: 'shahata',
        blob: 123,
        TTLInDays: 2,
      })
      .reply(200);
    await capsule.setItem('shahata', 123, {
      namespace: 'wix',
      expiration: 60 * 60 * 48,
    });
  });

  it('should set item with error handling', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .post('/_api/wix-user-preferences-webapp/set', {
        nameSpace: 'wix',
        key: 'shahata',
        blob: 123,
      })
      .reply(500);
    await expect(
      capsule.setItem('shahata', 123, { namespace: 'wix' }),
    ).to.be.rejectedWith(SERVER_ERROR);
  });

  it('should delete item', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .post('/_api/wix-user-preferences-webapp/delete', {
        nameSpace: 'wix',
        key: 'shahata',
      })
      .reply(200);
    await capsule.removeItem('shahata', { namespace: 'wix' });
  });

  it('should delete item with scope', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .post('/_api/wix-user-preferences-webapp/delete', {
        nameSpace: 'wix',
        key: 'shahata',
        siteId: 456,
      })
      .reply(200);
    await capsule.removeItem('shahata', {
      namespace: 'wix',
      scope: { siteId: 456 },
    });
  });

  it('should delete item with error handling', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .post('/_api/wix-user-preferences-webapp/delete', {
        nameSpace: 'wix',
        key: 'shahata',
      })
      .reply(500);
    await expect(
      capsule.removeItem('shahata', { namespace: 'wix' }),
    ).to.be.rejectedWith(SERVER_ERROR);
  });

  it('should get item', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .get(
        '/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata',
      )
      .reply(200, { shahata: 123 });
    expect(await capsule.getItem('shahata', { namespace: 'wix' })).to.equal(
      123,
    );
  });

  it('should get item with scope', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .get(
        '/_api/wix-user-preferences-webapp/getVolatilePrefForSite/wix/456/shahata',
      )
      .reply(200, { shahata: 123 });
    expect(
      await capsule.getItem('shahata', {
        namespace: 'wix',
        scope: { siteId: 456 },
      }),
    ).to.equal(123);
  });

  it('should get item with error handling', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .get(
        '/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata',
      )
      .reply(500);
    await expect(
      capsule.getItem('shahata', { namespace: 'wix' }),
    ).to.be.rejectedWith(SERVER_ERROR);
  });

  it('should get item with 404 handling', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .get(
        '/_api/wix-user-preferences-webapp/getVolatilePrefForKey/wix/shahata',
      )
      .reply(404);
    await expect(
      capsule.getItem('shahata', { namespace: 'wix' }),
    ).to.be.rejectedWith(NOT_FOUND);
  });

  it('should get items', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .get('/_api/wix-user-preferences-webapp/getVolatilePrefs/wix')
      .reply(200, { shahata: 123 });
    expect(await capsule.getAllItems({ namespace: 'wix' })).to.eql({
      shahata: 123,
    });
  });

  it('should get items with scope', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .get('/_api/wix-user-preferences-webapp/getVolatilePrefsForSite/wix/456')
      .reply(200, { shahata: 123 });
    expect(
      await capsule.getAllItems({ namespace: 'wix', scope: { siteId: 456 } }),
    ).to.eql({ shahata: 123 });
  });

  it('should get items with error handling', async () => {
    const capsule = new DataCapsule({ strategy: new WixStorageStrategy() });
    nock('http://localhost')
      .get('/_api/wix-user-preferences-webapp/getVolatilePrefs/wix')
      .reply(500);
    await expect(capsule.getAllItems({ namespace: 'wix' })).to.be.rejectedWith(
      SERVER_ERROR,
    );
  });
});
