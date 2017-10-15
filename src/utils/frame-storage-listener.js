'use strict';

const listenerMessageChannel = require('message-channel/listener');
const greedySplit = require('greedy-split');
const BaseStorage = require('../base-storage');
const LocalStorageStrategy = require('../strategies/local-storage');

class FrameStorageListener {
  constructor(strategy = new LocalStorageStrategy()) {
    this.storageStrategy = BaseStorage.verify(strategy);
  }

  start(verifier) {
    const storageStrategy = BaseStorage.verify(this.storageStrategy);
    listenerMessageChannel('data-capsule', onMessage => onMessage(messageHandler));

    function messageHandler(e, reply) {
      if (typeof e.data !== 'string') {
        return;
      }

      const [token, method, params] = greedySplit(e.data, '|', 3);

      const respond = (status, data) => {
        if (status === 'resolve') {
          const payload = {data};

          const response = [status, JSON.stringify(payload)].join('|');
          return reply(response);
        }

        const response = [status, data].join('|');
        return reply(response);
      };

      if (!verifier(e.source, e.origin, token)) {
        return respond('reject', new Error('message was not authorized'));
      }

      const invoke = storageStrategy[method].bind(storageStrategy);

      return invoke(...JSON.parse(params).data)
        .then(result => {
          return respond('resolve', result);
        }).catch(error => {
          return respond('reject', error.message || error);
        });
    }
  }
}

module.exports = FrameStorageListener;
