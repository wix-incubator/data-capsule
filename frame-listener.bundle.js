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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
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

/***/ 1:
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

/***/ 4:
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
var localStorageCleaner = __webpack_require__(/*! ../utils/local-storage-cleaner */ 8);

var _require = __webpack_require__(/*! ../utils/constants */ 1),
    STORAGE_PREFIX = _require.STORAGE_PREFIX,
    PREFIX_SEPARATOR = _require.PREFIX_SEPARATOR,
    KEY_SEPARATOR = _require.KEY_SEPARATOR,
    NOT_FOUND = _require.NOT_FOUND;

var _require2 = __webpack_require__(/*! ../utils/record-utils */ 5),
    getCacheRecords = _require2.getCacheRecords,
    deserializeData = _require2.deserializeData,
    isExpired = _require2.isExpired;

function getCacheKey(key, options) {
  return getCachePrefix(options) + key;
}

function getCachePrefix(options) {
  return [STORAGE_PREFIX, options.namespace, options.scope && JSON.stringify(options.scope)].filter(function (x) {
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

/***/ 40:
/*!**********************************!*\
  !*** ./global-frame-listener.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global window */


var dataCapsuleTools = __webpack_require__(/*! ./frame-listener */ 41);

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleTools;
}

module.exports = dataCapsuleTools;

/***/ }),

/***/ 41:
/*!***************************!*\
  !*** ./frame-listener.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FrameStorageListener = __webpack_require__(/*! ./utils/frame-storage-listener */ 7);
var LocalStorageStrategy = __webpack_require__(/*! ./strategies/local-storage */ 4);

var _require = __webpack_require__(/*! ./utils/constants */ 1),
    NOT_FOUND = _require.NOT_FOUND;

var BaseStorage = __webpack_require__(/*! ./base-storage */ 0);
var DataCapsule = __webpack_require__(/*! ./data-capsule */ 6);

module.exports = {
  NOT_FOUND: NOT_FOUND,
  BaseStorage: BaseStorage,
  DataCapsule: DataCapsule,
  LocalStorageStrategy: LocalStorageStrategy,
  FrameStorageListener: FrameStorageListener
};

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** ./utils/record-utils.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global localStorage */


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(/*! ../utils/constants */ 1),
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

/***/ 6:
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

/***/ 7:
/*!*****************************************!*\
  !*** ./utils/frame-storage-listener.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global window */


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var greedySplit = __webpack_require__(/*! greedy-split */ 3);
var BaseStorage = __webpack_require__(/*! ../base-storage */ 0);

var _require = __webpack_require__(/*! ./constants */ 1),
    STORAGE_PREFIX = _require.STORAGE_PREFIX;

var LocalStorageStrategy = __webpack_require__(/*! ../strategies/local-storage */ 4);

var FrameStorageListener = function () {
  function FrameStorageListener() {
    var strategy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new LocalStorageStrategy();

    _classCallCheck(this, FrameStorageListener);

    this.storageStrategy = BaseStorage.verify(strategy);
  }

  _createClass(FrameStorageListener, [{
    key: 'start',
    value: function start(verifier) {
      var storageStrategy = BaseStorage.verify(this.storageStrategy);
      this._listener = function (e) {
        var _greedySplit = greedySplit(e.data, '|', 5),
            _greedySplit2 = _slicedToArray(_greedySplit, 5),
            target = _greedySplit2[0],
            token = _greedySplit2[1],
            id = _greedySplit2[2],
            method = _greedySplit2[3],
            params = _greedySplit2[4];

        var respond = function respond(method, param) {
          var message = [target + 'Done', token, id, method, JSON.stringify(param)].join('|');
          (e.source || window).postMessage(message, e.origin || '*');
        };

        if (target === STORAGE_PREFIX && verifier(e.source, e.origin, token)) {
          var invoke = storageStrategy[method].bind(storageStrategy);
          invoke.apply(undefined, _toConsumableArray(JSON.parse(params))).then(function (result) {
            respond('resolve', result);
          }).catch(function (reason) {
            respond('reject', reason.message || reason);
          });
        }
      };

      window.addEventListener('message', this._listener);
    }
  }, {
    key: 'stop',
    value: function stop() {
      window.removeEventListener('message', this._listener);
      this._listener = undefined;
    }
  }]);

  return FrameStorageListener;
}();

module.exports = FrameStorageListener;

/***/ }),

/***/ 8:
/*!****************************************!*\
  !*** ./utils/local-storage-cleaner.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global localStorage */


var _require = __webpack_require__(/*! ./record-utils */ 5),
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

/***/ })

/******/ });
});
//# sourceMappingURL=frame-listener.bundle.js.map