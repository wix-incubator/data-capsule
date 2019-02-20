(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("data-capsule", [], factory);
	else if(typeof exports === 'object')
		exports["data-capsule"] = factory();
	else
		root["data-capsule"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/data-capsule/1.0.0/";
/******/
/******/
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!*************************!*\
  !*** ./base-storage.js ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class BaseStorage {
  constructor() {
    ['setItem', 'getItem', 'removeItem', 'getAllItems'].forEach(method => {
      if (this[method] === BaseStorage.prototype[method]) {
        throw new Error(`BaseStorage method [${method}] must be overriden!`);
      }
    });
  }

  setItem(key, value, options) {
    throw options;
  }

  getItem(key, options) {
    throw options;
  }

  removeItem(key, options) {
    throw options;
  }

  getAllItems(options) {
    throw options;
  }

  static verify(strategy) {
    if (strategy instanceof BaseStorage) {
      return strategy;
    } else {
      throw new Error(`This class must extend BaseStorage!`);
    }
  }
}

module.exports = BaseStorage;

/***/ }),

/***/ 1:
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

const errors = {
  NOT_FOUND: new Error('Key was not found in capsule'),
  SERVER_ERROR: new Error('Failed to perform operarion on server')
};

function toError(str) {
  return Object.values(errors).find(err => err.message === str) || str;
}

module.exports = {
  PREFIX_SEPARATOR: '|',
  KEY_SEPARATOR: '#',
  STORAGE_PREFIX: 'capsule',
  NOT_FOUND: errors.NOT_FOUND,
  CONNECTION_MAX_TIMEOUT: 2000,
  MESSAGE_MAX_TIMEOUT: 8000,
  SERVER_ERROR: errors.SERVER_ERROR,
  toError
};

/***/ }),

/***/ 10:
/*!***************************************************!*\
  !*** ../node_modules/message-channel/listener.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/src/listener/listener */ 11);


/***/ }),

/***/ 11:
/*!*********************************************************************!*\
  !*** ../node_modules/message-channel/dist/src/listener/listener.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(/*! ../constants */ 4);

var _utils = __webpack_require__(/*! ../utils */ 3);

var _listenFactory = __webpack_require__(/*! ./listen-factory */ 12);

var _listenFactory2 = _interopRequireDefault(_listenFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMessageRelevant(message, scope) {
  try {
    return (0, _utils.parseConnectionMessage)(message) === scope;
  } catch (e) {
    return false;
  }
}

function getMessagePort(e) {
  try {
    return e.ports[0];
  } catch (e) {}
}

function authorizeConnection(port) {
  port.postMessage(_constants.connectionSuccessMsg);
}

var noop = function noop() {};

function listener(scope) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

  if (!scope || typeof scope !== 'string') {
    throw new Error('listener function expects to recieve a scope<string> as a first argument');
  }

  var _listener = function _listener(e) {
    if (isMessageRelevant(e.data, scope)) {
      var port = getMessagePort(e);
      if (port) {
        authorizeConnection(port);
        (0, _listenFactory2.default)(port, callback);
      }
    }
  };

  window.addEventListener('message', _listener);
  return function () {
    return window.removeEventListener('message', _listener);
  };
}

module.exports = listener;

/***/ }),

/***/ 12:
/*!***************************************************************************!*\
  !*** ../node_modules/message-channel/dist/src/listener/listen-factory.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listenFactory;

var _utils = __webpack_require__(/*! ../utils */ 3);

function listenFactory(port, callback) {
  port.onmessage = function (e) {
    var originalMessage = e.data;

    var _parseChannelMessage = (0, _utils.parseChannelMessage)(originalMessage),
        id = _parseChannelMessage.id,
        payload = _parseChannelMessage.payload;

    var reply = function reply(replyMessage) {
      port.postMessage((0, _utils.constructChannelMessage)(replyMessage, id));
    };

    var modifiedEvent = {
      data: payload,
      origin: e.origin,
      lastEventId: e.lastEventId,
      source: e.source,
      ports: e.ports
    };

    callback(modifiedEvent, reply);
  };
}

/***/ }),

