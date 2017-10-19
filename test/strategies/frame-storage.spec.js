'use strict';

const {expect} = require('chai');
const {FrameStorageListener} = require('../../src');

describe('frame-storage', () => {
  it('should throw if non BaseStorage is passed', () => {
    expect(() => new FrameStorageListener({})).to.throw('must extend BaseStorage');
  });
});
