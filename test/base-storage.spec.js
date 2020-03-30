import BaseStorage from '../src/base-storage';
import { expect } from 'chai';

describe('base-storage', () => {
  it('should throw if instantiating with pure methods', () => {
    class SomeStorage extends BaseStorage {}
    expect(() => new SomeStorage()).to.throw('must be overriden');
  });

  it('should not throw if you override the methods', () => {
    class SomeStorage extends BaseStorage {
      setItem(key, value, options) {
        super.setItem(key, value, options);
      }
      getItem(key, options) {
        super.getItem(key, options);
      }
      removeItem(key, options) {
        super.removeItem(key, options);
      }
      getAllItems(options) {
        super.getAllItems(options);
      }
    }
    expect(() => new SomeStorage()).not.to.throw();

    // following expectations are totally unnecessary
    // sole purpose is to have 100% coverage :P
    expect(() => new SomeStorage().setItem()).to.throw();
    expect(() => new SomeStorage().getItem()).to.throw();
    expect(() => new SomeStorage().removeItem()).to.throw();
    expect(() => new SomeStorage().getAllItems()).to.throw();
  });
});