/***/ 13:
/*!****************************************!*\
  !*** ./utils/local-storage-cleaner.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global localStorage */


const { getCacheRecords, isExpired } = __webpack_require__(/*! ./record-utils */ 7);

function deleteRecord(cleaner, record = cleaner.records[0]) {
  localStorage.removeItem(record.originalKey);
  return {
    records: record === cleaner.records[0] ? cleaner.records.slice(1) : cleaner.records.filter(({ originalKey }) => originalKey !== record.originalKey),
    requiredSpace: cleaner.requiredSpace - record.size
  };
}

function deleteExpired(cleaner) {
  const expiredRecords = cleaner.records.filter(record => isExpired(record));
  expiredRecords.forEach(record => cleaner = deleteRecord(cleaner, record));
  return cleaner;
}

function lastUsedSort(a, b) {
  return a.lastUsed - b.lastUsed;
}

function canClean(cleaner) {
  return cleaner.records.length > 0 && cleaner.requiredSpace > 0;
}

function deleteOld(cleaner) {
  cleaner.records.sort(lastUsedSort);
  while (canClean(cleaner)) {
    cleaner = deleteRecord(cleaner);
  }
  return cleaner;
}

function localStorageCleaner(requiredSpace) {
  let cleaner = { records: getCacheRecords(), requiredSpace };
  cleaner = deleteExpired(cleaner);
  deleteOld(cleaner);
}

module.exports = localStorageCleaner;

/***/ }),

/***/ 3:
/*!*********************************************************!*\
  !*** ../node_modules/message-channel/dist/src/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseConnectionMessage = exports.constructConnectionMessage = exports.parseChannelMessage = exports.constructChannelMessage = undefined;

var _constants = __webpack_require__(/*! ./constants */ 4);

var constructChannelMessage = exports.constructChannelMessage = function constructChannelMessage(payload, id) {
  if (!id) {
    return payload;
  }

  return id + _constants.messageDelimiter + payload;
};

var parseChannelMessage = exports.parseChannelMessage = function parseChannelMessage(message) {
  var firstDelimiterIndex = message.indexOf(_constants.messageDelimiter);
  if (firstDelimiterIndex === -1) {
    return { id: null, payload: message };
  }

  var id = message.slice(0, firstDelimiterIndex);
  var payload = message.slice(firstDelimiterIndex + 1);
  return { id: id, payload: payload };
};

var constructConnectionMessage = exports.constructConnectionMessage = function constructConnectionMessage(scope) {
  return _constants.connectionRequestMsg + _constants.messageDelimiter + scope;
};

var parseConnectionMessage = exports.parseConnectionMessage = function parseConnectionMessage(message) {
  var firstDelimiterIndex = message.indexOf(_constants.messageDelimiter);
  if (firstDelimiterIndex === -1 || message.slice(0, firstDelimiterIndex) !== _constants.connectionRequestMsg) {
    throw new Error('Invalid connection message');
  }

  var scope = message.slice(firstDelimiterIndex + 1);
  return scope;
};

/***/ }),

/***/ 4:
/*!*************************************************************!*\
  !*** ../node_modules/message-channel/dist/src/constants.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var connectionRequestMsg = exports.connectionRequestMsg = 'req_con';
var connectionSuccessMsg = exports.connectionSuccessMsg = 'connection_success';
var messageDelimiter = exports.messageDelimiter = '|';
var deafultConnectionMaxTimeout = exports.deafultConnectionMaxTimeout = 200;
var deafultMessageMaxTimeout = exports.deafultMessageMaxTimeout = 5000;

/***/ }),

/***/ 5:
/*!******************************************************!*\
  !*** ../node_modules/greedy-split/dist/src/index.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function greedySplit(str, separator, limit) {
  var result = str.split(separator, limit);
  if (result.length === limit) {
    var length = 0;
    if (typeof separator === 'string') {
      length = result.join(separator).length;
    } else {
      length = result.reduce(function (l, x, i) {
        var separatorLength = 0;
        if (i + 1 < limit) {
          separatorLength = str.slice(l).match(separator).shift().length;
        }
        return l + x.length + separatorLength;
      }, 0);
    }
    result[limit - 1] += str.slice(length);
  }
  return result;
}

module.exports = greedySplit;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 55:
/*!**********************************!*\
  !*** ./global-frame-listener.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global window */


