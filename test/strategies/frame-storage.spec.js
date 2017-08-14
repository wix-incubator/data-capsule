/* global window */
'use strict';

require('describe-jsdom');
const {expect} = require('chai');
const {LocalStorage} = require('node-localstorage');
const {NOT_FOUND, DataCapsule, LocalStorageStrategy, FrameStorageStrategy, FrameStorageListener, BaseStorage} = require('../../src');

describe.jsdom('frame-storage-strategy', () => {
  let capsule, listener;

  beforeEach(() => {
    global.localStorage = new LocalStorage('./scratch');
    capsule = new DataCapsule({strategy: new FrameStorageStrategy(window.top, '*', 'secret')});
    listener = new FrameStorageListener(new LocalStorageStrategy());
    listener.start((origin, source, token) => token === 'secret');
  });

  afterEach(() => {
    global.localStorage.clear();
    listener.stop();
  });

  it('should store and retrieve information', async () => {
    await capsule.setItem('shahata', 123, {namespace: 'wix'});
    expect(await capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
  });

  it('should remove items (and handle rejections)', async () => {
    await capsule.setItem('shahata', 123, {namespace: 'wix'});
    await capsule.removeItem('shahata', {namespace: 'wix'});
    await expect(capsule.getItem('shahata', {namespace: 'wix'})).to.be.rejectedWith(NOT_FOUND);
  });

  it('should get all items', async () => {
    await capsule.setItem('shahata', 123, {namespace: 'wix'});
    expect(await capsule.getAllItems({namespace: 'wix'})).to.eql({shahata: 123});
  });

  it('should throw if non BaseStorage is passed', () => {
    expect(() => new FrameStorageListener({})).to.throw('must extend BaseStorage');
  });

  it('should allow for custom errors to be transmitted over the wire', () => {
    capsule = new DataCapsule({strategy: new FrameStorageStrategy(window.top, '*', 'secret')});
    listener = new FrameStorageListener(new LocalStorageStrategy());
    listener.start((origin, source, token) => token === 'secret');
    listener.stop();
  });
});

describe.jsdom('frame-storage-strategy with custom host strategy', () => {
  let capsule, listener;

  class MyStorageStrategy extends BaseStorage {
    setItem() {
      return Promise.reject(new Error('byebye'));
    }
    getItem() {
      return Promise.reject('byebye');
    }
    removeItem() {
      return Promise.reject({bye: 'bye'});
    }
    getAllItems() {
      //
    }
  }

  beforeEach(() => {
    global.localStorage = new LocalStorage('./scratch');
    capsule = new DataCapsule({strategy: new FrameStorageStrategy(window.top, '*', 'secret')});
    listener = new FrameStorageListener(new MyStorageStrategy());
    listener.start((origin, source, token) => token === 'secret');
  });

  afterEach(() => {
    global.localStorage.clear();
    listener.stop();
  });

  it('should allow for custom errors to be transmitted over the wire', async () => {
    await expect(capsule.setItem('shahata', 123, {namespace: 'wix'})).to.be.rejectedWith('byebye');
    await expect(capsule.getItem('shahata', {namespace: 'wix'})).to.be.rejectedWith('byebye');
    await expect(capsule.removeItem('shahata', {namespace: 'wix'})).to.be.rejectedWith({bye: 'bye'});
  });
});
