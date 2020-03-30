import greedySplit from 'greedy-split';
import connectMessageChannel from 'message-channel/connect';
import BaseStorage from '../base-storage';
import {
  CONNECTION_MAX_TIMEOUT,
  MESSAGE_MAX_TIMEOUT,
  toError,
} from '../utils/constants';

export default class FrameStorageStrategy extends BaseStorage {
  constructor(target, origin, token, opts = {}) {
    super();
    this.target = target;
    this.origin = origin;
    this.token = token;
    this.channel = undefined;
    this.opts = opts;
    const {
      connectionMaxTimeout = CONNECTION_MAX_TIMEOUT,
      messageMaxTimeout = MESSAGE_MAX_TIMEOUT,
    } = this.opts;
    this.connectionMaxTimeout = connectionMaxTimeout;
    this.messageMaxTimeout = messageMaxTimeout;
  }

  getChannel() {
    if (this.channel) {
      return Promise.resolve(this.channel);
    }

    return connectMessageChannel('data-capsule', {
      target: this.target,
      origin: this.origin,
      connectionMaxTimeout: this.connectionMaxTimeout,
      messageMaxTimeout: this.messageMaxTimeout,
    }).then(channel => {
      this.channel = channel;
      return channel;
    });
  }

  sendCommand(method, params) {
    const payload = { data: params };

    return this.getChannel().then(sendToChannel => {
      const message = [this.token, method, JSON.stringify(payload)].join('|');

      return sendToChannel(message).then(e => {
        const [status, eventPayload] = greedySplit(e.data, '|', 2);

        if (status === 'reject') {
          throw toError(eventPayload);
        }

        return JSON.parse(eventPayload).data;
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
