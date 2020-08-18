export interface BaseStorageOptions {
  namespace: string;
  scope?: string | Record<string, any>;
}

export abstract class BaseStorage<TOptions> {
  static verify(strategy: BaseStorage<BaseStorageOptions> | unknown) {
    if (strategy instanceof BaseStorage) {
      return strategy;
    } else {
      throw new Error(`This class must extend BaseStorage!`);
    }
  }

  extendScope<T = any>(scope: any): any {
    return scope;
  }

  abstract setItem<T>(key: string, value: T, options: TOptions): Promise<void>;

  abstract getItem<T = any>(key: string, options: TOptions): Promise<T>;

  abstract removeItem(key: string, options: TOptions): Promise<void>;

  abstract getAllItems<T = any>(options: TOptions): Promise<T>;
}
