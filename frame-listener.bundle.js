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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/data-capsule/1.412.0/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: toError, PREFIX_SEPARATOR, KEY_SEPARATOR, STORAGE_PREFIX, NOT_FOUND, CONNECTION_MAX_TIMEOUT, MESSAGE_MAX_TIMEOUT, SERVER_ERROR, LOCAL_STORAGE_UNSUPPORTED */
/*! exports used: CONNECTION_MAX_TIMEOUT, KEY_SEPARATOR, LOCAL_STORAGE_UNSUPPORTED, MESSAGE_MAX_TIMEOUT, NOT_FOUND, PREFIX_SEPARATOR, SERVER_ERROR, STORAGE_PREFIX, toError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return toError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PREFIX_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KEY_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return STORAGE_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONNECTION_MAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MESSAGE_MAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SERVER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOCAL_STORAGE_UNSUPPORTED; });
var errors = {
  NOT_FOUND: new Error('Key was not found in capsule'),
  SERVER_ERROR: new Error('Failed to perform operarion on server'),
  LOCAL_STORAGE_UNSUPPORTED: new Error('LocalStorage is not supported')
};
function toError(str) {
  return Object.keys(errors).map(function (key) {
    return errors[key];
  }).find(function (err) {
    return err.message === str;
  }) || new Error(str);
}
var PREFIX_SEPARATOR = '|';
var KEY_SEPARATOR = '#';
var STORAGE_PREFIX = 'capsule';
var NOT_FOUND = errors.NOT_FOUND;
var CONNECTION_MAX_TIMEOUT = 2000;
var MESSAGE_MAX_TIMEOUT = 8000;
var SERVER_ERROR = errors.SERVER_ERROR;
var LOCAL_STORAGE_UNSUPPORTED = errors.LOCAL_STORAGE_UNSUPPORTED;

/***/ }),

/***/ 1:
/*!*************************!*\
  !*** ./base-storage.js ***!
  \*************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseStorage; });
var BaseStorage = /*#__PURE__*/function () {
  function BaseStorage() {
    var _this = this;

    ['setItem', 'getItem', 'removeItem', 'getAllItems'].forEach(function (method) {
      if (_this[method] === BaseStorage.prototype[method]) {
        throw new Error("BaseStorage method [" + method + "] must be overriden!");
      }
    });
  }

  var _proto = BaseStorage.prototype;

  _proto.extendScope = function extendScope(scope) {
    return scope;
  };

  _proto.setItem = function setItem(key, value, options) {
    throw options;
  };

  _proto.getItem = function getItem(key, options) {
    throw options;
  };

  _proto.removeItem = function removeItem(key, options) {
    throw options;
  };

  _proto.getAllItems = function getAllItems(options) {
    throw options;
  };

  BaseStorage.verify = function verify(strategy) {
    if (strategy instanceof BaseStorage) {
      return strategy;
    } else {
      throw new Error("This class must extend BaseStorage!");
    }
  };

  return BaseStorage;
}();



/***/ }),

/***/ 10:
/*!***************************************************!*\
  !*** ../node_modules/message-channel/listener.js ***!
  \***************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/src/listener/listener */ 13);


/***/ }),

/***/ 13:
/*!*********************************************************************!*\
  !*** ../node_modules/message-channel/dist/src/listener/listener.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(/*! ../constants */ 7);

var _utils = __webpack_require__(/*! ../utils */ 5);

var _listenFactory = __webpack_require__(/*! ./listen-factory */ 14);

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

/***/ 14:
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

var _utils = __webpack_require__(/*! ../utils */ 5);

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

/***/ 3:
/*!*************************************************!*\
  !*** ./strategies/local-storage.js + 2 modules ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./base-storage.js */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/constants.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ local_storage_LocalStorageStrategy; });

// EXTERNAL MODULE: ./base-storage.js
var base_storage = __webpack_require__(1);

// EXTERNAL MODULE: ./utils/constants.js
var constants = __webpack_require__(0);

// CONCATENATED MODULE: ./utils/record-utils.js
/* global localStorage */


function parseCacheKey(cacheKey) {
  var _cacheKey$split = cacheKey.split(constants["b" /* KEY_SEPARATOR */]),
      prefix = _cacheKey$split[0],
      key = _cacheKey$split[1];

  var _prefix$split = prefix.split(constants["f" /* PREFIX_SEPARATOR */]),
      namespace = _prefix$split[1],
      scope = _prefix$split[2];

  if (scope === undefined) {
    return {
      namespace: namespace,
      key: key
    };
  } else {
    return {
      namespace: namespace,
      scope: scope,
      key: key
    };
  }
}

function deserializeData(data) {
  return JSON.parse(data);
}

