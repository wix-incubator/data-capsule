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
    // if (this._listener) {
    //   return;
    // }
    const storageStrategy = BaseStorage.verify(this.storageStrategy);
    this._listener = e => {
      const [target, token, id, method, params] = greedySplit(e.data, '|', 5);
      const respond = (method, param) => {
        const message = [target + 'Done', token, id, method, JSON.stringify(param)].join('|');
        (e.source || window).postMessage(message, e.origin || '*');
      };

      if (target === STORAGE_PREFIX && verifier(e.source, e.origin, token)) {
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
