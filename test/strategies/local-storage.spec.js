import sinon from 'sinon';
import { expect } from 'chai';
import { LocalStorage } from 'node-localstorage';
import {
  NOT_FOUND,
  LocalStorageCapsule,
  LOCAL_STORAGE_UNSUPPORTED,
  COOKIE_CONSENT_DISALLOWED,
} from '../../src';

describe('localstorage-strategy', () => {
  beforeEach(() => {
    global.localStorage = new LocalStorage('./scratch');
  });

  afterEach(() => {
    global.localStorage && global.localStorage.clear();
  });

  it('should store and retrieve information', async () => {
    const capsule = new LocalStorageCapsule();
    await capsule.setItem('shahata', 123, { namespace: 'wix' });
    expect(await capsule.getItem('shahata', { namespace: 'wix' })).to.equal(
      123,
    );
  });

  it('should throw if no namespace in setItem', async () => {
    const capsule = new LocalStorageCapsule();
    await expect(capsule.setItem('shahata', 123)).to.eventually.rejectedWith(
      'namespace is required',
    );
  });

  it('should throw if no namespace in getItem', () => {
    const capsule = new LocalStorageCapsule();
    expect(() => capsule.getItem('shahata')).to.throw('namespace is required');
  });

  it('should throw if namespace is not a string', () => {
    const capsule = new LocalStorageCapsule();
    expect(() => capsule.getItem('shahata', { namespace: 123 })).to.throw(
      'namespace should be a string',
    );
  });

  it('should accept namespace in capsule constructor', async () => {
    const capsule = new LocalStorageCapsule({ namespace: 'wix' });
    await capsule.setItem('shahata', 123);
    expect(await capsule.getItem('shahata')).to.equal(123);
  });

  it('should store namespaces in isolation', async () => {
    const capsule = new LocalStorageCapsule();
    await capsule.setItem('shahata', 123, { namespace: 'wix1' });
    await capsule.setItem('shahata', 456, { namespace: 'wix2' });
    expect(await capsule.getItem('shahata', { namespace: 'wix1' })).to.equal(
      123,
    );
    expect(await capsule.getItem('shahata', { namespace: 'wix2' })).to.equal(
      456,
    );
  });

  it('should optionally pass a scope for additional isolation', async () => {
    const capsule = new LocalStorageCapsule({ namespace: 'wix' });
    await capsule.setItem('shahata', 123, { scope: 'wix1' });
    await capsule.setItem('shahata', 456, { scope: 'wix2' });
    expect(await capsule.getItem('shahata', { scope: 'wix1' })).to.equal(123);
    expect(await capsule.getItem('shahata', { scope: 'wix2' })).to.equal(456);
  });

  it('should allow scope to be an object', async () => {
    const capsule = new LocalStorageCapsule({ namespace: 'wix' });
    await capsule.setItem('shahata', 123, { scope: { key: 'wix1' } });
    await capsule.setItem('shahata', 456, { scope: { key: 'wix2' } });
    expect(
      await capsule.getItem('shahata', { scope: { key: 'wix1' } }),
    ).to.equal(123);
    expect(
      await capsule.getItem('shahata', { scope: { key: 'wix2' } }),
    ).to.equal(456);
  });

  it('should optionally pass a scope in constructor', async () => {
    const capsule = new LocalStorageCapsule({
      namespace: 'wix',
      scope: 'scope',
    });
    await capsule.setItem('shahata', 123);
    expect(await capsule.getItem('shahata', { scope: 'scope' })).to.equal(123);
  });

  it('should result in rejection if item is not found', async () => {
    const capsule = new LocalStorageCapsule({ namespace: 'wix' });
    await expect(capsule.getItem('shahata')).to.be.rejectedWith(NOT_FOUND);
  });

  it('should treat expiration as not found', async () => {
    const clock = sinon.useFakeTimers();
    const capsule = new LocalStorageCapsule({ namespace: 'wix' });
    await capsule.setItem('shahata', 123, { expiration: 2 });
    clock.tick(2000);
    await expect(capsule.getItem('shahata')).to.be.rejectedWith(NOT_FOUND);
    clock.restore();
  });

  it('should remove item', async () => {
    const capsule = new LocalStorageCapsule({ namespace: 'wix' });
    await capsule.setItem('shahata', 123);
    expect(await capsule.getItem('shahata')).to.equal(123);
    await capsule.removeItem('shahata');
    await expect(capsule.getItem('shahata')).to.be.rejectedWith(NOT_FOUND);
  });

  it('should get all items', async () => {
    const capsule = new LocalStorageCapsule({
      namespace: 'wix',
      scope: 'scope',
    });
    await capsule.setItem('shahata1', 123);
    await capsule.setItem('shahata2', 456);
    expect(await capsule.getAllItems()).to.eql({
      shahata1: 123,
      shahata2: 456,
    });
  });

  it('should get all items filtering other namespaces/scopes', async () => {
    const capsule = new LocalStorageCapsule({
      namespace: 'wix',
      scope: 'scope',
    });
    await capsule.setItem('shahata1', 123);
    await capsule.setItem('shahata2', 456, { namespace: 'wix1' });
    await capsule.setItem('shahata3', 789, { scope: 'scope1' });
    expect(await capsule.getAllItems()).to.eql({ shahata1: 123 });
  });

  it('should get all items when user controls filtering', async () => {
    const capsule = new LocalStorageCapsule();
    await capsule.setItem('shahata', 1, { namespace: 'wix1' });
    await capsule.setItem('shahata', 2, { namespace: 'wix1', scope: 'scope1' });
    await capsule.setItem('shahata', 3, { namespace: 'wix1', scope: 'scope2' });
    await capsule.setItem('shahata', 4, { namespace: 'wix2', scope: 'scope1' });
    expect(
      await capsule.getAllItems({ namespace: 'wix1', scope: 'scope1' }),
    ).to.eql({ shahata: 2 });
    expect(await capsule.getAllItems({ namespace: 'wix1' })).to.eql({
      shahata: 1,
    });
  });

  it('should get all items filtering expired', async () => {
    const clock = sinon.useFakeTimers();
    const capsule = new LocalStorageCapsule({
      namespace: 'wix',
      scope: 'scope',
    });
    await capsule.setItem('shahata1', 123);
    await capsule.setItem('shahata2', 456, { expiration: 2 });
    clock.tick(2000);
    expect(await capsule.getAllItems()).to.eql({ shahata1: 123 });
    clock.restore();
  });

  it('should accept json scope', async () => {
    const capsule = new LocalStorageCapsule({ namespace: 'wix' });
    await capsule.setItem('shahata', 1, { scope: { userId: 123 } });
    expect(await capsule.getAllItems({ scope: { userId: 123 } })).to.eql({
      shahata: 1,
    });
  });

  it('should reject if get from local storage fails', async () => {
    const capsule = new LocalStorageCapsule({ namespace: 'wix' });
    global.localStorage = undefined;
    await expect(capsule.getItem('shahata')).to.be.rejectedWith(
      LOCAL_STORAGE_UNSUPPORTED,
    );
  });

  describe('cookie consent', () => {
    const allowedCategories = ['analytics', 'functional'];
    const APIs = [
      ['global', () => mockConsentPolicyManagerGlobal(allowedCategories)],
      ['js sdk', () => mockConsentPolicyManagerWixSdk(allowedCategories)],
    ];

    APIs.forEach(([name, mock]) => {
      describe(`with ${name} API`, () => {
        mock();

        it('allows setting in case category is listed', async () => {
          const capsule = new LocalStorageCapsule({ namespace: 'wix' });
          await capsule.setItem('key', 1, { category: 'functional' });
          expect(await capsule.getAllItems()).to.eql({
            key: 1,
          });
        });

        it('disallows setting in case category is unlisted', async () => {
          const capsule = new LocalStorageCapsule({ namespace: 'wix' });
          await expect(
            capsule.setItem('key', 1, { category: 'advertising' }),
          ).to.eventually.be.rejectedWith(COOKIE_CONSENT_DISALLOWED);
        });

        it('allows setting in case category is not passed', async () => {
          const capsule = new LocalStorageCapsule({ namespace: 'wix' });
          await capsule.setItem('key', 1);
          expect(await capsule.getAllItems()).to.eql({
            key: 1,
          });
        });
      });
    });

    it('rejects in case category is unknown', async () => {
      const capsule = new LocalStorageCapsule({ namespace: 'wix' });
      await expect(
        capsule.setItem('key', 1, { category: 'foo' }),
      ).to.eventually.be.rejectedWith(/category must be one of/);
    });

    it('rejects any try to set an item if no consent policy manager exists', async () => {
      const capsule = new LocalStorageCapsule({ namespace: 'wix' });
      await expect(
        capsule.setItem('key', 1, { category: 'advertising' }),
      ).to.eventually.be.rejectedWith(COOKIE_CONSENT_DISALLOWED);
    });

    it('always approves in case item is in essential category', async () => {
      const capsule = new LocalStorageCapsule({ namespace: 'wix' });
      await capsule.setItem('key', 1, { category: 'essential' });
      expect(await capsule.getAllItems()).to.eql({
        key: 1,
      });
    });
  });
});

function mockConsentPolicyManagerGlobal(categories) {
  beforeEach(() => {
    global.consentPolicyManager = {
      getCurrentConsentPolicy: () => categories,
    };
  });

  afterEach(() => {
    delete global.consentPolicyManager;
  });
}

function mockConsentPolicyManagerWixSdk(categories) {
  beforeEach(() => {
    global.Wix = {
      Utils: {
        getCurrentConsentPolicy: () => categories,
      },
    };
  });

  afterEach(() => {
    delete global.consentPolicyManager;
  });
}
