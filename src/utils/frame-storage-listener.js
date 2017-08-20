/* global window */
'use strict';

const greedySplit = require('greedy-split');
const BaseStorage = require('../base-storage');
const {STORAGE_PREFIX} = require('./constants');
const LocalStorageStrategy = require('../strategies/local-storage');

class FrameStorageListener {
  constructor(strategy = new LocalStorageStrategy()) {
    this.storageStrategy = BaseStorage.verify(strategy);
  }

  start(verifier) {
    const storageStrategy = BaseStorage.verify(this.storageStrategy);
    this._listener = e => {
      const {data, source, origin} = e;
      if (typeof data !== 'string') {
        return;
      }

      const [target, token, id, method, params] = greedySplit(data, '|', 5);
      const respond = (method, param) => {
        const message = [target + 'Done', token, id, method, JSON.stringify(param)].join('|');
        (source || window).postMessage(message, origin || '*');
      };

      if (target === STORAGE_PREFIX && verifier(source, origin, token)) {
        const invoke = storageStrategy[method].bind(storageStrategy);
        invoke(...JSON.parse(params))
        .then(result => {
          respond('resolve', result);
        }).catch(reason => {
          respond('reject', reason.message || reason);
        });
      }
    };

    window.addEventListener('message', this._listener);
  }

  stop() {
    window.removeEventListener('message', this._listener);
    this._listener = undefined;
  }
}

module.exports = FrameStorageListener;
