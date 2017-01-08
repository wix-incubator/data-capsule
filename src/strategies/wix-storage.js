'use strict';

const axios = require('axios');
const BaseStorage = require('../base-storage');
const {NOT_FOUND, SERVER_ERROR} = require('../constants');

class WixStorageStrategy extends BaseStorage {
  setItem(key, value, options) {
    const payload = {
      nameSpace: options.namespace,
      key,
      blob: value
    };
    if (options.scope && options.scope.siteId) {
      payload.siteId = options.scope.siteId;
    }
    if (options.expiration) {
      payload.TTLInDays = Math.ceil(options.expiration / (60 * 60 * 24));
    }
    return axios.post('/_api/wix-user-preferences-webapp/set', payload)
      .then(() => undefined)
      .catch(() => {
        throw SERVER_ERROR;
      });
  }

  removeItem(key, options) {
    const payload = {
      nameSpace: options.namespace,
      key
    };
    if (options.scope && options.scope.siteId) {
      payload.siteId = options.scope.siteId;
    }
    return axios.post('/_api/wix-user-preferences-webapp/delete', payload)
      .then(() => undefined)
      .catch(() => {
        throw SERVER_ERROR;
      });
  }

  getItem(key, options) {
    const siteId = options.scope && options.scope.siteId;
    const path = siteId ? 'getVolatilePrefForSite' : 'getVolatilePrefForKey';
    const url = ['/_api/wix-user-preferences-webapp', path, options.namespace, siteId, key]
        .filter(x => x).join('/');

    return axios.get(url)
      .then(res => res.data[key])
      .catch(err => {
        throw err.response.status === 404 ? NOT_FOUND : SERVER_ERROR;
      });
  }

  getAllItems(options) {
    const siteId = options.scope && options.scope.siteId;
    const path = siteId ? 'getVolatilePrefsForSite' : 'getVolatilePrefs';
    const url = ['/_api/wix-user-preferences-webapp', path, options.namespace, siteId]
        .filter(x => x).join('/');

    return axios.get(url)
      .then(res => res.data)
      .catch(() => {
        throw SERVER_ERROR;
      });
  }
}

module.exports = WixStorageStrategy;
