import greedySplit from 'greedy-split';
import connectMessageChannel from 'message-channel/connect';
import { BaseStorage, BaseStorageOptions } from '../base-storage';
import {
  CONNECTION_MAX_TIMEOUT,
  MESSAGE_MAX_TIMEOUT,
  toError,
} from '../utils/constants';

export interface FrameStorageStrategyOptions {
  connectionMaxTimeout?: number;
  messageMaxTimeout?: number;
}

export class FrameStorageStrategy extends BaseStorage<BaseStorageOptions> {
  private target: Window;
  private origin: string;
  private token: string;
  private channel: undefined;
  private connectionMaxTimeout: number;
  private messageMaxTimeout: number;

  constructor(
    target: Window,
    origin: string,
    token: string,
    {
      connectionMaxTimeout = CONNECTION_MAX_TIMEOUT,
      messageMaxTimeout = MESSAGE_MAX_TIMEOUT,
    }: FrameStorageStrategyOptions = {},
  ) {
    super();
    this.target = target;
    this.origin = origin;
    this.token = token;
    this.channel = undefined;
    this.connectionMaxTimeout = connectionMaxTimeout;
    this.messageMaxTimeout = messageMaxTimeout;
  }

  getChannel(): Promise<any> {
    if (this.channel) {
      return Promise.resolve(this.channel);
    }

    return connectMessageChannel('data-capsule', {
      target: this.target,
      origin: this.origin,
      connectionMaxTimeout: this.connectionMaxTimeout,
      messageMaxTimeout: this.messageMaxTimeout,
    }).then((channel: any) => {
      this.channel = channel;
      return channel;
    });
  }

  sendCommand(method: string, ...params: any[]) {
    const payload = { data: params };

    return this.getChannel().then((sendToChannel) => {
      const message = [this.token, method, JSON.stringify(payload)].join('|');

      return sendToChannel(message).then((e: any) => {
        const [status, eventPayload] = greedySplit(e.data, '|', 2);

        if (status === 'reject') {
          throw toError(eventPayload);
        }

        return JSON.parse(eventPayload).data;
      });
    });
  }

  setItem<T>(key: string, value: T, options: BaseStorageOptions) {
    return this.sendCommand('setItem', key, value, options);
  }

  getItem<T = any>(key: string, options: BaseStorageOptions): Promise<T> {
    return this.sendCommand('getItem', key, options);
  }

  removeItem(key: string, options: BaseStorageOptions): Promise<void> {
    return this.sendCommand('removeItem', key, options);
  }

  getAllItems<T = any>(options: BaseStorageOptions): Promise<T> {
    return this.sendCommand('getAllItems', options);
  }
}
