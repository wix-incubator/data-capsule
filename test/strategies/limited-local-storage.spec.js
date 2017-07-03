const sinon = require('sinon');
const {expect} = require('chai');
const {LocalStorage} = require('node-localstorage');

const {
  NOT_FOUND,
  DataCapsule,
  LimitedLocalStorageStrategy
} = require('../../src');

describe('LimitedLocalStorage strategy', () => {

  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers(Date.now());
    global.localStorage = new LocalStorage('./limited-local-storage');
  });

  afterEach(() => {
    clock.restore();
    global.localStorage.clear();
  });

  describe('default expiration', () => {

    it('should allow setting and getting the item', async () => {
      const capsule = new DataCapsule({namespace: 'wix', strategy: new LimitedLocalStorageStrategy()});
      await capsule.setItem('test', 123);
      expect(await capsule.getItem('test')).to.equal(123);
    });

    it('should give a default 5 minutes expiration for each value set', async () => {
      const capsule = new DataCapsule({namespace: 'wix', strategy: new LimitedLocalStorageStrategy()});
      await capsule.setItem('test', 123);
      clock.tick(1000 * 60 * 5);
      await expect(capsule.getItem('test')).to.be.rejectedWith(NOT_FOUND);
    });

    it('should schedule the cleanup process upon setting the new item', async () => {
      const capsule = new DataCapsule({namespace: 'wix', strategy: new LimitedLocalStorageStrategy()});
      await capsule.setItem('1', 1);
      await capsule.setItem('2', 2);
      expect(liveKeys()).to.deep.equal(['capsule|wix#1', 'capsule|wix#2']);
      clock.tick(1000 * 60 * 5);
      await capsule.setItem('3', 3, {expiration: 400});
      await timeout(100);
      expect(liveKeys()).to.deep.equal(['capsule|wix#3']);
    });

    it('should clean old items an leave max items allowed', async () => {
      const strategy = new LimitedLocalStorageStrategy({maxItems: 2});
      const capsule = new DataCapsule({namespace: 'wix', strategy});
      await capsule.setItem('1', 1);
      clock.tick(1);
      await capsule.setItem('2', 2);
      clock.tick(2);
      await capsule.setItem('3', 3);
      await timeout(100);
      expect(liveKeys()).to.deep.equal(['capsule|wix#2', 'capsule|wix#3']);
    });

    it('should clean old items and leave ones with valid age', async () => {
      const strategy = new LimitedLocalStorageStrategy({maxAge: 1});
      const capsule = new DataCapsule({namespace: 'wix', strategy});
      await capsule.setItem('1', 1);
      clock.tick(1000);
      await capsule.setItem('2', 2);
      clock.tick(1000);
      await capsule.setItem('3', 3);
      await timeout(100);
      expect(liveKeys()).to.deep.equal(['capsule|wix#3']);
    });

  });

  function liveKeys() {
    const result = [];
    for (let i = 0; i < global.localStorage.length; i++) {
      result.push(global.localStorage.key(i));
    }
    return result.sort();
  }

  function timeout(ms) {
    return new Promise(resolve => {
      setTimeout(() => resolve(), ms);
      clock.tick(ms);
    });
  }

});
