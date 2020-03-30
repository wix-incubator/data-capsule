import { NOT_FOUND } from '../utils/constants';
import BaseStorage from '../base-storage';

export default class InMemoryStrategy extends BaseStorage {
  constructor() {
    super();
    this.memoryMap = {};
  }

  setItem(key, value, options = {}) {
    if (typeof this.memoryMap[options.namespace] === 'undefined') {
      this.memoryMap[options.namespace] = {};
    }
    this.memoryMap[options.namespace][key] = value;
    return Promise.resolve();
  }

  getItem(key, options = {}) {
    const data =
      this.memoryMap[options.namespace] &&
      this.memoryMap[options.namespace][key];

    return typeof data !== 'undefined'
      ? Promise.resolve(data)
      : Promise.reject(NOT_FOUND);
  }

  removeItem(key, options = {}) {
    delete this.memoryMap[options.namespace][key];
    return Promise.resolve();
  }

  getAllItems(options = {}) {
    return Promise.resolve(this.memoryMap[options.namespace]);
  }
}
