/* global window */
'use strict';

require('describe-jsdom');
const co = require('co');
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

  it('should store and retrieve information', co.wrap(function* () {
    yield capsule.setItem('shahata', 123, {namespace: 'wix'});
    expect(yield capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
  }));

  it('should remove items (and handle rejections)', co.wrap(function* () {
    yield capsule.setItem('shahata', 123, {namespace: 'wix'});
    yield capsule.removeItem('shahata', {namespace: 'wix'});
    yield expect(capsule.getItem('shahata', {namespace: 'wix'})).to.be.rejectedWith(NOT_FOUND);
  }));

  it('should get all items', co.wrap(function* () {
    yield capsule.setItem('shahata', 123, {namespace: 'wix'});
    expect(yield capsule.getAllItems({namespace: 'wix'})).to.eql({shahata: 123});
  }));

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
      throw new Error('byebye');
    }
    getItem() {
      throw 'byebye';
    }
    removeItem() {
      throw {bye: 'bye'};
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

  it('should allow for custom errors to be transmitted over the wire', co.wrap(function* () {
    yield expect(capsule.setItem('shahata', 123, {namespace: 'wix'})).to.be.rejectedWith('byebye');
    yield expect(capsule.getItem('shahata', {namespace: 'wix'})).to.be.rejectedWith('byebye');
    yield expect(capsule.removeItem('shahata', {namespace: 'wix'})).to.be.rejectedWith({bye: 'bye'});
  }));
});
