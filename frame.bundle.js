(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("data-capsule", [], factory);
	else if(typeof exports === 'object')
		exports["data-capsule"] = factory();
	else
		root["data-capsule"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!*************************!*\
  !*** ./base-storage.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
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
    key: 'extendScope',
    value: function extendScope(scope) {
      return scope;
    }
  }, {
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
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ 14:
/*!*************************************!*\
  !*** ./strategies/frame-storage.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var greedySplit = __webpack_require__(/*! greedy-split */ 5);
var connectMessageChannel = __webpack_require__(/*! message-channel/connect */ 15);
var BaseStorage = __webpack_require__(/*! ../base-storage */ 0);

var _require = __webpack_require__(/*! ../utils/constants */ 1),
    CONNECTION_MAX_TIMEOUT = _require.CONNECTION_MAX_TIMEOUT,
    MESSAGE_MAX_TIMEOUT = _require.MESSAGE_MAX_TIMEOUT,
    toError = _require.toError;

var FrameStorageStrategy = function (_BaseStorage) {
  _inherits(FrameStorageStrategy, _BaseStorage);

  function FrameStorageStrategy(target, origin, token) {
    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, FrameStorageStrategy);

    var _this = _possibleConstructorReturn(this, (FrameStorageStrategy.__proto__ || Object.getPrototypeOf(FrameStorageStrategy)).call(this));

    _this.target = target;
    _this.origin = origin;
    _this.token = token;
    _this.channel;
    _this.opts = opts;
    var _this$opts = _this.opts,
        _this$opts$connection = _this$opts.connectionMaxTimeout,
        connectionMaxTimeout = _this$opts$connection === undefined ? CONNECTION_MAX_TIMEOUT : _this$opts$connection,
        _this$opts$messageMax = _this$opts.messageMaxTimeout,
        messageMaxTimeout = _this$opts$messageMax === undefined ? MESSAGE_MAX_TIMEOUT : _this$opts$messageMax;

    _this.connectionMaxTimeout = connectionMaxTimeout;
    _this.messageMaxTimeout = messageMaxTimeout;
    return _this;
  }

  _createClass(FrameStorageStrategy, [{
    key: 'getChannel',
    value: function getChannel() {
      var _this2 = this;

      if (this.channel) {
        return Promise.resolve(this.channel);
      }

      return connectMessageChannel('data-capsule', {
        target: this.target,
        origin: this.origin,
        connectionMaxTimeout: this.connectionMaxTimeout,
        messageMaxTimeout: this.messageMaxTimeout
      }).then(function (channel) {
        _this2.channel = channel;
        return channel;
      });
    }
  }, {
    key: 'sendCommand',
    value: function sendCommand(method, params) {
      var _this3 = this;

      var payload = { data: params };

      return this.getChannel().then(function (sendToChannel) {
        var message = [_this3.token, method, JSON.stringify(payload)].join('|');

        return sendToChannel(message).then(function (e) {
          var _greedySplit = greedySplit(e.data, '|', 2),
              _greedySplit2 = _slicedToArray(_greedySplit, 2),
              status = _greedySplit2[0],
              payload = _greedySplit2[1];

          if (status === 'reject') {
            throw toError(payload);
          }

          return JSON.parse(payload).data;
        });
      });
    }
  }, {
    key: 'setItem',
    value: function setItem() {
      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      return this.sendCommand('setItem', params);
    }
  }, {
    key: 'getItem',
    value: function getItem() {
      for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }

      return this.sendCommand('getItem', params);
    }
  }, {
    key: 'removeItem',
    value: function removeItem() {
      for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
      }

      return this.sendCommand('removeItem', params);
    }
  }, {
    key: 'getAllItems',
    value: function getAllItems() {
      for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        params[_key4] = arguments[_key4];
      }

      return this.sendCommand('getAllItems', params);
    }
  }]);

  return FrameStorageStrategy;
}(BaseStorage);

module.exports = FrameStorageStrategy;

/***/ }),

/***/ 15:
/*!**************************************************!*\
  !*** ../node_modules/message-channel/connect.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/src/connect/connect */ 16);


/***/ }),

/***/ 16:
/*!*******************************************************************!*\
  !*** ../node_modules/message-channel/dist/src/connect/connect.js ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(/*! ../constants */ 4);

var _utils = __webpack_require__(/*! ../utils */ 3);

var _sendFactory = __webpack_require__(/*! ./send-factory */ 17);

