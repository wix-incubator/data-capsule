import BaseStorage from '../base-storage';
import { NOT_FOUND } from '../utils/constants';

export default class NullStrategy extends BaseStorage {
  async setItem() {}

  getItem() {
    return Promise.reject(NOT_FOUND);
  }

  removeItem() {
    return Promise.resolve();
  }

  getAllItems() {
    return Promise.resolve({});
  }
}
