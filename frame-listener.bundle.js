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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/data-capsule/1.778.0/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/*! exports used: __assign, __awaiter, __extends, __generator, __rest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __rest; });
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __generator; });
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* unused harmony export __spreadArray */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** ./utils/constants.ts ***!
  \****************************/
/*! exports provided: toError, PREFIX_SEPARATOR, KEY_SEPARATOR, STORAGE_PREFIX, CONNECTION_MAX_TIMEOUT, MESSAGE_MAX_TIMEOUT, NOT_FOUND, SERVER_ERROR, LOCAL_STORAGE_UNSUPPORTED, COOKIE_CONSENT_DISALLOWED */
/*! exports used: CONNECTION_MAX_TIMEOUT, COOKIE_CONSENT_DISALLOWED, KEY_SEPARATOR, LOCAL_STORAGE_UNSUPPORTED, MESSAGE_MAX_TIMEOUT, NOT_FOUND, PREFIX_SEPARATOR, SERVER_ERROR, STORAGE_PREFIX, toError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return toError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PREFIX_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return KEY_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return STORAGE_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONNECTION_MAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MESSAGE_MAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SERVER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOCAL_STORAGE_UNSUPPORTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COOKIE_CONSENT_DISALLOWED; });
var errors = {
    NOT_FOUND: new Error('Key was not found in capsule'),
    SERVER_ERROR: new Error('Failed to perform operarion on server'),
    LOCAL_STORAGE_UNSUPPORTED: new Error('LocalStorage is not supported'),
    COOKIE_CONSENT_DISALLOWED: new Error('The item cannot be set because the user has not approved the category it belongs to'),
};
function toError(str) {
    return (Object.keys(errors)
        .map(function (key) { return errors[key]; })
        .find(function (err) { return err.message === str; }) || new Error(str));
}
var PREFIX_SEPARATOR = '|';
var KEY_SEPARATOR = '#';
var STORAGE_PREFIX = 'capsule';
var CONNECTION_MAX_TIMEOUT = 2000;
var MESSAGE_MAX_TIMEOUT = 8000;
var NOT_FOUND = errors.NOT_FOUND;
var SERVER_ERROR = errors.SERVER_ERROR;
var LOCAL_STORAGE_UNSUPPORTED = errors.LOCAL_STORAGE_UNSUPPORTED;
var COOKIE_CONSENT_DISALLOWED = errors.COOKIE_CONSENT_DISALLOWED;


/***/ }),

/***/ 10:
/*!*****************************************!*\
  !*** ./utils/frame-storage-listener.ts ***!
  \*****************************************/
/*! exports provided: FrameStorageListener */
/*! exports used: FrameStorageListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameStorageListener; });
/* harmony import */ var greedy_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! greedy-split */ 7);
/* harmony import */ var greedy_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(greedy_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var message_channel_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! message-channel/listener */ 12);
/* harmony import */ var message_channel_listener__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(message_channel_listener__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-storage */ 2);
/* harmony import */ var _strategies_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strategies/local-storage */ 4);




var FrameStorageListener = /** @class */ (function () {
    function FrameStorageListener(strategy) {
        if (strategy === void 0) { strategy = new _strategies_local_storage__WEBPACK_IMPORTED_MODULE_3__[/* LocalStorageStrategy */ "a"](); }
        this.storageStrategy = _base_storage__WEBPACK_IMPORTED_MODULE_2__[/* BaseStorage */ "a"].verify(strategy);
    }
    FrameStorageListener.prototype.start = function (verifier, interceptor) {
        if (!verifier || typeof verifier !== 'function') {
            throw new Error('start function must get a verifier function as a first argument');
        }
        if (interceptor && typeof interceptor !== 'function') {
            throw new Error('the interceptor must be a function');
        }
        var storageStrategy = _base_storage__WEBPACK_IMPORTED_MODULE_2__[/* BaseStorage */ "a"].verify(this.storageStrategy);
        this.stopListener = message_channel_listener__WEBPACK_IMPORTED_MODULE_1___default()('data-capsule', messageHandler);
        function messageHandler(e, reply) {
            if (typeof e.data !== 'string') {
                return;
            }
            var _a = greedy_split__WEBPACK_IMPORTED_MODULE_0___default()(e.data, '|', 3), token = _a[0], method = _a[1], payload = _a[2];
            var respond = function (status, data) {
                if (status === 'resolve') {
                    var response_1 = [status, JSON.stringify({ data: data })].join('|');
                    return reply(response_1);
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
            var modifiedOptions = interceptor
                ? interceptor(options, e.source, e.origin, token)
                : options;
            params[params.length - 1] = modifiedOptions;
            return invoke.apply(void 0, params).then(function (result) {
                return respond('resolve', result);
            })
                .catch(function (error) {
                return respond('reject', error.message || error);
            });
        }
    };
    FrameStorageListener.prototype.stop = function () {
        this.stopListener && this.stopListener();
    };
    return FrameStorageListener;
}());



/***/ }),

