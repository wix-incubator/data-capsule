import nock from 'nock';
import { expect } from 'chai';
import { LocalStorage } from 'node-localstorage';
import {
  DataCapsule,
  LocalStorageStrategy,
  CachedStorageStrategy,
  WixStorageStrategy,
} from '../src';

describe('data-capsule', () => {
  describe('with localstorage strategy', () => {
    beforeEach(() => {
      global.localStorage = new LocalStorage('./scratch');
      global.document = { cookie: '_wixCIDX=wixUser' };
    });

    afterEach(() => {
      global.localStorage.clear();
    });

    it('should store and retrieve information', async () => {
      const capsule = new DataCapsule({ strategy: new LocalStorageStrategy() });
      await capsule.setItem('shahata', 123, { namespace: 'wix' });
      expect(await capsule.getItem('shahata', { namespace: 'wix' })).to.equal(
        123,
      );
    });

    it('should cache items when setting items', async () => {
      const capsule = new DataCapsule({
        strategy: new CachedStorageStrategy({
          remoteStrategy: new WixStorageStrategy(),
        }),
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

    it('should throw if non BaseStorage is passed', () => {
      expect(() => new DataCapsule({ strategy: {} })).to.throw(
        'must extend BaseStorage',
      );
    });
  });
});
