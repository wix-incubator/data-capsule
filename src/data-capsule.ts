import { BaseStorage, BaseStorageOptions } from './base-storage';

export class DataCapsule<
  O extends BaseStorageOptions = BaseStorageOptions & Record<string, any>
> extends BaseStorage<O> {
  private storageStrategy: BaseStorage<O>;
  private readonly _options: Partial<O>;

  constructor({
    strategy,
    ...options
  }: {
    strategy: BaseStorage<O>;
  } & Partial<O>) {
    super();
    this.storageStrategy = BaseStorage.verify(strategy);
    this._options = options as any;
  }

  async setItem<T>(key: string, value: T, options?: Partial<O>): Promise<void> {
    const validOptions = this._buildValidateOptions(this._options, options);
    return this.storageStrategy.setItem(key, value, validOptions);
  }

  getItem<T = any>(key: string, options?: Partial<O>): Promise<T> {
    const validOptions = this._buildValidateOptions(this._options, options);
    return this.storageStrategy.getItem(key, validOptions);
  }

  removeItem(key: string, options?: Partial<O>): Promise<void> {
    const validOptions = this._buildValidateOptions(this._options, options);
    return this.storageStrategy.removeItem(key, validOptions);
  }

  getAllItems<T = any>(options?: Partial<O>): Promise<T> {
    const validOptions = this._buildValidateOptions(this._options, options);
    return this.storageStrategy.getAllItems(validOptions);
  }

  private _buildValidateOptions(
    capsuleOptions: Partial<O>,
    options: Partial<O>,
  ): O {
    options = { ...capsuleOptions, ...options };
    options.scope = this.storageStrategy.extendScope(options.scope);

    if (!validateNamespace(options)) {
      throw new Error('namespace is required and should be a string');
    }
    return options as O;
  }
}

function validateNamespace(
  options: Partial<BaseStorageOptions>,
): options is BaseStorageOptions {
  return typeof options.namespace === 'string';
}
