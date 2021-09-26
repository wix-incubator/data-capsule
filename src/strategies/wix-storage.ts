import type { AxiosError, AxiosInstance } from 'axios';
import axios from 'axios';
import { BaseStorage, BaseStorageOptions, Scope } from '../base-storage';
import { NOT_FOUND, SERVER_ERROR } from '../utils/constants';

function getCookieValue(name: string) {
  if (typeof document === 'undefined') {
    return '';
  } else {
    return (document.cookie.match(`${name}=([^;]*)`) || ['']).pop();
  }
}

export function getUserId() {
  const wixClient = getCookieValue('wixClient').split('|');
  return wixClient[6] || getCookieValue('_wixCIDX');
}

export interface WixStorageStrategyOptions extends BaseStorageOptions {
  namespace: string;
  scope?:
    | string
    | {
        siteId?: string;
      };
  expiration: number;
}

type HttpClient = Pick<AxiosInstance, 'post' | 'get'>;

export type WixStorageStrategyParams =
  | { httpClient: HttpClient; signedInstance?: undefined }
  | { httpClient?: undefined; signedInstance?: string };

export class WixStorageStrategy extends BaseStorage<WixStorageStrategyOptions> {
  private readonly httpClient: HttpClient;

  constructor({ httpClient, signedInstance }: WixStorageStrategyParams = {}) {
    super();

    this.httpClient =
      httpClient ??
      axios.create({
        headers: headers({ signedInstance }),
      });
  }

  extendScope(scope: Scope) {
    return {
      userId: getUserId(),
      ...(typeof scope === 'string' ? { siteId: scope } : scope),
    };
  }

  setItem<T>(
    key: string,
    value: T,
    options: WixStorageStrategyOptions,
  ): Promise<void> {
    const payload: any = {
      nameSpace: options.namespace,
      key,
      blob: value,
    };
    if (typeof options.scope === 'object' && options.scope.siteId) {
      payload.siteId = options.scope.siteId;
    }
    if (options.expiration) {
      payload.TTLInDays = Math.ceil(options.expiration / (60 * 60 * 24));
    }
    return this.httpClient
      .post('/_api/wix-user-preferences-webapp/set', payload)
      .then(() => undefined)
      .catch(() => {
        throw SERVER_ERROR;
      });
  }

  removeItem(key: string, options: WixStorageStrategyOptions) {
    const payload: any = {
      nameSpace: options.namespace,
      key,
    };
    if (typeof options.scope === 'object' && options.scope.siteId) {
      payload.siteId = options.scope.siteId;
    }
    return this.httpClient
      .post('/_api/wix-user-preferences-webapp/delete', payload)
      .then(() => undefined)
      .catch(() => {
        throw SERVER_ERROR;
      });
  }

  getItem<T = any>(
    key: string,
    options: WixStorageStrategyOptions,
  ): Promise<T> {
    const siteId =
      typeof options.scope === 'object' ? options.scope.siteId : undefined;
    const path = siteId ? 'getVolatilePrefForSite' : 'getVolatilePrefForKey';
    const url = [
      '/_api/wix-user-preferences-webapp',
      path,
      options.namespace,
      siteId,
      key,
    ]
      .filter((x) => x)
      .join('/');

    return this.httpClient
      .get(url)
      .then((res) => res.data[key])
      .catch((err: AxiosError) => {
        throw err?.response?.status === 404 ? NOT_FOUND : SERVER_ERROR;
      });
  }

  getAllItems(options: WixStorageStrategyOptions) {
    const siteId =
      typeof options.scope === 'object' ? options.scope.siteId : undefined;
    const path = siteId ? 'getVolatilePrefsForSite' : 'getVolatilePrefs';
    const url = [
      '/_api/wix-user-preferences-webapp',
      path,
      options.namespace,
      siteId,
    ]
      .filter((x) => x)
      .join('/');

    return this.httpClient
      .get(url)
      .then((res) => res.data)
      .catch(() => {
        throw SERVER_ERROR;
      });
  }
}

function headers({ signedInstance }: { signedInstance?: string }) {
  const headers: any = {}; // eslint-disable-line no-shadow

  if (signedInstance) {
    headers.authorization = signedInstance;
  }

  return headers;
}