var _sendFactory2 = _interopRequireDefault(_sendFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connect(scope) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$targetOrigin = options.targetOrigin,
      targetOrigin = _options$targetOrigin === undefined ? '*' : _options$targetOrigin,
      _options$connectionMa = options.connectionMaxTimeout,
      connectionMaxTimeout = _options$connectionMa === undefined ? _constants.deafultConnectionMaxTimeout : _options$connectionMa,
      _options$messageMaxTi = options.messageMaxTimeout,
      messageMaxTimeout = _options$messageMaxTi === undefined ? _constants.deafultMessageMaxTimeout : _options$messageMaxTi;


  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('max timeout of ' + connectionMaxTimeout + 'ms exceeded'));
    }, connectionMaxTimeout);

    var channel = new window.MessageChannel();

    channel.port1.onmessage = function (e) {
      if (e.data === _constants.connectionSuccessMsg) {
        return resolve((0, _sendFactory2.default)(channel.port1, { messageMaxTimeout: messageMaxTimeout }));
      } else {
        reject(new Error('connection could not establise'));
      }
    };

    var connectionMessage = (0, _utils.constructConnectionMessage)(scope);
    window.parent.postMessage(connectionMessage, targetOrigin, [channel.port2]);
  });
}

module.exports = connect;

/***/ }),

/***/ 17:
/*!************************************************************************!*\
  !*** ../node_modules/message-channel/dist/src/connect/send-factory.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendFactory;

var _utils = __webpack_require__(/*! ../utils */ 3);

var _v = __webpack_require__(/*! uuid/v4 */ 18);

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendFactory(port, options) {
  var messageMaxTimeout = options.messageMaxTimeout;

  var messages = {};

  port.onmessage = function (e) {
    var _parseChannelMessage = (0, _utils.parseChannelMessage)(e.data),
        id = _parseChannelMessage.id,
        payload = _parseChannelMessage.payload;

    if (messages[id]) {
      var modifiedEvent = {
        data: payload,
        origin: e.origin,
        lastEventId: e.lastEventId,
        source: e.source,
        ports: e.ports
      };

      messages[id](modifiedEvent);
    }
  };

  return function (message, transferList) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(new Error('max timeout of ' + messageMaxTimeout + 'ms exceeded'));
      }, messageMaxTimeout);

      var messageId = (0, _v2.default)();
      var packaged = (0, _utils.constructChannelMessage)(message, messageId);
      messages[messageId] = resolve;
      return port.postMessage(packaged, transferList);
    });
  };
}

/***/ }),

/***/ 18:
/*!**********************************!*\
  !*** ../node_modules/uuid/v4.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ 19);
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ 20);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ 19:
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/rng-browser.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ 20:
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/bytesToUuid.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ 3:
/*!*********************************************************!*\
  !*** ../node_modules/message-channel/dist/src/utils.js ***!
  \*********************************************************/
/*! dynamic exports provided */
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
/*! dynamic exports provided */
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
/*! dynamic exports provided */
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

/***/ 53:
/*!*************************!*\
  !*** ./global-frame.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global window */


var dataCapsuleTools = __webpack_require__(/*! ./frame */ 54);

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleTools;
}

module.exports = dataCapsuleTools;

/***/ }),

/***/ 54:
/*!******************!*\
  !*** ./frame.js ***!
  \******************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FrameStorageStrategy = __webpack_require__(/*! ./strategies/frame-storage */ 14);

var _require = __webpack_require__(/*! ./utils/constants */ 1),
    NOT_FOUND = _require.NOT_FOUND;

var BaseStorage = __webpack_require__(/*! ./base-storage */ 0);
var DataCapsule = __webpack_require__(/*! ./data-capsule */ 8);

module.exports = {
  NOT_FOUND: NOT_FOUND,
  BaseStorage: BaseStorage,
  DataCapsule: DataCapsule,
  FrameStorageStrategy: FrameStorageStrategy
};

/***/ }),

/***/ 8:
/*!*************************!*\
  !*** ./data-capsule.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
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
    key: '_buildValidateOptions',
    value: function _buildValidateOptions(capsuleOptions, options) {
      options = Object.assign({}, capsuleOptions, options);
      options.scope = this.storageStrategy.extendScope(options.scope);
      validateNamespace(options);
      return options;
    }
  }, {
    key: 'setItem',
    value: function setItem(key, value, options) {
      options = this._buildValidateOptions(this._options, options);
      return this.storageStrategy.setItem(key, value, options);
    }
  }, {
    key: 'getItem',
    value: function getItem(key, options) {
      options = this._buildValidateOptions(this._options, options);
      return this.storageStrategy.getItem(key, options);
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key, options) {
      options = this._buildValidateOptions(this._options, options);
      return this.storageStrategy.removeItem(key, options);
    }
  }, {
    key: 'getAllItems',
    value: function getAllItems(options) {
      options = this._buildValidateOptions(this._options, options);
      return this.storageStrategy.getAllItems(options);
    }
  }]);

  return DataCapsule;
}(BaseStorage);

module.exports = DataCapsule;

/***/ })

/******/ });
});
//# sourceMappingURL=frame.bundle.js.map