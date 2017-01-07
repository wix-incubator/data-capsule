/* global window */
'use strict';

const co = require('co');
const greedySplit = require('greedy-split');
const {STORAGE_PREFIX} = require('./constants');

class FrameStorageListener {
  constructor(strategy) {
    this.storageStrategy = strategy;
  }

  start(verifier) {
    const storageStrategy = this.storageStrategy;
    this._listener = co.wrap(function* (e) {
      const [target, token, id, method, params] = greedySplit(e.data, '|', 5);
      const respond = (method, param) => {
        const message = [target + 'Done', token, id, method, JSON.stringify(param)].join('|');
        (e.source || window).postMessage(message, e.origin || '*');
      };

      if (target === STORAGE_PREFIX && verifier(e.source, e.origin, token)) {
        const invoke = storageStrategy[method].bind(storageStrategy);
        try {
          respond('resolve', yield invoke(...JSON.parse(params)));
        } catch (reason) {
          respond('reject', reason.message);
        }
      }
    });
    window.addEventListener('message', this._listener);
  }

  stop() {
    window.removeEventListener('message', this._listener);
    this._listener = undefined;
  }
}

module.exports = FrameStorageListener;