/***/ 12:
/*!***************************************************!*\
  !*** ../node_modules/message-channel/listener.js ***!
  \***************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/src/listener/listener */ 19);


/***/ }),

/***/ 19:
/*!*********************************************************************!*\
  !*** ../node_modules/message-channel/dist/src/listener/listener.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(/*! ../constants */ 8);

var _utils = __webpack_require__(/*! ../utils */ 6);

var _listenFactory = __webpack_require__(/*! ./listen-factory */ 20);

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

/***/ 2:
/*!*************************!*\
  !*** ./base-storage.ts ***!
  \*************************/
/*! exports provided: BaseStorage */
/*! exports used: BaseStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseStorage; });
var BaseStorage = /** @class */ (function () {
    function BaseStorage() {
    }
    BaseStorage.verify = function (strategy) {
        if (strategy instanceof BaseStorage) {
            return strategy;
        }
        else {
            throw new Error('This class must extend BaseStorage!');
        }
    };
    BaseStorage.prototype.extendScope = function (scope) {
        return scope;
    };
    return BaseStorage;
}());



/***/ }),

/***/ 20:
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

var _utils = __webpack_require__(/*! ../utils */ 6);

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

/***/ 4:
/*!*************************************************!*\
  !*** ./strategies/local-storage.ts + 3 modules ***!
  \*************************************************/
/*! exports provided: LocalStorageStrategy */
/*! exports used: LocalStorageStrategy */
/*! ModuleConcatenation bailout: Cannot concat with ./base-storage.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./utils/constants.ts */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/tslib/tslib.es6.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ local_storage_LocalStorageStrategy; });

// EXTERNAL MODULE: ../node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./base-storage.ts
var base_storage = __webpack_require__(2);

// EXTERNAL MODULE: ./utils/constants.ts
var constants = __webpack_require__(1);

// CONCATENATED MODULE: ./consent-policy.ts
/* global consentPolicyManager, Wix */

var CONSENT_POLICY_CATEGORIES = [
    'essential',
    'functional',
    'analytics',
    'advertising',
];
function verifyConsentPolicy(category) {
    verifyConsentPolicyCategoryIfExists(category);
    var policy = getConsentPolicy();
    if (typeof policy !== 'undefined' && !policy[category]) {
        throw constants["b" /* COOKIE_CONSENT_DISALLOWED */];
    }
}
function verifyConsentPolicyCategoryIfExists(category) {
    if (!category) {
        return;
    }
    if (CONSENT_POLICY_CATEGORIES.indexOf(category) === -1) {
        var categories = CONSENT_POLICY_CATEGORIES.map(function (v) { return "'" + v + "'"; }).join(', ');
        throw new Error("category must be one of " + categories);
    }
}
function getConsentPolicy() {
    var policy = (resolveByNativeAPI() || resolveByJsSDK() || none()).policy;
    return policy;
}
function resolveByNativeAPI() {
    return (typeof consentPolicyManager === 'object' &&
        consentPolicyManager.getCurrentConsentPolicy &&
        consentPolicyManager.getCurrentConsentPolicy());
}
function resolveByJsSDK() {
    return (typeof Wix === 'object' &&
        Wix.Utils &&
        Wix.Utils.getCurrentConsentPolicy &&
        Wix.Utils.getCurrentConsentPolicy());
}
function none() {
    return {};
}

// CONCATENATED MODULE: ./utils/record-utils.ts
/* global localStorage */


