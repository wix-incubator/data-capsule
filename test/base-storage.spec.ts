import { expect } from 'chai';
import { BaseStorage } from '../src/base-storage';

describe('base-storage', () => {
  class SomeStorage extends BaseStorage<any> {
    getAllItems<T>(options: any): Promise<T> {
      return Promise.resolve(undefined);
    }

    getItem<T>(key: string, options: any): Promise<T> {
      return Promise.resolve(undefined);
    }

    removeItem(key: string, options: any): Promise<void> {
      return Promise.resolve(undefined);
    }

    setItem<T>(key: string, value: T, options: any): Promise<void> {
      return Promise.resolve(undefined);
    }
  }

  describe('verify', () => {
    it('should return instance when child is instance of BaseStorage', async () => {
      const someStorage = new SomeStorage();
      expect(BaseStorage.verify(someStorage)).to.equal(someStorage);
    });

    it('should throw error when candidate does not inherit from BaseStorage', async () => {
      expect(() => BaseStorage.verify({})).to.throw(
        'This class must extend BaseStorage',
      );
    });
  });
});