const dataCapsuleTools = __webpack_require__(/*! ./frame-listener */ 56);

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleTools;
}

module.exports = dataCapsuleTools;

/***/ }),

/***/ 56:
/*!***************************!*\
  !*** ./frame-listener.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const FrameStorageListener = __webpack_require__(/*! ./utils/frame-storage-listener */ 9);
const LocalStorageStrategy = __webpack_require__(/*! ./strategies/local-storage */ 6);
const { NOT_FOUND } = __webpack_require__(/*! ./utils/constants */ 1);
const BaseStorage = __webpack_require__(/*! ./base-storage */ 0);
const DataCapsule = __webpack_require__(/*! ./data-capsule */ 8);

module.exports = {
  NOT_FOUND,
  BaseStorage,
  DataCapsule,
  LocalStorageStrategy,
  FrameStorageListener
};

/***/ }),

/***/ 6:
/*!*************************************!*\
  !*** ./strategies/local-storage.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global localStorage */


const BaseStorage = __webpack_require__(/*! ../base-storage */ 0);
const localStorageCleaner = __webpack_require__(/*! ../utils/local-storage-cleaner */ 13);
const { STORAGE_PREFIX, PREFIX_SEPARATOR, KEY_SEPARATOR, NOT_FOUND } = __webpack_require__(/*! ../utils/constants */ 1);
const { getCacheRecords, deserializeData, isExpired } = __webpack_require__(/*! ../utils/record-utils */ 7);

function getCacheKey(key, options) {
  return getCachePrefix(options) + key;
}

function getCachePrefix(options) {
  return [STORAGE_PREFIX, options.namespace, options.scope].filter(x => x).join(PREFIX_SEPARATOR) + KEY_SEPARATOR;
}

function serializeData(value, options) {
  return JSON.stringify({
    lastUsed: Date.now(),
    createdAt: options.createdAt || Date.now(),
    expiration: options.expiration,
    value
  });
}

function updateAccessTime(fullKey, data) {
  const { expiration, createdAt } = data;
  localStorage.setItem(fullKey, serializeData(data.value, { expiration, createdAt }));
}

class LocalStorageStrategy extends BaseStorage {
  setItem(key, value, options) {
    key = getCacheKey(key, options);
    value = serializeData(value, options);
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      localStorageCleaner(key.length + value.length);
      localStorage.setItem(key, value);
    }
    return Promise.resolve();
  }

  getItem(key, options) {
    const fullKey = getCacheKey(key, options);
    let data = localStorage.getItem(fullKey);
    data = data && deserializeData(data);
    if (data && !isExpired(data)) {
      updateAccessTime(fullKey, data);
      return Promise.resolve(data.value);
    } else {
      return Promise.reject(NOT_FOUND);
    }
  }

  removeItem(key, options) {
    key = getCacheKey(key, options);
    localStorage.removeItem(key);
    return Promise.resolve();
  }

  getAllItems(options) {
    const prefix = getCachePrefix(options);
    const items = {};
    getCacheRecords(prefix).forEach(record => {
      if (!isExpired(record)) {
        items[record.key] = record.value;
      }
    });
    return Promise.resolve(items);
  }
}

module.exports = LocalStorageStrategy;

/***/ }),

/***/ 7:
/*!*******************************!*\
  !*** ./utils/record-utils.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global localStorage */


const { STORAGE_PREFIX, PREFIX_SEPARATOR, KEY_SEPARATOR } = __webpack_require__(/*! ../utils/constants */ 1);

function parseCacheKey(cacheKey) {
  const [prefix, key] = cacheKey.split(KEY_SEPARATOR);
  const [, namespace, scope] = prefix.split(PREFIX_SEPARATOR);
  if (scope === undefined) {
    return { namespace, key };
  } else {
    return { namespace, scope, key };
  }
}

function deserializeData(data) {
  return JSON.parse(data);
}