function parseCacheKey(cacheKey) {
    var _a = cacheKey.split(constants["c" /* KEY_SEPARATOR */]), prefix = _a[0], key = _a[1];
    var _b = prefix.split(constants["g" /* PREFIX_SEPARATOR */]), namespace = _b[1], scope = _b[2];
    if (scope === undefined) {
        return { namespace: namespace, key: key };
    }
    else {
        return { namespace: namespace, scope: scope, key: key };
    }
}
function deserializeData(data) {
    return JSON.parse(data);
}
function getCacheRecords(prefix) {
    if (prefix === void 0) { prefix = constants["i" /* STORAGE_PREFIX */] + constants["g" /* PREFIX_SEPARATOR */]; }
    var items = [];
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.startsWith(prefix)) {
            var data = localStorage.getItem(key);
            items.push(Object(tslib_es6["a" /* __assign */])(Object(tslib_es6["a" /* __assign */])({ size: key.length + data.length, originalKey: key }, deserializeData(data)), parseCacheKey(key)));
        }
    }
    return items;
}
function isExpired(data) {
    if (data.expiration) {
        return data.createdAt + data.expiration * 1000 <= Date.now();
    }
    else {
        return false;
    }
}


// CONCATENATED MODULE: ./utils/local-storage-cleaner.ts

function deleteRecord(cleaner, record) {
    if (record === void 0) { record = cleaner.records[0]; }
    localStorage.removeItem(record.originalKey);
    return {
        records: record === cleaner.records[0]
            ? cleaner.records.slice(1)
            : cleaner.records.filter(function (_a) {
                var originalKey = _a.originalKey;
                return originalKey !== record.originalKey;
            }),
        requiredSpace: cleaner.requiredSpace - record.size,
    };
}
function deleteExpired(cleaner) {
    var expiredRecords = cleaner.records.filter(function (record) { return isExpired(record); });
    expiredRecords.forEach(function (record) { return (cleaner = deleteRecord(cleaner, record)); });
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

// CONCATENATED MODULE: ./strategies/local-storage.ts






var local_storage_LocalStorageStrategy = /** @class */ (function (_super) {
    Object(tslib_es6["c" /* __extends */])(LocalStorageStrategy, _super);
    function LocalStorageStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalStorageStrategy.prototype.setItem = function (key, value, options) {
        return Object(tslib_es6["b" /* __awaiter */])(this, void 0, void 0, function () {
            var serializedKey, serializedValue;
            return Object(tslib_es6["d" /* __generator */])(this, function (_a) {
                serializedKey = getCacheKey(key, options);
                serializedValue = serializeData(value, options);
                // not mandatory, yet (gradual enforcement)
                if (options.category) {
                    verifyConsentPolicy(options.category);
                }
                try {
                    localStorage.setItem(serializedKey, serializedValue);
                }
                catch (e) {
                    localStorageCleaner(serializedKey.length + serializedValue.length);
                    localStorage.setItem(serializedKey, serializedValue);
                }
                return [2 /*return*/];
            });
        });
    };
    LocalStorageStrategy.prototype.getItem = function (key, options) {
        var fullKey = getCacheKey(key, options);
        var data;
        try {
            data = localStorage.getItem(fullKey);
        }
        catch (e) {
            return Promise.reject(constants["d" /* LOCAL_STORAGE_UNSUPPORTED */]);
        }
        data = data && deserializeData(data);
        if (data && !isExpired(data)) {
            updateAccessTime(fullKey, data);
            return Promise.resolve(data.value);
        }
        else {
            return Promise.reject(constants["f" /* NOT_FOUND */]);
        }
    };
    LocalStorageStrategy.prototype.removeItem = function (key, options) {
        key = getCacheKey(key, options);
        localStorage.removeItem(key);
        return Promise.resolve();
    };
    LocalStorageStrategy.prototype.getAllItems = function (options) {
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
}(base_storage["a" /* BaseStorage */]));

function getCacheKey(key, options) {
    return getCachePrefix(options) + key;
}
function stringify(obj) {
    return typeof obj === 'string' ? obj : JSON.stringify(obj);
}
function getCachePrefix(options) {
    return ([constants["i" /* STORAGE_PREFIX */], options.namespace, stringify(options.scope)]
        .filter(function (x) { return x; })
        .join(constants["g" /* PREFIX_SEPARATOR */]) + constants["c" /* KEY_SEPARATOR */]);
}
function serializeData(value, options) {
    var data = {
        lastUsed: Date.now(),
        createdAt: options.createdAt || Date.now(),
        expiration: options.expiration,
        value: value,
    };
    return JSON.stringify(data);
}
function updateAccessTime(fullKey, data) {
    var expiration = data.expiration, createdAt = data.createdAt;
    localStorage.setItem(fullKey, serializeData(data.value, { expiration: expiration, createdAt: createdAt }));
}


/***/ }),

