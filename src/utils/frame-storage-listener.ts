import greedySplit from 'greedy-split';
import listenerMessageChannel from 'message-channel/listener';
import { BaseStorage, BaseStorageOptions } from '../base-storage';
import { LocalStorageStrategy } from '../strategies/local-storage';

export type TVerifier = (
  source: string,
  origin: string,
  token: string,
) => boolean;
export type TInterceptor = (
  options: BaseStorageOptions,
  source: string,
  origin: string,
  token: string,
) => BaseStorageOptions;

export class FrameStorageListener {
  private storageStrategy: BaseStorage<BaseStorageOptions>;
  private stopListener?: () => void;

  constructor(strategy = new LocalStorageStrategy()) {
    this.storageStrategy = BaseStorage.verify(strategy);
  }

  start(verifier: TVerifier, interceptor: TInterceptor) {
    if (!verifier || typeof verifier !== 'function') {
      throw new Error(
        'start function must get a verifier function as a first argument',
      );
    }

    if (interceptor && typeof interceptor !== 'function') {
      throw new Error('the interceptor must be a function');
    }

    const storageStrategy = BaseStorage.verify(this.storageStrategy);
    this.stopListener = listenerMessageChannel('data-capsule', messageHandler);

    function messageHandler(e: any, reply: (data: any) => void) {
      if (typeof e.data !== 'string') {
        return;
      }

      const [token, method, payload] = greedySplit(e.data, '|', 3);

      const respond = (status: string, data: string) => {
        if (status === 'resolve') {
          const response = [status, JSON.stringify({ data })].join('|');
          return reply(response);
        }

        const response = [status, data].join('|');
        return reply(response);
      };

      if (!verifier(e.source, e.origin, token)) {
        return respond('reject', 'message was not authorized');
      }

      const invoke = storageStrategy[
        method as keyof typeof storageStrategy
      ].bind(storageStrategy);

      const params = JSON.parse(payload).data;
      const options = params[params.length - 1];

      const modifiedOptions = interceptor
        ? interceptor(options, e.source, e.origin, token)
        : options;
      params[params.length - 1] = modifiedOptions;

      return invoke(...params)
        .then((result: any) => {
          return respond('resolve', result);
        })
        .catch((error: any) => {
          return respond('reject', error.message || error);
        });
    }
  }

  stop() {
    this.stopListener && this.stopListener();
  }
}
