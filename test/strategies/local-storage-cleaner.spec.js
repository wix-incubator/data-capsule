'use strict';

const co = require('co');
const sinon = require('sinon');
const {expect} = require('chai');
const {LocalStorage} = require('node-localstorage');
const {NOT_FOUND, LocalStorageCapsule} = require('../../src');

describe('local-storage-cleaner', () => {
  const oneKilobyte = new Array(1000).fill('a').join('');
  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers(Date.now());
    global.localStorage = new LocalStorage('./limited', 4000); //only 4k in local storage
  });

  afterEach(() => {
    global.localStorage.clear();
    clock.restore();
  });

  it('should clean oldest records first', co.wrap(function* () {
    const capsule = new LocalStorageCapsule({namespace: 'w'});
    clock.tick(1);
    yield capsule.setItem('k1', oneKilobyte);
    clock.tick(1);
    yield capsule.setItem('k2', oneKilobyte);
    clock.tick(1);
    yield capsule.setItem('k3', oneKilobyte);
    clock.tick(1);
    yield capsule.setItem('k4', oneKilobyte + oneKilobyte); //need to remove 2 old records to free up 2k

    yield expect(capsule.getItem('k1')).to.be.rejectedWith(NOT_FOUND);
    yield expect(capsule.getItem('k2')).to.be.rejectedWith(NOT_FOUND);
    expect(yield capsule.getItem('k3')).to.equal(oneKilobyte);
    expect(yield capsule.getItem('k4')).to.equal(oneKilobyte + oneKilobyte);
  }));

  it('should clean last accessed records first', co.wrap(function* () {
    const capsule = new LocalStorageCapsule({namespace: 'w'});
    clock.tick(1);
    yield capsule.setItem('k1', oneKilobyte);
    clock.tick(1);
    yield capsule.setItem('k2', oneKilobyte);
    clock.tick(1);
    yield capsule.setItem('k3', oneKilobyte);
    clock.tick(1);
    yield capsule.getItem('k2'); //access k2 so it is not removed first
    clock.tick(1);
    yield capsule.setItem('k4', oneKilobyte + oneKilobyte);

    yield expect(capsule.getItem('k1')).to.be.rejectedWith(NOT_FOUND);
    expect(yield capsule.getItem('k2')).to.equal(oneKilobyte);
    yield expect(capsule.getItem('k3')).to.be.rejectedWith(NOT_FOUND);
    expect(yield capsule.getItem('k4')).to.equal(oneKilobyte + oneKilobyte);
  }));

  it('should clean expired records first ', co.wrap(function* () {
    const capsule = new LocalStorageCapsule({namespace: 'w'});
    clock.tick(1);
    yield capsule.setItem('k1', oneKilobyte);
    clock.tick(1);
    yield capsule.setItem('k2', oneKilobyte);
    clock.tick(1);
    yield capsule.setItem('k3', oneKilobyte, {expiration: 2});
    clock.tick(2000); //k3 is expired so in addition we only remove k1 to free up 2k
    yield capsule.setItem('k4', oneKilobyte + oneKilobyte);

    yield expect(capsule.getItem('k1')).to.be.rejectedWith(NOT_FOUND);
    expect(yield capsule.getItem('k2')).to.equal(oneKilobyte);
    yield expect(capsule.getItem('k3')).to.be.rejectedWith(NOT_FOUND);
    expect(yield capsule.getItem('k4')).to.equal(oneKilobyte + oneKilobyte);
  }));
});
