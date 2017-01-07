const co = require('co');
const sinon = require('sinon');
const {expect} = require('chai');
const {LocalStorage} = require('node-localstorage');
const {NOT_FOUND, LocalStorageCapsule} = require('../../src');

describe('localstorage-strategy', () => {
  beforeEach(() => {
    global.localStorage = new LocalStorage('./scratch');
  });

  afterEach(() => {
    global.localStorage.clear();
  });

  it('should store and retrieve information', co.wrap(function* () {
    const capsule = new LocalStorageCapsule();
    yield capsule.setItem('shahata', 123, {namespace: 'wix'});
    expect(yield capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
  }));

  it('should throw if no namespace in setItem', () => {
    const capsule = new LocalStorageCapsule();
    expect(() => capsule.setItem('shahata', 123)).to.throw('namespace is required');
  });

  it('should throw if no namespace in getItem', () => {
    const capsule = new LocalStorageCapsule();
    expect(() => capsule.getItem('shahata')).to.throw('namespace is required');
  });

  it('should throw if namespace is not a string', () => {
    const capsule = new LocalStorageCapsule();
    expect(() => capsule.getItem('shahata', {namespace: 123})).to.throw('namespace should be a string');
  });

  it('should accept namespace in capsule constructor', co.wrap(function* () {
    const capsule = new LocalStorageCapsule({namespace: 'wix'});
    yield capsule.setItem('shahata', 123);
    expect(yield capsule.getItem('shahata')).to.equal(123);
  }));

  it('should store namespaces in isolation', co.wrap(function* () {
    const capsule = new LocalStorageCapsule();
    yield capsule.setItem('shahata', 123, {namespace: 'wix1'});
    yield capsule.setItem('shahata', 456, {namespace: 'wix2'});
    expect(yield capsule.getItem('shahata', {namespace: 'wix1'})).to.equal(123);
    expect(yield capsule.getItem('shahata', {namespace: 'wix2'})).to.equal(456);
  }));

  it('should optionally pass a scope for additional isolation', co.wrap(function* () {
    const capsule = new LocalStorageCapsule({namespace: 'wix'});
    yield capsule.setItem('shahata', 123, {scope: 'wix1'});
    yield capsule.setItem('shahata', 456, {scope: 'wix2'});
    expect(yield capsule.getItem('shahata', {scope: 'wix1'})).to.equal(123);
    expect(yield capsule.getItem('shahata', {scope: 'wix2'})).to.equal(456);
  }));

  it('should optionally pass a scope in constructor', co.wrap(function* () {
    const capsule = new LocalStorageCapsule({namespace: 'wix', scope: 'scope'});
    yield capsule.setItem('shahata', 123);
    expect(yield capsule.getItem('shahata', {scope: 'scope'})).to.equal(123);
  }));

  it('should result in rejection if item is not found', co.wrap(function* () {
    const capsule = new LocalStorageCapsule({namespace: 'wix'});
    yield expect(capsule.getItem('shahata')).to.be.rejectedWith(NOT_FOUND);
  }));

  it('should treat expiration as not found', co.wrap(function* () {
    const clock = sinon.useFakeTimers();
    const capsule = new LocalStorageCapsule({namespace: 'wix'});
    yield capsule.setItem('shahata', 123, {expiration: 2});
    clock.tick(2000);
    yield expect(capsule.getItem('shahata')).to.be.rejectedWith(NOT_FOUND);
    clock.restore();
  }));

  it('should remove item', co.wrap(function* () {
    const capsule = new LocalStorageCapsule({namespace: 'wix'});
    yield capsule.setItem('shahata', 123);
    expect(yield capsule.getItem('shahata')).to.equal(123);
    yield capsule.removeItem('shahata');
    yield expect(capsule.getItem('shahata')).to.be.rejectedWith(NOT_FOUND);
  }));

  it('should get all items', co.wrap(function* () {
    const capsule = new LocalStorageCapsule({namespace: 'wix', scope: 'scope'});
    yield capsule.setItem('shahata1', 123);
    yield capsule.setItem('shahata2', 456);
    expect(yield capsule.getAllItems()).to.eql([
      {key: 'shahata1', value: 123, namespace: 'wix', scope: 'scope'},
      {key: 'shahata2', value: 456, namespace: 'wix', scope: 'scope'}
    ]);
  }));

  it('should get all items filtering other namespaces/scopes', co.wrap(function* () {
    const capsule = new LocalStorageCapsule({namespace: 'wix', scope: 'scope'});
    yield capsule.setItem('shahata1', 123);
    yield capsule.setItem('shahata2', 456, {namespace: 'wix1'});
    yield capsule.setItem('shahata3', 789, {scope: 'scope1'});
    expect(yield capsule.getAllItems()).to.eql([
      {key: 'shahata1', value: 123, namespace: 'wix', scope: 'scope'}
    ]);
  }));

  it('should get all items when user controls filtering', co.wrap(function* () {
    const capsule = new LocalStorageCapsule();
    yield capsule.setItem('shahata', 1, {namespace: 'wix1'});
    yield capsule.setItem('shahata', 2, {namespace: 'wix1', scope: 'scope1'});
    yield capsule.setItem('shahata', 3, {namespace: 'wix1', scope: 'scope2'});
    yield capsule.setItem('shahata', 4, {namespace: 'wix2', scope: 'scope1'});
    expect(yield capsule.getAllItems({namespace: 'wix1', scope: 'scope1'})).to.eql([
      {key: 'shahata', value: 2, namespace: 'wix1', scope: 'scope1'}
    ]);
    expect(yield capsule.getAllItems({namespace: 'wix1'})).to.eql([
      {key: 'shahata', value: 1, namespace: 'wix1', scope: ''},
      {key: 'shahata', value: 2, namespace: 'wix1', scope: 'scope1'},
      {key: 'shahata', value: 3, namespace: 'wix1', scope: 'scope2'}
    ]);
  }));

  it('should get all items filtering expired', co.wrap(function* () {
    const clock = sinon.useFakeTimers();
    const capsule = new LocalStorageCapsule({namespace: 'wix', scope: 'scope'});
    yield capsule.setItem('shahata1', 123);
    yield capsule.setItem('shahata2', 456, {expiration: 2});
    clock.tick(2000);
    expect(yield capsule.getAllItems()).to.eql([
      {key: 'shahata1', value: 123, namespace: 'wix', scope: 'scope'}
    ]);
    clock.restore();
  }));
});
