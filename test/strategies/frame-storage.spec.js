/* global window */
require('describe-jsdom');
const co = require('co');
const {expect} = require('chai');
const {LocalStorage} = require('node-localstorage');
const {DataCapsule, LocalStorageStrategy, FrameStorageStrategy, FrameStorageListener} = require('../../src');

describe.jsdom('frame-storage-strategy', () => {
  beforeEach(() => {
    global.localStorage = new LocalStorage('./scratch');
  });

  afterEach(() => {
    global.localStorage.clear();
  });

  it('should store and retrieve information', co.wrap(function* () {
    const capsule = new DataCapsule({strategy: new FrameStorageStrategy(window, '*', 'secret')});
    const listener = new FrameStorageListener(new LocalStorageStrategy());
    listener.start((origin, source, token) => token === 'secret');
    yield capsule.setItem('shahata', 123, {namespace: 'wix'});
    expect(yield capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
    listener.stop();
  }));

  it('should remove items', co.wrap(function* () {
    const capsule = new DataCapsule({strategy: new FrameStorageStrategy(window, '*', 'secret')});
    const listener = new FrameStorageListener(new LocalStorageStrategy());
    listener.start((origin, source, token) => token === 'secret');
    yield capsule.setItem('shahata', 123, {namespace: 'wix'});
    yield capsule.removeItem('shahata', {namespace: 'wix'});
    yield expect(capsule.getItem('shahata', {namespace: 'wix'})).to.be.rejectedWith('not found');
    listener.stop();
  }));

  it('should get all items', co.wrap(function* () {
    const capsule = new DataCapsule({strategy: new FrameStorageStrategy(window, '*', 'secret')});
    const listener = new FrameStorageListener(new LocalStorageStrategy());
    listener.start((origin, source, token) => token === 'secret');
    yield capsule.setItem('shahata', 123, {namespace: 'wix'});
    expect(yield capsule.getAllItems({namespace: 'wix'})).to.eql([
      {key: 'shahata', namespace: 'wix', scope: '', value: 123}
    ]);
    listener.stop();
  }));
});
