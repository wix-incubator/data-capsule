'use strict';

const {expect} = require('chai');
const {NOT_FOUND, InMemoryStorageCapsule} = require('../../src');

describe('in-memory-strategy', () => {

  it('should store and retrieve information', async () => {
    const capsule = new InMemoryStorageCapsule();
    await capsule.setItem('shahata', 123, {namespace: 'wix'});
    expect(await capsule.getItem('shahata', {namespace: 'wix'})).to.equal(123);
  });

  it('should throw if no namespace in setItem', () => {
    const capsule = new InMemoryStorageCapsule();
    expect(() => capsule.setItem('shahata', 123)).to.throw('namespace is required');
  });

  it('should throw if no namespace in getItem', () => {
    const capsule = new InMemoryStorageCapsule();
    expect(() => capsule.getItem('shahata')).to.throw('namespace is required');
  });

  it('should throw if namespace is not a string', () => {
    const capsule = new InMemoryStorageCapsule();
    expect(() => capsule.getItem('shahata', {namespace: 123})).to.throw('namespace should be a string');
  });

  it('should accept namespace in capsule constructor', async () => {
    const capsule = new InMemoryStorageCapsule({namespace: 'wix'});
    await capsule.setItem('shahata', 123);
    expect(await capsule.getItem('shahata')).to.equal(123);
  });

  it('should store namespaces in isolation', async () => {
    const capsule = new InMemoryStorageCapsule();
    await capsule.setItem('shahata', 123, {namespace: 'wix1'});
    await capsule.setItem('shahata', 456, {namespace: 'wix2'});
    expect(await capsule.getItem('shahata', {namespace: 'wix1'})).to.equal(123);
    expect(await capsule.getItem('shahata', {namespace: 'wix2'})).to.equal(456);
  });

  it('should result in rejection if item is not found', async () => {
    const capsule = new InMemoryStorageCapsule({namespace: 'wix'});
    await expect(capsule.getItem('shahata')).to.be.rejectedWith(NOT_FOUND);
  });

  it('should remove item', async () => {
    const capsule = new InMemoryStorageCapsule({namespace: 'wix'});
    await capsule.setItem('shahata', 123);
    expect(await capsule.getItem('shahata')).to.equal(123);
    await capsule.removeItem('shahata');
    await expect(capsule.getItem('shahata')).to.be.rejectedWith(NOT_FOUND);
  });

  it('should get all items', async () => {
    const capsule = new InMemoryStorageCapsule({namespace: 'wix', scope: 'scope'});
    await capsule.setItem('shahata1', 123);
    await capsule.setItem('shahata2', 456);
    expect(await capsule.getAllItems()).to.eql({
      shahata1: 123,
      shahata2: 456
    });
  });

  it('should get all items filtering other namespaces', async () => {
    const capsule = new InMemoryStorageCapsule({namespace: 'wix'});
    await capsule.setItem('shahata1', 123);
    await capsule.setItem('shahata2', 456, {namespace: 'wix1'});
    expect(await capsule.getAllItems()).to.eql({shahata1: 123});
  });

  it('should accept json scope', async () => {
    const capsule = new InMemoryStorageCapsule({namespace: 'wix'});
    await capsule.setItem('shahata', 1, {scope: {userId: 123}});
    expect(await capsule.getAllItems({scope: {userId: 123}})).to.eql({shahata: 1});
  });
});
