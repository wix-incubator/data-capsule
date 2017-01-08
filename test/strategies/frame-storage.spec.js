/* global window */
'use strict';

require('describe-jsdom');
const co = require('co');
const {expect} = require('chai');
const {LocalStorage} = require('node-localstorage');
const {NOT_FOUND, DataCapsule, LocalStorageStrategy, FrameStorageStrategy, FrameStorageListener} = require('../../src');

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
});
