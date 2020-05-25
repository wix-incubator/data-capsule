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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/data-capsule/1.445.0/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: toError, PREFIX_SEPARATOR, KEY_SEPARATOR, STORAGE_PREFIX, NOT_FOUND, CONNECTION_MAX_TIMEOUT, MESSAGE_MAX_TIMEOUT, SERVER_ERROR, LOCAL_STORAGE_UNSUPPORTED, COOKIE_CONSENT_DISALLOWED */
/*! exports used: CONNECTION_MAX_TIMEOUT, COOKIE_CONSENT_DISALLOWED, KEY_SEPARATOR, LOCAL_STORAGE_UNSUPPORTED, MESSAGE_MAX_TIMEOUT, NOT_FOUND, PREFIX_SEPARATOR, SERVER_ERROR, STORAGE_PREFIX, toError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return toError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PREFIX_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return KEY_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return STORAGE_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONNECTION_MAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MESSAGE_MAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SERVER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOCAL_STORAGE_UNSUPPORTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COOKIE_CONSENT_DISALLOWED; });
var errors = {
  NOT_FOUND: new Error('Key was not found in capsule'),
  SERVER_ERROR: new Error('Failed to perform operarion on server'),
  LOCAL_STORAGE_UNSUPPORTED: new Error('LocalStorage is not supported'),
  COOKIE_CONSENT_DISALLOWED: new Error('The item cannot be set because the user has not approved the category it belongs to')
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
var COOKIE_CONSENT_DISALLOWED = errors.COOKIE_CONSENT_DISALLOWED;

/***/ }),
/* 1 */
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
/* 2 */
/*!***********************************************************!*\
  !*** ../node_modules/@babel/runtime/regenerator/index.js ***!
  \***********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 10);


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/*!***************************!*\
  !*** ./consent-policy.js ***!
  \***************************/
/*! exports provided: verifyConsentPolicy, verifyConsentPolicyCategoryIfExists */
/*! exports used: verifyConsentPolicy, verifyConsentPolicyCategoryIfExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return verifyConsentPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return verifyConsentPolicyCategoryIfExists; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ 0);
/* global consentPolicyManager, Wix */

var CONSENT_POLICY_CATEGORIES = ['essential', 'functional', 'analytics', 'advertising'];
function verifyConsentPolicy(category) {
  var policy = getConsentPolicy();

  if (typeof policy !== 'undefined' && !policy[category]) {
    throw _utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* COOKIE_CONSENT_DISALLOWED */ "b"];
  }
}
function verifyConsentPolicyCategoryIfExists(category) {
  if (!category) return;

  if (CONSENT_POLICY_CATEGORIES.indexOf(category) === -1) {
    var categories = CONSENT_POLICY_CATEGORIES.map(function (v) {
      return "'" + v + "'";
    }).join(', ');
    throw new Error("category must be one of " + categories);
  }
}

function getConsentPolicy() {
  var _ref = resolveByNativeAPI() || resolveByJsSDK() || none(),
      policy = _ref.policy;

  return policy;
}

function resolveByNativeAPI() {
  return typeof consentPolicyManager === 'object' && consentPolicyManager.getCurrentConsentPolicy && consentPolicyManager.getCurrentConsentPolicy();
}

function resolveByJsSDK() {
  return typeof Wix === 'object' && Wix.Utils && Wix.Utils.getCurrentConsentPolicy && Wix.Utils.getCurrentConsentPolicy();
}

function none() {
  return {};
}

/***/ }),
/* 6 */
/*!*************************!*\
  !*** ./data-capsule.js ***!
  \*************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataCapsule; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ 2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-storage */ 1);
/* harmony import */ var _consent_policy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consent-policy */ 5);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




function validateNamespace(options) {
  if (!options.namespace) {
    throw new Error('namespace is required');
  } else if (typeof options.namespace !== 'string') {
    throw new Error('namespace should be a string');
  }

  Object(_consent_policy__WEBPACK_IMPORTED_MODULE_2__[/* verifyConsentPolicyCategoryIfExists */ "b"])(options.category);
}

var DataCapsule = /*#__PURE__*/function (_BaseStorage) {
  _inheritsLoose(DataCapsule, _BaseStorage);

  function DataCapsule(_ref) {
    var _this;

    var strategy = _ref.strategy,
        namespace = _ref.namespace,
        scope = _ref.scope;
    _this = _BaseStorage.call(this) || this;
    _this.storageStrategy = _base_storage__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].verify(strategy);
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

  _proto.setItem = /*#__PURE__*/function () {
    var _setItem = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(key, value, options) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = this._buildValidateOptions(this._options, options);
              return _context.abrupt("return", this.storageStrategy.setItem(key, value, options));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function setItem(_x, _x2, _x3) {
      return _setItem.apply(this, arguments);
    }

    return setItem;
  }();

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
}(_base_storage__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);



/***/ }),
/* 7 */
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

var _constants = __webpack_require__(/*! ./constants */ 9);

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
/* 8 */
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
/* 9 */
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
/* 10 */
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 11 */,
/* 12 */
/*!*************************************!*\
  !*** ./strategies/frame-storage.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameStorageStrategy; });
/* harmony import */ var greedy_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! greedy-split */ 8);
/* harmony import */ var greedy_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(greedy_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var message_channel_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! message-channel/connect */ 14);
/* harmony import */ var message_channel_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(message_channel_connect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-storage */ 1);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ 0);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






