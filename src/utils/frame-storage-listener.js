import listenerMessageChannel from 'message-channel/listener';
import greedySplit from 'greedy-split';
import BaseStorage from '../base-storage';
import LocalStorageStrategy from '../strategies/local-storage';

export default class FrameStorageListener {
  constructor(strategy = new LocalStorageStrategy()) {
    this.storageStrategy = BaseStorage.verify(strategy);
    this.stopListener = undefined;
  }

  start(verifier, interceptor) {
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

    function messageHandler(e, reply) {
      if (typeof e.data !== 'string') {
        return;
      }

      const [token, method, payload] = greedySplit(e.data, '|', 3);

      const respond = (status, data) => {
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

      const invoke = storageStrategy[method].bind(storageStrategy);

      const params = JSON.parse(payload).data;
      const options = params[params.length - 1];

      const modifiedOptions = interceptor
        ? interceptor(options, e.source, e.origin, token)
        : options;
      params[params.length - 1] = modifiedOptions;

      return invoke(...params)
        .then(result => {
          return respond('resolve', result);
        })
        .catch(error => {
          return respond('reject', error.message || error);
        });
    }
  }

  stop() {
    this.stopListener && this.stopListener();
  }
}