function getCacheRecords(prefix) {
  if (prefix === void 0) {
    prefix = constants["h" /* STORAGE_PREFIX */] + constants["f" /* PREFIX_SEPARATOR */];
  }

  var items = [];

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);

    if (key.startsWith(prefix)) {
      var data = localStorage.getItem(key);
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


// CONCATENATED MODULE: ./utils/local-storage-cleaner.js
/* global localStorage */


function deleteRecord(cleaner, record) {
  if (record === void 0) {
    record = cleaner.records[0];
  }

  localStorage.removeItem(record.originalKey);
  return {
    records: record === cleaner.records[0] ? cleaner.records.slice(1) : cleaner.records.filter(function (_ref) {
      var originalKey = _ref.originalKey;
      return originalKey !== record.originalKey;
    }),
    requiredSpace: cleaner.requiredSpace - record.size
  };
}

function deleteExpired(cleaner) {
  var expiredRecords = cleaner.records.filter(function (record) {
    return isExpired(record);
  });
  expiredRecords.forEach(function (record) {
    return cleaner = deleteRecord(cleaner, record);
  });
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
  var cleaner = {
    records: getCacheRecords(),
    requiredSpace: requiredSpace
  };
  cleaner = deleteExpired(cleaner);
  deleteOld(cleaner);
}
// CONCATENATED MODULE: ./strategies/local-storage.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/* global localStorage */





function getCacheKey(key, options) {
  return getCachePrefix(options) + key;
}

function stringify(obj) {
  return typeof obj === 'string' ? obj : JSON.stringify(obj);
}

function getCachePrefix(options) {
  return [constants["h" /* STORAGE_PREFIX */], options.namespace, stringify(options.scope)].filter(function (x) {
    return x;
  }).join(constants["f" /* PREFIX_SEPARATOR */]) + constants["b" /* KEY_SEPARATOR */];
}

function serializeData(value, options) {
  return JSON.stringify({
    lastUsed: Date.now(),
    createdAt: options.createdAt || Date.now(),
    expiration: options.expiration,
    value: value
  });
}

function updateAccessTime(fullKey, data) {
  var expiration = data.expiration,
      createdAt = data.createdAt;
  localStorage.setItem(fullKey, serializeData(data.value, {
    expiration: expiration,
    createdAt: createdAt
  }));
}

var local_storage_LocalStorageStrategy = /*#__PURE__*/function (_BaseStorage) {
  _inheritsLoose(LocalStorageStrategy, _BaseStorage);

  function LocalStorageStrategy() {
    return _BaseStorage.apply(this, arguments) || this;
  }

  var _proto = LocalStorageStrategy.prototype;

  _proto.setItem = function setItem(key, value, options) {
    key = getCacheKey(key, options);
    value = serializeData(value, options);

    try {
      localStorage.setItem(key, value);
    } catch (e) {
      localStorageCleaner(key.length + value.length);
      localStorage.setItem(key, value);
    }

    return Promise.resolve();
  };

  _proto.getItem = function getItem(key, options) {
    var fullKey = getCacheKey(key, options);
    var data;

    try {
      data = localStorage.getItem(fullKey);
    } catch (e) {
      return Promise.reject(constants["c" /* LOCAL_STORAGE_UNSUPPORTED */]);
    }

    data = data && deserializeData(data);

    if (data && !isExpired(data)) {
      updateAccessTime(fullKey, data);
      return Promise.resolve(data.value);
    } else {
      return Promise.reject(constants["e" /* NOT_FOUND */]);
    }
  };

  _proto.removeItem = function removeItem(key, options) {
    key = getCacheKey(key, options);
    localStorage.removeItem(key);
    return Promise.resolve();
  };

  _proto.getAllItems = function getAllItems(options) {
    var prefix = getCachePrefix(options);
    var items = {};
    getCacheRecords(prefix).forEach(function (record) {
      if (!isExpired(record)) {
        items[record.key] = record.value;
      }
    });
    return Promise.resolve(items);
  };

  return LocalStorageStrategy;
}(base_storage["a" /* default */]);



/***/ }),

/***/ 4:
/*!*************************!*\
  !*** ./data-capsule.js ***!
  \*************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataCapsule; });
/* harmony import */ var _base_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-storage */ 1);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



function validateNamespace(options) {
  if (!options.namespace) {
    throw new Error('namespace is required');
  } else if (typeof options.namespace !== 'string') {
    throw new Error('namespace should be a string');
  }
}

