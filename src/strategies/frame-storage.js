/* global window */
'use strict';

const greedySplit = require('greedy-split');
const BaseStorage = require('../base-storage');
const {STORAGE_PREFIX, toError} = require('../utils/constants');
const pending = {};

function sendCommand(method, params, options) {
  const id = `${Date.now()}-${Math.random()}`;
  const message = [STORAGE_PREFIX, options.token, id, method, JSON.stringify(params)].join('|');
  options.target.postMessage(message, options.origin);
  return new Promise((resolve, reject) => {
    pending[id] = {resolve, reject: reason => reject(toError(reason))};
  });
}

function readCommands(options) {
  window.addEventListener('message', e => {
    const [target, token, id, method, params] = greedySplit(e.data, '|', 5);
    if (target === STORAGE_PREFIX + 'Done' && token === options.token) {
      pending[id][method](params ? JSON.parse(params) : undefined);
      delete pending[id];
    }
  }, true);
}

class FrameStorageStrategy extends BaseStorage {
  constructor(target, origin, token) {
    super();
    this._options = {target, origin, token};
    readCommands(this._options);
  }

  setItem(...params) {
    return sendCommand('setItem', params, this._options);
  }

  getItem(...params) {
    return sendCommand('getItem', params, this._options);
  }

  removeItem(...params) {
    return sendCommand('removeItem', params, this._options);
  }

  getAllItems(...params) {
    return sendCommand('getAllItems', params, this._options);
  }
}

module.exports = FrameStorageStrategy;
