/* global window */
'use strict';

const co = require('co');
const greedySplit = require('./utils/greedy-split');
const {STORAGE_PREFIX} = require('./constants');

class FrameStorageListener {
  constructor(strategy) {
    this.storageStrategy = strategy;
  }

  start(verifier) {
    const storageStrategy = this.storageStrategy;
    this._listener = co.wrap(function* (e) {
      const [target, token, id, method, params] = greedySplit(e.data, '|', 5);
      if (target === STORAGE_PREFIX && verifier(e.origin, e.source, token)) {
        const invoke = storageStrategy[method].bind(storageStrategy);
        try {
          const result = yield invoke(...JSON.parse(params));
          const message = [target + 'Done', token, id, 'resolve', JSON.stringify(result)].join('|');
          (e.source || window).postMessage(message, e.origin || '*');
        } catch (reason) {
          const message = [target + 'Done', token, id, 'reject', JSON.stringify(reason)].join('|');
          (e.source || window).postMessage(message, e.origin || '*');
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