var FrameStorageStrategy = /*#__PURE__*/function (_BaseStorage) {
  _inheritsLoose(FrameStorageStrategy, _BaseStorage);

  function FrameStorageStrategy(target, origin, token, opts) {
    var _this;

    if (opts === void 0) {
      opts = {};
    }

    _this = _BaseStorage.call(this) || this;
    _this.target = target;
    _this.origin = origin;
    _this.token = token;
    _this.channel = undefined;
    _this.opts = opts;
    var _this$opts = _this.opts,
        _this$opts$connection = _this$opts.connectionMaxTimeout,
        connectionMaxTimeout = _this$opts$connection === void 0 ? _utils_constants__WEBPACK_IMPORTED_MODULE_3__[/* CONNECTION_MAX_TIMEOUT */ "a"] : _this$opts$connection,
        _this$opts$messageMax = _this$opts.messageMaxTimeout,
        messageMaxTimeout = _this$opts$messageMax === void 0 ? _utils_constants__WEBPACK_IMPORTED_MODULE_3__[/* MESSAGE_MAX_TIMEOUT */ "e"] : _this$opts$messageMax;
    _this.connectionMaxTimeout = connectionMaxTimeout;
    _this.messageMaxTimeout = messageMaxTimeout;
    return _this;
  }

  var _proto = FrameStorageStrategy.prototype;

  _proto.getChannel = function getChannel() {
    var _this2 = this;

    if (this.channel) {
      return Promise.resolve(this.channel);
    }

    return message_channel_connect__WEBPACK_IMPORTED_MODULE_1___default()('data-capsule', {
      target: this.target,
      origin: this.origin,
      connectionMaxTimeout: this.connectionMaxTimeout,
      messageMaxTimeout: this.messageMaxTimeout
    }).then(function (channel) {
      _this2.channel = channel;
      return channel;
    });
  };

  _proto.sendCommand = function sendCommand(method, params) {
    var _this3 = this;

    var payload = {
      data: params
    };
    return this.getChannel().then(function (sendToChannel) {
      var message = [_this3.token, method, JSON.stringify(payload)].join('|');
      return sendToChannel(message).then(function (e) {
        var _greedySplit = greedy_split__WEBPACK_IMPORTED_MODULE_0___default()(e.data, '|', 2),
            status = _greedySplit[0],
            eventPayload = _greedySplit[1];

        if (status === 'reject') {
          throw Object(_utils_constants__WEBPACK_IMPORTED_MODULE_3__[/* toError */ "j"])(eventPayload);
        }

        return JSON.parse(eventPayload).data;
      });
    });
  };

  _proto.setItem = function setItem() {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    return this.sendCommand('setItem', params);
  };

  _proto.getItem = function getItem() {
    for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      params[_key2] = arguments[_key2];
    }

    return this.sendCommand('getItem', params);
  };

  _proto.removeItem = function removeItem() {
    for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      params[_key3] = arguments[_key3];
    }

    return this.sendCommand('removeItem', params);
  };

  _proto.getAllItems = function getAllItems() {
    for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      params[_key4] = arguments[_key4];
    }

    return this.sendCommand('getAllItems', params);
  };

  return FrameStorageStrategy;
}(_base_storage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);



/***/ }),
/* 13 */,
/* 14 */
/*!**************************************************!*\
  !*** ../node_modules/message-channel/connect.js ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/src/connect/connect */ 18);


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/*!*******************************************************************!*\
  !*** ../node_modules/message-channel/dist/src/connect/connect.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(/*! ../constants */ 9);

var _utils = __webpack_require__(/*! ../utils */ 7);

var _sendFactory = __webpack_require__(/*! ./send-factory */ 19);

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
/* 19 */
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

var _utils = __webpack_require__(/*! ../utils */ 7);

var _v = __webpack_require__(/*! uuid/v4 */ 20);

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
/* 20 */
/*!**********************************!*\
  !*** ../node_modules/uuid/v4.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ 21);
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ 22);

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
/* 21 */
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
/* 22 */
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
/* 47 */,
/* 48 */,
/* 49 */
/*!*************************!*\
  !*** ./global-frame.js ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* global window */
var dataCapsuleTools = __webpack_require__(/*! ./frame */ 50);

if (typeof window !== 'undefined') {
  window.DataCapsuleTools = dataCapsuleTools;
}

module.exports = dataCapsuleTools;

/***/ }),
/* 50 */
/*!******************!*\
  !*** ./frame.js ***!
  \******************/
/*! exports provided: NOT_FOUND, BaseStorage, DataCapsule, FrameStorageStrategy */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./global-frame.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _strategies_frame_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strategies/frame-storage */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameStorageStrategy", function() { return _strategies_frame_storage__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants */ 0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOT_FOUND", function() { return _utils_constants__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony import */ var _base_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-storage */ 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseStorage", function() { return _base_storage__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _data_capsule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-capsule */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataCapsule", function() { return _data_capsule__WEBPACK_IMPORTED_MODULE_3__["a"]; });







/***/ })
/******/ ]);
});
//# sourceMappingURL=frame.bundle.js.map