/***/ 5:
/*!*************************!*\
  !*** ./data-capsule.ts ***!
  \*************************/
/*! exports provided: DataCapsule */
/*! exports used: DataCapsule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataCapsule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var _base_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-storage */ 2);


var DataCapsule = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(DataCapsule, _super);
    function DataCapsule(_a) {
        var strategy = _a.strategy, options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "e"])(_a, ["strategy"]);
        var _this = _super.call(this) || this;
        _this.storageStrategy = _base_storage__WEBPACK_IMPORTED_MODULE_1__[/* BaseStorage */ "a"].verify(strategy);
        _this._options = options;
        return _this;
    }
    DataCapsule.prototype.setItem = function (key, value, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "b"])(this, void 0, Promise, function () {
            var validOptions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __generator */ "d"])(this, function (_a) {
                validOptions = this._buildValidateOptions(this._options, options);
                return [2 /*return*/, this.storageStrategy.setItem(key, value, validOptions)];
            });
        });
    };
    DataCapsule.prototype.getItem = function (key, options) {
        var validOptions = this._buildValidateOptions(this._options, options);
        return this.storageStrategy.getItem(key, validOptions);
    };
    DataCapsule.prototype.removeItem = function (key, options) {
        var validOptions = this._buildValidateOptions(this._options, options);
        return this.storageStrategy.removeItem(key, validOptions);
    };
    DataCapsule.prototype.getAllItems = function (options) {
        var validOptions = this._buildValidateOptions(this._options, options);
        return this.storageStrategy.getAllItems(validOptions);
    };
    DataCapsule.prototype._buildValidateOptions = function (capsuleOptions, options) {
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, capsuleOptions), options);
        options.scope = this.storageStrategy.extendScope(options.scope);
        if (!validateNamespace(options)) {
            throw new Error('namespace is required and should be a string');
        }
        return options;
    };
    return DataCapsule;
}(_base_storage__WEBPACK_IMPORTED_MODULE_1__[/* BaseStorage */ "a"]));

function validateNamespace(options) {
    return typeof options.namespace === 'string';
}


/***/ }),

/***/ 52:
/*!**********************************!*\
  !*** ./global-frame-listener.ts ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* global window */
var dataCapsuleToolsFrameListeneer = __webpack_require__(/*! ./frame-listener */ 53);
if (typeof window !== 'undefined') {
    window.DataCapsuleTools = dataCapsuleToolsFrameListeneer;
}
module.exports = dataCapsuleToolsFrameListeneer;


/***/ }),

/***/ 53:
/*!***************************!*\
  !*** ./frame-listener.ts ***!
  \***************************/
/*! exports provided: NOT_FOUND, BaseStorage, DataCapsule, LocalStorageStrategy, FrameStorageListener */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./global-frame-listener.ts (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-storage */ 2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return _base_storage__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _data_capsule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-capsule */ 5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataCapsule", function() { return _data_capsule__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _strategies_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strategies/local-storage */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageStrategy", function() { return _strategies_local_storage__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/constants */ 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOT_FOUND", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_3__["f"]; });

/* harmony import */ var _utils_frame_storage_listener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/frame-storage-listener */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameStorageListener", function() { return _utils_frame_storage_listener__WEBPACK_IMPORTED_MODULE_4__["a"]; });









/***/ }),

/***/ 6:
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

var _constants = __webpack_require__(/*! ./constants */ 8);

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

/***/ 7:
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

/***/ 8:
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

/***/ })

/******/ });
});
//# sourceMappingURL=frame-listener.bundle.js.map