function getCacheRecords(prefix = STORAGE_PREFIX + PREFIX_SEPARATOR) {
  const items = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      const data = localStorage.getItem(key);
      items.push(Object.assign({
        size: key.length + data.length,
        originalKey: key
      }, deserializeData(data), parseCacheKey(key)));
    }
  }
  return items;
}

function isExpired(data) {
  if (data.expiration) {
    return data.createdAt + data.expiration * 1000 <= Date.now();
  } else {
    return false;
  }
}

module.exports = {
  deserializeData,
  getCacheRecords,
  isExpired
};

/***/ }),

/***/ 8:
/*!*************************!*\
  !*** ./data-capsule.js ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const BaseStorage = __webpack_require__(/*! ./base-storage */ 0);

function validateNamespace(options) {
  if (!options.namespace) {
    throw new Error('namespace is required');
  } else if (typeof options.namespace !== 'string') {
    throw new Error('namespace should be a string');
  }
}

function buildValidadateOptions(capsuleOptions, options) {
  options = Object.assign({}, capsuleOptions, options);
  validateNamespace(options);
  return options;
}

class DataCapsule extends BaseStorage {
  constructor({ strategy, namespace, scope }) {
    super();
    this.storageStrategy = BaseStorage.verify(strategy);
    this._options = { namespace, scope };
  }

  setItem(key, value, options) {
    options = buildValidadateOptions(this._options, options);
    return this.storageStrategy.setItem(key, value, options);
  }

  getItem(key, options) {
    options = buildValidadateOptions(this._options, options);
    return this.storageStrategy.getItem(key, options);
  }

  removeItem(key, options) {
    options = buildValidadateOptions(this._options, options);
    return this.storageStrategy.removeItem(key, options);
  }

  getAllItems(options) {
    options = buildValidadateOptions(this._options, options);
    return this.storageStrategy.getAllItems(options);
  }
}

module.exports = DataCapsule;

/***/ }),

/***/ 9:
/*!*****************************************!*\
  !*** ./utils/frame-storage-listener.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const listenerMessageChannel = __webpack_require__(/*! message-channel/listener */ 10);
const greedySplit = __webpack_require__(/*! greedy-split */ 5);
const BaseStorage = __webpack_require__(/*! ../base-storage */ 0);
const LocalStorageStrategy = __webpack_require__(/*! ../strategies/local-storage */ 6);

class FrameStorageListener {
  constructor(strategy = new LocalStorageStrategy()) {
    this.storageStrategy = BaseStorage.verify(strategy);
    this.stopListener;
  }

  start(verifier, interceptor) {
    if (!verifier || typeof verifier !== 'function') {
      throw new Error('start function must get a verifier function as a first argument');
    }

    if (interceptor && typeof interceptor !== 'function') {
      throw new Error('the interceptor must be a function');
    }

    const storageStrategy = BaseStorage.verify(this.storageStrategy);
    this.stopListener = listenerMessageChannel('data-capsule', messageHandler);

    function messageHandler(e, reply) {
      if (typeof e.data !== 'string') {
        return;
      }

      const [token, method, payload] = greedySplit(e.data, '|', 3);

      const respond = (status, data) => {
        if (status === 'resolve') {
          const response = [status, JSON.stringify({ data })].join('|');
          return reply(response);
        }

        const response = [status, data].join('|');
        return reply(response);
      };

      if (!verifier(e.source, e.origin, token)) {
        return respond('reject', new Error('message was not authorized'));
      }

      const invoke = storageStrategy[method].bind(storageStrategy);

      const params = JSON.parse(payload).data;
      const options = params[params.length - 1];

      const modifiedOptions = interceptor ? interceptor(options, e.source, e.origin, token) : options;
      params[params.length - 1] = modifiedOptions;

      return invoke(...params).then(result => {
        return respond('resolve', result);
      }).catch(error => {
        return respond('reject', error.message || error);
      });
    }
  }

  stop() {
    this.stopListener && this.stopListener();
  }
}

module.exports = FrameStorageListener;

/***/ })

/******/ });
});
//# sourceMappingURL=frame-listener.bundle.js.map