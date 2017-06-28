export interface Options {
  namespace?: string;
  scope?: any;
  [key: string]: any;
}

export interface ConstructorOptions extends Options {
  strategy: any;
}

export interface SetOptions extends Options {
  expiration?: number;
}

export class BaseStorage {
  setItem(key: string, value: any, options?: SetOptions): Promise<void>;
  getItem(key: string, options?: Options): Promise<any>;
  removeItem(key: string, options?: Options): Promise<void>;
  getAllItem(options?: Options): Promise<{[key: string]: any}>;
}

export class DataCapsule extends BaseStorage {
  constructor(options: ConstructorOptions);
}

export class MemoryStorageStrategy extends BaseStorage {}
export class LocalStorageStrategy extends BaseStorage {}
export class WixStorageStrategy extends BaseStorage {}
export class CachedStorageStrategy extends BaseStorage {}

export class FrameStorageStrategy extends BaseStorage {
  constructor(target: string, origin: string, token: string);
  setItem(...params: any[]): Promise<undefined>;
  getItem(...params: any[]): Promise<any>;
  removeItem(...params: any[]): Promise<undefined>;
  getAllItem(...params: any[]): Promise<{[key: string]: any}>;
}

export class FrameStorageListener {
  constructor(strategy?: any);
  start(verifier: (source: string, origin: string, token: string) => boolean): void;
  stop(): void;
}

export const NOT_FOUND: Error;
export const MemoryStorageCapsule: (options: Options) => DataCapsule;
export const LocalStorageCapsule: (options: Options) => DataCapsule;
export const LocalStorageCachedCapsule: (options: Options) => DataCapsule;
