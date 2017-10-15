'use strict';

const greedySplit = require('greedy-split');
const connectMessageChannel = require('message-channel/connect');
const BaseStorage = require('../base-storage');

class FrameStorageStrategy extends BaseStorage {
  constructor(target, origin, token) {
    super();
    this.target = target;
    this.origin = origin;
    this.token = token;
    this.channel;
  }

  getChannel() {
    if (this.channel) {
      return Promise.resolve(this.channel);
    }

    return connectMessageChannel('data-capsule', {target: this.target, origin: this.origin})
      .then(channel => {
        this.channel = channel;
        return channel;
      });
  }

  sendCommand(method, params) {
    const payload = {data: params};

    return this.getChannel()
      .then(sendToChannel => {
        const message = [this.token, method, JSON.stringify(payload)].join('|');

        return sendToChannel(message)
          .then(e => {
            const [status, payload] = greedySplit(e.data, '|', 2);
            if (status === 'reject') {
              throw payload;
            }

            return JSON.parse(payload).data;
          });
      });
  }

  setItem(...params) {
    return this.sendCommand('setItem', params);
  }

  getItem(...params) {
    return this.sendCommand('getItem', params);
  }

  removeItem(...params) {
    return this.sendCommand('removeItem', params);
  }

  getAllItems(...params) {
    return this.sendCommand('getAllItems', params);
  }
}

module.exports = FrameStorageStrategy;
