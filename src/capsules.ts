import { BaseStorageOptions } from './base-storage';
import { DataCapsule } from './data-capsule';
import { CachedStorageStrategy } from './strategies/cached-storage';
import { InMemoryStorageStrategy } from './strategies/in-memory-storage';
import {
  LocalStorageStrategy,
  LocalStorageStrategyOptions,
} from './strategies/local-storage';
import {
  WixStorageStrategy,
  WixStorageStrategyOptions,
} from './strategies/wix-storage';

export function LocalStorageCapsule(options?: BaseStorageOptions) {
  return new DataCapsule({ ...options, strategy: new LocalStorageStrategy() });
}

export function InMemoryStorageCapsule(options?: BaseStorageOptions) {
  return new DataCapsule({
    ...options,
    strategy: new InMemoryStorageStrategy(),
  });
}

export function LocalStorageCachedCapsule<T extends WixStorageStrategy>({
  remoteStrategy,
  ...options
}: {
  remoteStrategy: WixStorageStrategy;
} & Partial<
  WixStorageStrategyOptions & LocalStorageStrategyOptions
>): DataCapsule<WixStorageStrategyOptions & LocalStorageStrategyOptions> {
  return new DataCapsule({
    ...options,
    strategy: new CachedStorageStrategy({
      remoteStrategy,
    }),
  });
}