var DataCapsule = /*#__PURE__*/function (_BaseStorage) {
  _inheritsLoose(DataCapsule, _BaseStorage);

  function DataCapsule(_ref) {
    var _this;

    var strategy = _ref.strategy,
        namespace = _ref.namespace,
        scope = _ref.scope;
    _this = _BaseStorage.call(this) || this;
    _this.storageStrategy = _base_storage__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].verify(strategy);
    _this._options = {
      namespace: namespace,
      scope: scope
    };
    return _this;
  }

  var _proto = DataCapsule.prototype;

  _proto._buildValidateOptions = function _buildValidateOptions(capsuleOptions, options) {
    options = Object.assign({}, capsuleOptions, options);
    options.scope = this.storageStrategy.extendScope(options.scope);
    validateNamespace(options);
    return options;
  };

  _proto.setItem = function setItem(key, value, options) {
    options = this._buildValidateOptions(this._options, options);
    return this.storageStrategy.setItem(key, value, options);
  };

  _proto.getItem = function getItem(key, options) {
    options = this._buildValidateOptions(this._options, options);
    return this.storageStrategy.getItem(key, options);
  };

  _proto.removeItem = function removeItem(key, options) {
    options = this._buildValidateOptions(this._options, options);
    return this.storageStrategy.removeItem(key, options);
  };

  _proto.getAllItems = function getAllItems(options) {
    options = this._buildValidateOptions(this._options, options);
    return this.storageStrategy.getAllItems(options);
  };

  return DataCapsule;
}(_base_storage__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);



/***/ }),

/***/ 48:
/*!**********************************!*\
  !*** ./global-frame-listener.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* global window */
var dataCapsuleTools = __webpack_require__(/*! ./frame-listener */ 49);

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleTools;
}

module.exports = dataCapsuleTools;

/***/ }),

/***/ 49:
/*!***************************!*\
  !*** ./frame-listener.js ***!
  \***************************/
/*! exports provided: NOT_FOUND, BaseStorage, DataCapsule, LocalStorageStrategy, FrameStorageListener */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./global-frame-listener.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_frame_storage_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/frame-storage-listener */ 8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameStorageListener", function() { return _utils_frame_storage_listener__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _strategies_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strategies/local-storage */ 3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageStrategy", function() { return _strategies_local_storage__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants */ 0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOT_FOUND", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony import */ var _base_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-storage */ 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return _base_storage__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _data_capsule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-capsule */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataCapsule", function() { return _data_capsule__WEBPACK_IMPORTED_MODULE_4__["a"]; });








/***/ }),

/***/ 5:
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

var _constants = __webpack_require__(/*! ./constants */ 7);

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

/***/ 6:
/*!******************************************************!*\
  !*** ../node_modules/greedy-split/dist/src/index.js ***!
  \******************************************************/
/*! no static exports found */
/*! exports used: default */
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

/***/ 7:
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

/***/ 8:
/*!*****************************************!*\
  !*** ./utils/frame-storage-listener.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameStorageListener; });
/* harmony import */ var message_channel_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! message-channel/listener */ 10);
/* harmony import */ var message_channel_listener__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(message_channel_listener__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var greedy_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! greedy-split */ 6);
/* harmony import */ var greedy_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(greedy_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-storage */ 1);
/* harmony import */ var _strategies_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strategies/local-storage */ 3);





var FrameStorageListener = /*#__PURE__*/function () {
  function FrameStorageListener(strategy) {
    if (strategy === void 0) {
      strategy = new _strategies_local_storage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]();
    }

    this.storageStrategy = _base_storage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].verify(strategy);
    this.stopListener = undefined;
  }

  var _proto = FrameStorageListener.prototype;

  _proto.start = function start(verifier, interceptor) {
    if (!verifier || typeof verifier !== 'function') {
      throw new Error('start function must get a verifier function as a first argument');
    }

    if (interceptor && typeof interceptor !== 'function') {
      throw new Error('the interceptor must be a function');
    }

    var storageStrategy = _base_storage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].verify(this.storageStrategy);
    this.stopListener = message_channel_listener__WEBPACK_IMPORTED_MODULE_0___default()('data-capsule', messageHandler);

    function messageHandler(e, reply) {
      if (typeof e.data !== 'string') {
        return;
      }

      var _greedySplit = greedy_split__WEBPACK_IMPORTED_MODULE_1___default()(e.data, '|', 3),
          token = _greedySplit[0],
          method = _greedySplit[1],
          payload = _greedySplit[2];

      var respond = function respond(status, data) {
        if (status === 'resolve') {
          var _response = [status, JSON.stringify({
            data: data
          })].join('|');

          return reply(_response);
        }

        var response = [status, data].join('|');
        return reply(response);
      };

      if (!verifier(e.source, e.origin, token)) {
        return respond('reject', 'message was not authorized');
      }

      var invoke = storageStrategy[method].bind(storageStrategy);
      var params = JSON.parse(payload).data;
      var options = params[params.length - 1];
      var modifiedOptions = interceptor ? interceptor(options, e.source, e.origin, token) : options;
      params[params.length - 1] = modifiedOptions;
      return invoke.apply(void 0, params).then(function (result) {
        return respond('resolve', result);
      })["catch"](function (error) {
        return respond('reject', error.message || error);
      });
    }
  };

  _proto.stop = function stop() {
    this.stopListener && this.stopListener();
  };

  return FrameStorageListener;
}();



/***/ })

/******/ });
});
//# sourceMappingURL=frame-listener.bundle.js.map