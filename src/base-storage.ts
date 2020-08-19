export type Scope = string | Record<string, any>;

export interface BaseStorageOptions {
  namespace: string;
  scope?: Scope;
}

export abstract class BaseStorage<TOptions> {
  static verify(strategy: BaseStorage<BaseStorageOptions> | unknown) {
    if (strategy instanceof BaseStorage) {
      return strategy;
    } else {
      throw new Error('This class must extend BaseStorage!');
    }
  }

  extendScope(scope: Scope): Scope {
    return scope;
  }

  abstract setItem<T>(key: string, value: T, options: TOptions): Promise<void>;

  abstract getItem<T = any>(key: string, options: TOptions): Promise<T>;

  abstract removeItem(key: string, options: TOptions): Promise<void>;

  abstract getAllItems<T = any>(options: TOptions): Promise<T>;
}
