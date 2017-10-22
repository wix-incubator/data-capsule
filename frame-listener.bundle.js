(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("data-capsule", [], factory);
	else if(typeof exports === 'object')
		exports["data-capsule"] = factory();
	else
		root["data-capsule"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/
/******/ 	if (typeof document !== 'undefined') {
/******/ 	    var style = document.getElementById("frame-listener.stylable.bundle.css");
/******/ 	    if(!style){
/******/ 	        style = document.createElement('style');
/******/ 	        style.id = "frame-listener.stylable.bundle.css";
/******/ 	        document.head.appendChild(style);
/******/ 	    }
/******/ 	    style.textContent = "";
/******/ 	}
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseStorage = function () {
  function BaseStorage() {
    var _this = this;

    _classCallCheck(this, BaseStorage);

    ['setItem', 'getItem', 'removeItem', 'getAllItems'].forEach(function (method) {
      if (_this[method] === BaseStorage.prototype[method]) {
        throw new Error('BaseStorage method [' + method + '] must be overriden!');
      }
    });
  }

  _createClass(BaseStorage, [{
    key: 'setItem',
    value: function setItem(key, value, options) {
      throw options;
    }
  }, {
    key: 'getItem',
    value: function getItem(key, options) {
      throw options;
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key, options) {
      throw options;
    }
  }, {
    key: 'getAllItems',
    value: function getAllItems(options) {
      throw options;
    }
  }], [{
    key: 'verify',
    value: function verify(strategy) {
      if (strategy instanceof BaseStorage) {
        return strategy;
      } else {
        throw new Error('This class must extend BaseStorage!');
      }
    }
  }]);

  return BaseStorage;
}();

module.exports = BaseStorage;

/***/ }),

/***/ 10:
/*!***************************************************!*\
  !*** ../node_modules/message-channel/listener.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/src/listener/listener */ 11);


/***/ }),

/***/ 11:
/*!*********************************************************************!*\
  !*** ../node_modules/message-channel/dist/src/listener/listener.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global localStorage */


var _require = __webpack_require__(/*! ./record-utils */ 7),
    getCacheRecords = _require.getCacheRecords,
    isExpired = _require.isExpired;

function deleteRecord(cleaner) {
  var record = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cleaner.records[0];

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
  var cleaner = { records: getCacheRecords(), requiredSpace: requiredSpace };
  cleaner = deleteExpired(cleaner);
  deleteOld(cleaner);
}

module.exports = localStorageCleaner;

/***/ }),

/***/ 2:
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var errors = {
  NOT_FOUND: new Error('Key was not found in capsule'),
  SERVER_ERROR: new Error('Failed to perform operarion on server')
};

function toError(str) {
  return Object.values(errors).find(function (err) {
    return err.message === str;
  }) || str;
}

module.exports = {
  PREFIX_SEPARATOR: '|',
  KEY_SEPARATOR: '#',
  STORAGE_PREFIX: 'capsule',
  NOT_FOUND: errors.NOT_FOUND,
  SERVER_ERROR: errors.SERVER_ERROR,
  toError: toError
};

/***/ }),

/***/ 3:
/*!*********************************************************!*\
  !*** ../node_modules/message-channel/dist/src/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FrameStorageListener = __webpack_require__(/*! ./utils/frame-storage-listener */ 9);
var LocalStorageStrategy = __webpack_require__(/*! ./strategies/local-storage */ 6);

var _require = __webpack_require__(/*! ./utils/constants */ 2),
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global localStorage */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseStorage = __webpack_require__(/*! ../base-storage */ 0);
var localStorageCleaner = __webpack_require__(/*! ../utils/local-storage-cleaner */ 13);

var _require = __webpack_require__(/*! ../utils/constants */ 2),
    STORAGE_PREFIX = _require.STORAGE_PREFIX,
    PREFIX_SEPARATOR = _require.PREFIX_SEPARATOR,
    KEY_SEPARATOR = _require.KEY_SEPARATOR,
    NOT_FOUND = _require.NOT_FOUND;

var _require2 = __webpack_require__(/*! ../utils/record-utils */ 7),
    getCacheRecords = _require2.getCacheRecords,
    deserializeData = _require2.deserializeData,
    isExpired = _require2.isExpired;

function getCacheKey(key, options) {
  return getCachePrefix(options) + key;
}

