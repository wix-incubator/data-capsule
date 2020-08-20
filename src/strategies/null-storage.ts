import { BaseStorage, BaseStorageOptions } from '../base-storage';
import { NOT_FOUND } from '../utils/constants';

export class NullStrategy extends BaseStorage<BaseStorageOptions> {
  async setItem() {}

  getItem() {
    return Promise.reject(NOT_FOUND);
  }

  removeItem() {
    return Promise.resolve();
  }

  getAllItems<T = any>(): Promise<T> {
    return Promise.resolve({} as T);
  }
}
