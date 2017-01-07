/* global window */
'use strict';

const {STORAGE_PREFIX} = require('../constants');
const greedySplit = require('../utils/greedy-split');
let counter = 0;
const pending = {};

function sendCommand(method, params, options) {
  const id = `${Date.now()}-${++counter}`;
  const message = [STORAGE_PREFIX, options.token, id, method, JSON.stringify(params)].join('|');
  options.target.postMessage(message, options.origin);
  return new Promise((resolve, reject) => {
    pending[id] = {resolve, reject};
  });
}

function readCommands(options) {
  window.addEventListener('message', e => {
    const [target, token, id, method, params] = greedySplit(e.data, '|', 5);
    if (target === STORAGE_PREFIX + 'Done' && token === options.token) {
      pending[id][method](params ? JSON.parse(params) : undefined);
      delete pending[id];
    }
  });
}

class FrameStorageStrategy {
  constructor(target, origin, token) {
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