function getCachePrefix(options) {
  return [STORAGE_PREFIX, options.namespace, options.scope].filter(function (x) {
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

  localStorage.setItem(fullKey, serializeData(data.value, { expiration: expiration, createdAt: createdAt }));
}

var LocalStorageStrategy = function (_BaseStorage) {
  _inherits(LocalStorageStrategy, _BaseStorage);

  function LocalStorageStrategy() {
    _classCallCheck(this, LocalStorageStrategy);

    return _possibleConstructorReturn(this, (LocalStorageStrategy.__proto__ || Object.getPrototypeOf(LocalStorageStrategy)).apply(this, arguments));
  }

  _createClass(LocalStorageStrategy, [{
    key: 'setItem',
    value: function setItem(key, value, options) {
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
  }, {
    key: 'getItem',
    value: function getItem(key, options) {
      var fullKey = getCacheKey(key, options);
      var data = localStorage.getItem(fullKey);
      data = data && deserializeData(data);
      if (data && !isExpired(data)) {
        updateAccessTime(fullKey, data);
        return Promise.resolve(data.value);
      } else {
        return Promise.reject(NOT_FOUND);
      }
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key, options) {
      key = getCacheKey(key, options);
      localStorage.removeItem(key);
      return Promise.resolve();
    }
  }, {
    key: 'getAllItems',
    value: function getAllItems(options) {
      var prefix = getCachePrefix(options);
      var items = {};
      getCacheRecords(prefix).forEach(function (record) {
        if (!isExpired(record)) {
          items[record.key] = record.value;
        }
      });
      return Promise.resolve(items);
    }
  }]);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global localStorage */


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(/*! ../utils/constants */ 2),
    STORAGE_PREFIX = _require.STORAGE_PREFIX,
    PREFIX_SEPARATOR = _require.PREFIX_SEPARATOR,
    KEY_SEPARATOR = _require.KEY_SEPARATOR;

function parseCacheKey(cacheKey) {
  var _cacheKey$split = cacheKey.split(KEY_SEPARATOR),
      _cacheKey$split2 = _slicedToArray(_cacheKey$split, 2),
      prefix = _cacheKey$split2[0],
      key = _cacheKey$split2[1];

  var _prefix$split = prefix.split(PREFIX_SEPARATOR),
      _prefix$split2 = _slicedToArray(_prefix$split, 3),
      namespace = _prefix$split2[1],
      scope = _prefix$split2[2];

  if (scope === undefined) {
    return { namespace: namespace, key: key };
  } else {
    return { namespace: namespace, scope: scope, key: key };
  }
}

function deserializeData(data) {
  return JSON.parse(data);
}

function getCacheRecords() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : STORAGE_PREFIX + PREFIX_SEPARATOR;

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseStorage = __webpack_require__(/*! ./base-storage */ 0);

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

var DataCapsule = function (_BaseStorage) {
  _inherits(DataCapsule, _BaseStorage);

  function DataCapsule(_ref) {
    var strategy = _ref.strategy,
        namespace = _ref.namespace,
        scope = _ref.scope;

    _classCallCheck(this, DataCapsule);

    var _this = _possibleConstructorReturn(this, (DataCapsule.__proto__ || Object.getPrototypeOf(DataCapsule)).call(this));

    _this.storageStrategy = BaseStorage.verify(strategy);
    _this._options = { namespace: namespace, scope: scope };
    return _this;
  }

  _createClass(DataCapsule, [{
    key: 'setItem',
    value: function setItem(key, value, options) {
      options = buildValidadateOptions(this._options, options);
      return this.storageStrategy.setItem(key, value, options);
    }
  }, {
    key: 'getItem',
    value: function getItem(key, options) {
      options = buildValidadateOptions(this._options, options);
      return this.storageStrategy.getItem(key, options);
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key, options) {
      options = buildValidadateOptions(this._options, options);
      return this.storageStrategy.removeItem(key, options);
    }
  }, {
    key: 'getAllItems',
    value: function getAllItems(options) {
      options = buildValidadateOptions(this._options, options);
      return this.storageStrategy.getAllItems(options);
    }
  }]);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var listenerMessageChannel = __webpack_require__(/*! message-channel/listener */ 10);
var greedySplit = __webpack_require__(/*! greedy-split */ 5);
var BaseStorage = __webpack_require__(/*! ../base-storage */ 0);
var LocalStorageStrategy = __webpack_require__(/*! ../strategies/local-storage */ 6);

var FrameStorageListener = function () {
  function FrameStorageListener() {
    var strategy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new LocalStorageStrategy();

    _classCallCheck(this, FrameStorageListener);

    this.storageStrategy = BaseStorage.verify(strategy);
    this.stopListener;
  }

  _createClass(FrameStorageListener, [{
    key: 'start',
    value: function start(verifier, interceptor) {
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
            _greedySplit2 = _slicedToArray(_greedySplit, 3),
            token = _greedySplit2[0],
            method = _greedySplit2[1],
            payload = _greedySplit2[2];

        var respond = function respond(status, data) {
          if (status === 'resolve') {
            var _response = [status, JSON.stringify({ data: data })].join('|');
            return reply(_response);
          }

          var response = [status, data].join('|');
          return reply(response);
        };

        if (!verifier(e.source, e.origin, token)) {
          return respond('reject', new Error('message was not authorized'));
        }

        var invoke = storageStrategy[method].bind(storageStrategy);

        var params = JSON.parse(payload).data;
        var options = params[params.length - 1];

        var modifiedOptions = interceptor ? interceptor(options, e.source, e.origin, token) : options;
        params[params.length - 1] = modifiedOptions;

        return invoke.apply(undefined, _toConsumableArray(params)).then(function (result) {
          return respond('resolve', result);
        }).catch(function (error) {
          return respond('reject', error.message || error);
        });
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.stopListener && this.stopListener();
    }
  }]);

  return FrameStorageListener;
}();

module.exports = FrameStorageListener;

/***/ })

/******/ });
});
//# sourceMappingURL=frame-listener.bundle.js.map