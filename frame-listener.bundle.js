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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/data-capsule/1.385.0/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
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
/***/ (function(module, exports) {

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

module.exports = {
  PREFIX_SEPARATOR: '|',
  KEY_SEPARATOR: '#',
  STORAGE_PREFIX: 'capsule',
  NOT_FOUND: errors.NOT_FOUND,
  CONNECTION_MAX_TIMEOUT: 2000,
  MESSAGE_MAX_TIMEOUT: 8000,
  SERVER_ERROR: errors.SERVER_ERROR,
  toError: toError,
  LOCAL_STORAGE_UNSUPPORTED: errors.LOCAL_STORAGE_UNSUPPORTED
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

/* global localStorage */
var _require = __webpack_require__(/*! ./record-utils */ 7),
    getCacheRecords = _require.getCacheRecords,
    isExpired = _require.isExpired;

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

/***/ 54:
/*!**********************************!*\
  !*** ./global-frame-listener.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* global window */
var dataCapsuleTools = __webpack_require__(/*! ./frame-listener */ 55);

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleTools;
}

module.exports = dataCapsuleTools;

/***/ }),

/***/ 55:
/*!***************************!*\
  !*** ./frame-listener.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var FrameStorageListener = __webpack_require__(/*! ./utils/frame-storage-listener */ 9);

var LocalStorageStrategy = __webpack_require__(/*! ./strategies/local-storage */ 6);

var _require = __webpack_require__(/*! ./utils/constants */ 1),
    NOT_FOUND = _require.NOT_FOUND;

var BaseStorage = __webpack_require__(/*! ./base-storage */ 0);

var DataCapsule = __webpack_require__(/*! ./data-capsule */ 8);

module.exports = {
  NOT_FOUND: NOT_FOUND,
  BaseStorage: BaseStorage,
  DataCapsule: DataCapsule,
  LocalStorageStrategy: LocalStorageStrategy,
  FrameStorageListener: FrameStorageListener
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/* global localStorage */
var BaseStorage = __webpack_require__(/*! ../base-storage */ 0);

var localStorageCleaner = __webpack_require__(/*! ../utils/local-storage-cleaner */ 13);

var _require = __webpack_require__(/*! ../utils/constants */ 1),
    STORAGE_PREFIX = _require.STORAGE_PREFIX,
    PREFIX_SEPARATOR = _require.PREFIX_SEPARATOR,
    KEY_SEPARATOR = _require.KEY_SEPARATOR,
    NOT_FOUND = _require.NOT_FOUND,
    LOCAL_STORAGE_UNSUPPORTED = _require.LOCAL_STORAGE_UNSUPPORTED;

var _require2 = __webpack_require__(/*! ../utils/record-utils */ 7),
    getCacheRecords = _require2.getCacheRecords,
    deserializeData = _require2.deserializeData,
    isExpired = _require2.isExpired;

function getCacheKey(key, options) {
  return getCachePrefix(options) + key;
}

function stringify(obj) {
  return typeof obj === 'string' ? obj : JSON.stringify(obj);
}

function getCachePrefix(options) {
  return [STORAGE_PREFIX, options.namespace, stringify(options.scope)].filter(function (x) {
    return x;
  }).join(PREFIX_SEPARATOR) + KEY_SEPARATOR;
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

var LocalStorageStrategy = /*#__PURE__*/function (_BaseStorage) {
  _inheritsLoose(LocalStorageStrategy, _BaseStorage);

  var _super = _createSuper(LocalStorageStrategy);

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
      return Promise.reject(LOCAL_STORAGE_UNSUPPORTED);
    }

    data = data && deserializeData(data);

    if (data && !isExpired(data)) {
      updateAccessTime(fullKey, data);
      return Promise.resolve(data.value);
    } else {
      return Promise.reject(NOT_FOUND);
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
}(BaseStorage);

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

/* global localStorage */
var _require = __webpack_require__(/*! ../utils/constants */ 1),
    STORAGE_PREFIX = _require.STORAGE_PREFIX,
    PREFIX_SEPARATOR = _require.PREFIX_SEPARATOR,
    KEY_SEPARATOR = _require.KEY_SEPARATOR;

function parseCacheKey(cacheKey) {
  var _cacheKey$split = cacheKey.split(KEY_SEPARATOR),
      prefix = _cacheKey$split[0],
      key = _cacheKey$split[1];

  var _prefix$split = prefix.split(PREFIX_SEPARATOR),
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
    prefix = STORAGE_PREFIX + PREFIX_SEPARATOR;
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

module.exports = {
  deserializeData: deserializeData,
  getCacheRecords: getCacheRecords,
  isExpired: isExpired
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var BaseStorage = __webpack_require__(/*! ./base-storage */ 0);

function validateNamespace(options) {
  if (!options.namespace) {
    throw new Error('namespace is required');
  } else if (typeof options.namespace !== 'string') {
    throw new Error('namespace should be a string');
  }
}

var DataCapsule = /*#__PURE__*/function (_BaseStorage) {
  _inheritsLoose(DataCapsule, _BaseStorage);

  var _super = _createSuper(DataCapsule);

  function DataCapsule(_ref) {
    var _this;

    var strategy = _ref.strategy,
        namespace = _ref.namespace,
        scope = _ref.scope;
    _this = _BaseStorage.call(this) || this;
    _this.storageStrategy = BaseStorage.verify(strategy);
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
}(BaseStorage);

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

var listenerMessageChannel = __webpack_require__(/*! message-channel/listener */ 10);

var greedySplit = __webpack_require__(/*! greedy-split */ 5);

var BaseStorage = __webpack_require__(/*! ../base-storage */ 0);

var LocalStorageStrategy = __webpack_require__(/*! ../strategies/local-storage */ 6);

var FrameStorageListener = /*#__PURE__*/function () {
  function FrameStorageListener(strategy) {
    if (strategy === void 0) {
      strategy = new LocalStorageStrategy();
    }

    this.storageStrategy = BaseStorage.verify(strategy);
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

    var storageStrategy = BaseStorage.verify(this.storageStrategy);
    this.stopListener = listenerMessageChannel('data-capsule', messageHandler);

    function messageHandler(e, reply) {
      if (typeof e.data !== 'string') {
        return;
      }

      var _greedySplit = greedySplit(e.data, '|', 3),
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

module.exports = FrameStorageListener;

/***/ })

/******/ });
});
//# sourceMappingURL=frame-listener.bundle.js.map