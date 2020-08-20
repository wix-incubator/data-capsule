import sinon from 'sinon';
import { expect } from 'chai';
import { LocalStorage } from 'node-localstorage';
import { NOT_FOUND, LocalStorageCapsule } from '../../src';

describe('local-storage-cleaner', () => {
  const oneKilobyte = new Array(1000).fill('a').join('');
  let clock: sinon.SinonFakeTimers;

  beforeEach(() => {
    clock = sinon.useFakeTimers(Date.now());
    (global as any).localStorage = new LocalStorage('./limited', 4000); // only 4k in local storage
  });

  afterEach(() => {
    (global as any).localStorage.clear();
    clock.restore();
  });

  it('should clean oldest records first', async () => {
    const capsule = LocalStorageCapsule({ namespace: 'w' });
    clock.tick(1);
    await capsule.setItem('k1', oneKilobyte);
    clock.tick(1);
    await capsule.setItem('k2', oneKilobyte);
    clock.tick(1);
    await capsule.setItem('k3', oneKilobyte);
    clock.tick(1);
    await capsule.setItem('k4', oneKilobyte + oneKilobyte); // need to remove 2 old records to free up 2k

    await expect(capsule.getItem('k1')).to.be.rejectedWith(NOT_FOUND);
    await expect(capsule.getItem('k2')).to.be.rejectedWith(NOT_FOUND);
    expect(await capsule.getItem('k3')).to.equal(oneKilobyte);
    expect(await capsule.getItem('k4')).to.equal(oneKilobyte + oneKilobyte);
  });

  it('should clean last accessed records first', async () => {
    const capsule = LocalStorageCapsule({ namespace: 'w' });
    clock.tick(1);
    await capsule.setItem('k1', oneKilobyte);
    clock.tick(1);
    await capsule.setItem('k2', oneKilobyte);
    clock.tick(1);
    await capsule.setItem('k3', oneKilobyte);
    clock.tick(1);
    await capsule.getItem('k2'); // access k2 so it is not removed first
    clock.tick(1);
    await capsule.setItem('k4', oneKilobyte + oneKilobyte);

    await expect(capsule.getItem('k1')).to.be.rejectedWith(NOT_FOUND);
    expect(await capsule.getItem('k2')).to.equal(oneKilobyte);
    await expect(capsule.getItem('k3')).to.be.rejectedWith(NOT_FOUND);
    expect(await capsule.getItem('k4')).to.equal(oneKilobyte + oneKilobyte);
  });

  it('should clean expired records first ', async () => {
    const capsule = LocalStorageCapsule({ namespace: 'w' });
    clock.tick(1);
    await capsule.setItem('k1', oneKilobyte);
    clock.tick(1);
    await capsule.setItem('k2', oneKilobyte);
    clock.tick(1);
    await capsule.setItem('k3', oneKilobyte, { expiration: 2 });
    clock.tick(2000); // k3 is expired so in addition we only remove k1 to free up 2k
    await capsule.setItem('k4', oneKilobyte + oneKilobyte);

    await expect(capsule.getItem('k1')).to.be.rejectedWith(NOT_FOUND);
    expect(await capsule.getItem('k2')).to.equal(oneKilobyte);
    await expect(capsule.getItem('k3')).to.be.rejectedWith(NOT_FOUND);
    expect(await capsule.getItem('k4')).to.equal(oneKilobyte + oneKilobyte);
  });
});
