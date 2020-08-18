import { BaseStorage, BaseStorageOptions } from '../base-storage';
import { NOT_FOUND } from '../utils/constants';

export class InMemoryStorageStrategy extends BaseStorage<BaseStorageOptions> {
  private memoryMap: Record<string, any>;

  constructor() {
    super();
    this.memoryMap = {};
  }

  setItem<T>(key: string, value: T, options: BaseStorageOptions) {
    if (typeof this.memoryMap[options.namespace] === 'undefined') {
      this.memoryMap[options.namespace] = {};
    }
    this.memoryMap[options.namespace][key] = value;
    return Promise.resolve();
  }

  getItem(key: string, options: BaseStorageOptions) {
    const data =
      this.memoryMap[options.namespace] &&
      this.memoryMap[options.namespace][key];

    return typeof data !== 'undefined'
      ? Promise.resolve(data)
      : Promise.reject(NOT_FOUND);
  }

  removeItem(key: string, options: BaseStorageOptions) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete this.memoryMap[options.namespace][key];
    return Promise.resolve();
  }

  getAllItems(options: BaseStorageOptions) {
    return Promise.resolve(this.memoryMap[options.namespace]);
  }
}
