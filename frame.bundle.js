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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/data-capsule/1.543.0/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */,
/* 4 */,
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
/*!*************************************!*\
  !*** ./strategies/frame-storage.ts ***!
  \*************************************/
/*! exports provided: FrameStorageStrategy */
/*! exports used: FrameStorageStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameStorageStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var greedy_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! greedy-split */ 7);
/* harmony import */ var greedy_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(greedy_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var message_channel_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! message-channel/connect */ 11);
/* harmony import */ var message_channel_connect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(message_channel_connect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-storage */ 2);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants */ 1);





var FrameStorageStrategy = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __extends */ "c"])(FrameStorageStrategy, _super);
    function FrameStorageStrategy(target, origin, token, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.connectionMaxTimeout, connectionMaxTimeout = _c === void 0 ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[/* CONNECTION_MAX_TIMEOUT */ "a"] : _c, _d = _b.messageMaxTimeout, messageMaxTimeout = _d === void 0 ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[/* MESSAGE_MAX_TIMEOUT */ "e"] : _d;
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.origin = origin;
        _this.token = token;
        _this.channel = undefined;
        _this.connectionMaxTimeout = connectionMaxTimeout;
        _this.messageMaxTimeout = messageMaxTimeout;
        return _this;
    }
    FrameStorageStrategy.prototype.getChannel = function () {
        var _this = this;
        if (this.channel) {
            return Promise.resolve(this.channel);
        }
        return message_channel_connect__WEBPACK_IMPORTED_MODULE_2___default()('data-capsule', {
            target: this.target,
            origin: this.origin,
            connectionMaxTimeout: this.connectionMaxTimeout,
            messageMaxTimeout: this.messageMaxTimeout,
        }).then(function (channel) {
            _this.channel = channel;
            return channel;
        });
    };
    FrameStorageStrategy.prototype.sendCommand = function (method) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var payload = { data: params };
        return this.getChannel().then(function (sendToChannel) {
            var message = [_this.token, method, JSON.stringify(payload)].join('|');
            return sendToChannel(message).then(function (e) {
                var _a = greedy_split__WEBPACK_IMPORTED_MODULE_1___default()(e.data, '|', 2), status = _a[0], eventPayload = _a[1];
                if (status === 'reject') {
                    throw Object(_utils_constants__WEBPACK_IMPORTED_MODULE_4__[/* toError */ "j"])(eventPayload);
                }
                return JSON.parse(eventPayload).data;
            });
        });
    };
    FrameStorageStrategy.prototype.setItem = function (key, value, options) {
        return this.sendCommand('setItem', key, value, options);
    };
    FrameStorageStrategy.prototype.getItem = function (key, options) {
        return this.sendCommand('getItem', key, options);
    };
    FrameStorageStrategy.prototype.removeItem = function (key, options) {
        return this.sendCommand('removeItem', key, options);
    };
    FrameStorageStrategy.prototype.getAllItems = function (options) {
        return this.sendCommand('getAllItems', options);
    };
    return FrameStorageStrategy;
}(_base_storage__WEBPACK_IMPORTED_MODULE_3__[/* BaseStorage */ "a"]));



/***/ }),
/* 10 */,
/* 11 */
/*!**************************************************!*\
  !*** ../node_modules/message-channel/connect.js ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/src/connect/connect */ 13);


/***/ }),
/* 12 */,
/* 13 */
/*!*******************************************************************!*\
  !*** ../node_modules/message-channel/dist/src/connect/connect.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(/*! ../constants */ 8);

var _utils = __webpack_require__(/*! ../utils */ 6);

var _sendFactory = __webpack_require__(/*! ./send-factory */ 14);

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
/* 14 */
/*!************************************************************************!*\
  !*** ../node_modules/message-channel/dist/src/connect/send-factory.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendFactory;

var _utils = __webpack_require__(/*! ../utils */ 6);

var _v = __webpack_require__(/*! uuid/v4 */ 15);

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
/* 15 */
/*!**********************************!*\
  !*** ../node_modules/uuid/v4.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ 16);
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ 17);

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
/* 16 */
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/rng-browser.js ***!
  \***********************************************/
/*! no static exports found */
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
/* 17 */
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/bytesToUuid.js ***!
  \***********************************************/
/*! no static exports found */
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
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/*!*************************!*\
  !*** ./global-frame.ts ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* global window */
var dataCapsuleToolsFrame = __webpack_require__(/*! ./frame */ 48);
if (typeof window !== 'undefined') {
    window.DataCapsuleTools = dataCapsuleToolsFrame;
}
module.exports = dataCapsuleToolsFrame;


/***/ }),
/* 48 */
/*!******************!*\
  !*** ./frame.ts ***!
  \******************/
/*! exports provided: NOT_FOUND, BaseStorage, DataCapsule, FrameStorageStrategy */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./global-frame.ts (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-storage */ 2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return _base_storage__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _data_capsule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-capsule */ 5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataCapsule", function() { return _data_capsule__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _strategies_frame_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strategies/frame-storage */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameStorageStrategy", function() { return _strategies_frame_storage__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/constants */ 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOT_FOUND", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_3__["f"]; });








/***/ })
/******/ ]);
});
//# sourceMappingURL=frame.bundle.js.map