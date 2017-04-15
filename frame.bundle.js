/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 156);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ../~/core-js/library/modules/_core.js ***!
  \*********************************************/
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ../~/core-js/library/modules/_wks.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(/*! ./_shared */ 40)('wks')
  , uid        = __webpack_require__(/*! ./_uid */ 27)
  , Symbol     = __webpack_require__(/*! ./_global */ 2).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ../~/core-js/library/modules/_global.js ***!
  \***********************************************/
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ../~/core-js/library/modules/_export.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(/*! ./_global */ 2)
  , core      = __webpack_require__(/*! ./_core */ 0)
  , ctx       = __webpack_require__(/*! ./_ctx */ 15)
  , hide      = __webpack_require__(/*! ./_hide */ 9)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_an-object.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 12);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_object-dp.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(/*! ./_an-object */ 4)
  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 53)
  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 42)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_descriptors.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 11)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_to-iobject.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 54)
  , defined = __webpack_require__(/*! ./_defined */ 34);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ../~/core-js/library/modules/_has.js ***!
  \********************************************/
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ../~/core-js/library/modules/_hide.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(/*! ./_object-dp */ 5)
  , createDesc = __webpack_require__(/*! ./_property-desc */ 22);
module.exports = __webpack_require__(/*! ./_descriptors */ 6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_object-keys.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(/*! ./_object-keys-internal */ 59)
  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 36);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ../~/core-js/library/modules/_fails.js ***!
  \**********************************************/
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_is-object.js ***!
  \**************************************************/
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 13 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_iterators.js ***!
  \**************************************************/
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 14 */,
/* 15 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ../~/core-js/library/modules/_ctx.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 32);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 16 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./base-storage.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 18);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseStorage = function () {
  function BaseStorage() {
    var _this = this;

    (0, _classCallCheck3.default)(this, BaseStorage);

    ['setItem', 'getItem', 'removeItem', 'getAllItems'].forEach(function (method) {
      if (_this[method] === BaseStorage.prototype[method]) {
        throw new Error('BaseStorage method [' + method + '] must be overriden!');
      }
    });
  }

  (0, _createClass3.default)(BaseStorage, [{
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
/* 17 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ../~/babel-runtime/helpers/classCallCheck.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 18 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ../~/babel-runtime/helpers/createClass.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 75);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 19 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ../~/core-js/library/modules/_cof.js ***!
  \********************************************/
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 20 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_object-pie.js ***!
  \***************************************************/
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 21 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _values = __webpack_require__(/*! babel-runtime/core-js/object/values */ 77);

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errors = {
  NOT_FOUND: new Error('Key was not found in capsule'),
  SERVER_ERROR: new Error('Failed to perform operarion on server')
};

function toError(str) {
  return (0, _values2.default)(errors).find(function (err) {
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
/* 22 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ../~/core-js/library/modules/_property-desc.js ***!
  \******************************************************/
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 23 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ../~/core-js/library/modules/es6.string.iterator.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(/*! ./_string-at */ 112)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ 55)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 24 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ../~/core-js/library/modules/_library.js ***!
  \************************************************/
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 25 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ../~/core-js/library/modules/_set-to-string-tag.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ 5).f
  , has = __webpack_require__(/*! ./_has */ 8)
  , TAG = __webpack_require__(/*! ./_wks */ 1)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 26 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_to-object.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ 34);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 27 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ../~/core-js/library/modules/_uid.js ***!
  \********************************************/
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 28 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ../~/core-js/library/modules/web.dom.iterable.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ 116);
var global        = __webpack_require__(/*! ./_global */ 2)
  , hide          = __webpack_require__(/*! ./_hide */ 9)
  , Iterators     = __webpack_require__(/*! ./_iterators */ 13)
  , TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 1)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 29 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************************!*\
  !*** ../~/babel-runtime/core-js/object/get-prototype-of.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ 86), __esModule: true };

/***/ }),
/* 30 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ../~/babel-runtime/helpers/inherits.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ 76);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ 74);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 51);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 31 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ../~/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 51);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 32 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_a-function.js ***!
  \***************************************************/
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 33 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ../~/core-js/library/modules/_classof.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ 19)
  , TAG = __webpack_require__(/*! ./_wks */ 1)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 34 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ../~/core-js/library/modules/_defined.js ***!
  \************************************************/
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 35 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_dom-create.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 12)
  , document = __webpack_require__(/*! ./_global */ 2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 36 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ../~/core-js/library/modules/_enum-bug-keys.js ***!
  \******************************************************/
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 37 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ../~/core-js/library/modules/_object-create.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(/*! ./_an-object */ 4)
  , dPs         = __webpack_require__(/*! ./_object-dps */ 105)
  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 36)
  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 39)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 35)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ 52).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 38 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_object-gops.js ***!
  \****************************************************/
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 39 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_shared-key.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ 40)('keys')
  , uid    = __webpack_require__(/*! ./_uid */ 27);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 40 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ../~/core-js/library/modules/_shared.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 41 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_to-integer.js ***!
  \***************************************************/
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 42 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ../~/core-js/library/modules/_to-primitive.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 43 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_wks-define.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(/*! ./_global */ 2)
  , core           = __webpack_require__(/*! ./_core */ 0)
  , LIBRARY        = __webpack_require__(/*! ./_library */ 24)
  , wksExt         = __webpack_require__(/*! ./_wks-ext */ 44)
  , defineProperty = __webpack_require__(/*! ./_object-dp */ 5).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 44 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ../~/core-js/library/modules/_wks-ext.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ 1);

/***/ }),
/* 45 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/babel-runtime/core-js/object/assign.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 83), __esModule: true };

/***/ }),
/* 46 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ../~/babel-runtime/core-js/promise.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ 89), __esModule: true };

/***/ }),
/* 47 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_to-length.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 41)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 48 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************************!*\
  !*** ../~/core-js/library/modules/core.get-iterator-method.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(/*! ./_classof */ 33)
  , ITERATOR  = __webpack_require__(/*! ./_wks */ 1)('iterator')
  , Iterators = __webpack_require__(/*! ./_iterators */ 13);
module.exports = __webpack_require__(/*! ./_core */ 0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 49 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ../~/babel-runtime/core-js/json/stringify.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ 82), __esModule: true };

/***/ }),
/* 50 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/babel-runtime/helpers/slicedToArray.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ 73);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ 72);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 51 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ../~/babel-runtime/helpers/typeof.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ 79);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ 78);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 52 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ../~/core-js/library/modules/_html.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_global */ 2).document && document.documentElement;

/***/ }),
/* 53 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ../~/core-js/library/modules/_ie8-dom-define.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ 6) && !__webpack_require__(/*! ./_fails */ 11)(function(){
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 35)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 54 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ../~/core-js/library/modules/_iobject.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 19);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 55 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_iter-define.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(/*! ./_library */ 24)
  , $export        = __webpack_require__(/*! ./_export */ 3)
  , redefine       = __webpack_require__(/*! ./_redefine */ 60)
  , hide           = __webpack_require__(/*! ./_hide */ 9)
  , has            = __webpack_require__(/*! ./_has */ 8)
  , Iterators      = __webpack_require__(/*! ./_iterators */ 13)
  , $iterCreate    = __webpack_require__(/*! ./_iter-create */ 99)
  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 25)
  , getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 58)
  , ITERATOR       = __webpack_require__(/*! ./_wks */ 1)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 56 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_object-gopd.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(/*! ./_object-pie */ 20)
  , createDesc     = __webpack_require__(/*! ./_property-desc */ 22)
  , toIObject      = __webpack_require__(/*! ./_to-iobject */ 7)
  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 42)
  , has            = __webpack_require__(/*! ./_has */ 8)
  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 53)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ 6) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 57 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_object-gopn.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(/*! ./_object-keys-internal */ 59)
  , hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 58 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_object-gpo.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(/*! ./_has */ 8)
  , toObject    = __webpack_require__(/*! ./_to-object */ 26)
  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 39)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 59 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************************!*\
  !*** ../~/core-js/library/modules/_object-keys-internal.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(/*! ./_has */ 8)
  , toIObject    = __webpack_require__(/*! ./_to-iobject */ 7)
  , arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 94)(false)
  , IE_PROTO     = __webpack_require__(/*! ./_shared-key */ 39)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 60 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ../~/core-js/library/modules/_redefine.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ 9);

/***/ }),
/* 61 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ../~/core-js/library/modules/_task.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(/*! ./_ctx */ 15)
  , invoke             = __webpack_require__(/*! ./_invoke */ 97)
  , html               = __webpack_require__(/*! ./_html */ 52)
  , cel                = __webpack_require__(/*! ./_dom-create */ 35)
  , global             = __webpack_require__(/*! ./_global */ 2)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(/*! ./_cof */ 19)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 62 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.to-string.js ***!
  \************************************************************/
/***/ (function(module, exports) {



/***/ }),
/* 63 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ../~/core-js/library/modules/_is-array-iter.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(/*! ./_iterators */ 13)
  , ITERATOR   = __webpack_require__(/*! ./_wks */ 1)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 64 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_iter-call.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ 4);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 65 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_iter-detect.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(/*! ./_wks */ 1)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 66 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_object-sap.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ 3)
  , core    = __webpack_require__(/*! ./_core */ 0)
  , fails   = __webpack_require__(/*! ./_fails */ 11);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 67 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ../~/greedy-split/dist/src/index.js ***!
  \*******************************************/
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
/* 68 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./data-capsule.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 31);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 30);

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 45);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseStorage = __webpack_require__(/*! ./base-storage */ 16);

function validateNamespace(options) {
  if (!options.namespace) {
    throw new Error('namespace is required');
  } else if (typeof options.namespace !== 'string') {
    throw new Error('namespace should be a string');
  }
}

function buildValidadateOptions(capsuleOptions, options) {
  options = (0, _assign2.default)({}, capsuleOptions, options);
  validateNamespace(options);
  return options;
}

var DataCapsule = function (_BaseStorage) {
  (0, _inherits3.default)(DataCapsule, _BaseStorage);

  function DataCapsule(_ref) {
    var strategy = _ref.strategy,
        namespace = _ref.namespace,
        scope = _ref.scope;
    (0, _classCallCheck3.default)(this, DataCapsule);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DataCapsule.__proto__ || (0, _getPrototypeOf2.default)(DataCapsule)).call(this));

    _this.storageStrategy = BaseStorage.verify(strategy);
    _this._options = { namespace: namespace, scope: scope };
    return _this;
  }

  (0, _createClass3.default)(DataCapsule, [{
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
/* 69 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./strategies/frame-storage.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global window */


var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 31);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 30);

var _inherits3 = _interopRequireDefault(_inherits2);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 50);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 46);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 49);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var greedySplit = __webpack_require__(/*! greedy-split */ 67);
var BaseStorage = __webpack_require__(/*! ../base-storage */ 16);

var _require = __webpack_require__(/*! ../utils/constants */ 21),
    STORAGE_PREFIX = _require.STORAGE_PREFIX,
    toError = _require.toError;

var pending = {};

function sendCommand(method, params, options) {
  var id = Date.now() + '-' + Math.random();
  var message = [STORAGE_PREFIX, options.token, id, method, (0, _stringify2.default)(params)].join('|');
  options.target.postMessage(message, options.origin);
  return new _promise2.default(function (resolve, _reject) {
    pending[id] = { resolve: resolve, reject: function reject(reason) {
        return _reject(toError(reason));
      } };
  });
}

function readCommands(options) {
  window.addEventListener('message', function (e) {
    var _greedySplit = greedySplit(e.data, '|', 5),
        _greedySplit2 = (0, _slicedToArray3.default)(_greedySplit, 5),
        target = _greedySplit2[0],
        token = _greedySplit2[1],
        id = _greedySplit2[2],
        method = _greedySplit2[3],
        params = _greedySplit2[4];

    if (target === STORAGE_PREFIX + 'Done' && token === options.token) {
      pending[id][method](params ? JSON.parse(params) : undefined);
      delete pending[id];
    }
  }, true);
}

var FrameStorageStrategy = function (_BaseStorage) {
  (0, _inherits3.default)(FrameStorageStrategy, _BaseStorage);

  function FrameStorageStrategy(target, origin, token) {
    (0, _classCallCheck3.default)(this, FrameStorageStrategy);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FrameStorageStrategy.__proto__ || (0, _getPrototypeOf2.default)(FrameStorageStrategy)).call(this));

    _this._options = { target: target, origin: origin, token: token };
    readCommands(_this._options);
    return _this;
  }

  (0, _createClass3.default)(FrameStorageStrategy, [{
    key: 'setItem',
    value: function setItem() {
      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      return sendCommand('setItem', params, this._options);
    }
  }, {
    key: 'getItem',
    value: function getItem() {
      for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }

      return sendCommand('getItem', params, this._options);
    }
  }, {
    key: 'removeItem',
    value: function removeItem() {
      for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
      }

      return sendCommand('removeItem', params, this._options);
    }
  }, {
    key: 'getAllItems',
    value: function getAllItems() {
      for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        params[_key4] = arguments[_key4];
      }

      return sendCommand('getAllItems', params, this._options);
    }
  }]);
  return FrameStorageStrategy;
}(BaseStorage);

module.exports = FrameStorageStrategy;

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/babel-runtime/core-js/get-iterator.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 80), __esModule: true };

/***/ }),
/* 73 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ../~/babel-runtime/core-js/is-iterable.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ 81), __esModule: true };

/***/ }),
/* 74 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/babel-runtime/core-js/object/create.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 84), __esModule: true };

/***/ }),
/* 75 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ../~/babel-runtime/core-js/object/define-property.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 85), __esModule: true };

/***/ }),
/* 76 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************************!*\
  !*** ../~/babel-runtime/core-js/object/set-prototype-of.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 87), __esModule: true };

/***/ }),
/* 77 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/babel-runtime/core-js/object/values.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/values */ 88), __esModule: true };

/***/ }),
/* 78 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ../~/babel-runtime/core-js/symbol.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 90), __esModule: true };

/***/ }),
/* 79 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ../~/babel-runtime/core-js/symbol/iterator.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ 91), __esModule: true };

/***/ }),
/* 80 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ../~/core-js/library/fn/get-iterator.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ 28);
__webpack_require__(/*! ../modules/es6.string.iterator */ 23);
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 114);

/***/ }),
/* 81 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ../~/core-js/library/fn/is-iterable.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ 28);
__webpack_require__(/*! ../modules/es6.string.iterator */ 23);
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ 115);

/***/ }),
/* 82 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ../~/core-js/library/fn/json/stringify.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(/*! ../../modules/_core */ 0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 83 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ../~/core-js/library/fn/object/assign.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ 117);
module.exports = __webpack_require__(/*! ../../modules/_core */ 0).Object.assign;

/***/ }),
/* 84 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ../~/core-js/library/fn/object/create.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ 118);
var $Object = __webpack_require__(/*! ../../modules/_core */ 0).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 85 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ../~/core-js/library/fn/object/define-property.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ 119);
var $Object = __webpack_require__(/*! ../../modules/_core */ 0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 86 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ../~/core-js/library/fn/object/get-prototype-of.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ 120);
module.exports = __webpack_require__(/*! ../../modules/_core */ 0).Object.getPrototypeOf;

/***/ }),
/* 87 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ../~/core-js/library/fn/object/set-prototype-of.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 121);
module.exports = __webpack_require__(/*! ../../modules/_core */ 0).Object.setPrototypeOf;

/***/ }),
/* 88 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ../~/core-js/library/fn/object/values.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ 124);
module.exports = __webpack_require__(/*! ../../modules/_core */ 0).Object.values;

/***/ }),
/* 89 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ../~/core-js/library/fn/promise.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ 62);
__webpack_require__(/*! ../modules/es6.string.iterator */ 23);
__webpack_require__(/*! ../modules/web.dom.iterable */ 28);
__webpack_require__(/*! ../modules/es6.promise */ 122);
module.exports = __webpack_require__(/*! ../modules/_core */ 0).Promise;

/***/ }),
/* 90 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ../~/core-js/library/fn/symbol/index.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ 123);
__webpack_require__(/*! ../../modules/es6.object.to-string */ 62);
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ 125);
__webpack_require__(/*! ../../modules/es7.symbol.observable */ 126);
module.exports = __webpack_require__(/*! ../../modules/_core */ 0).Symbol;

/***/ }),
/* 91 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/fn/symbol/iterator.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ 23);
__webpack_require__(/*! ../../modules/web.dom.iterable */ 28);
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ 44).f('iterator');

/***/ }),
/* 92 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ../~/core-js/library/modules/_add-to-unscopables.js ***!
  \***********************************************************/
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 93 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_an-instance.js ***!
  \****************************************************/
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 94 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ../~/core-js/library/modules/_array-includes.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ 7)
  , toLength  = __webpack_require__(/*! ./_to-length */ 47)
  , toIndex   = __webpack_require__(/*! ./_to-index */ 113);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 95 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_enum-keys.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ 10)
  , gOPS    = __webpack_require__(/*! ./_object-gops */ 38)
  , pIE     = __webpack_require__(/*! ./_object-pie */ 20);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 96 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ../~/core-js/library/modules/_for-of.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(/*! ./_ctx */ 15)
  , call        = __webpack_require__(/*! ./_iter-call */ 64)
  , isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 63)
  , anObject    = __webpack_require__(/*! ./_an-object */ 4)
  , toLength    = __webpack_require__(/*! ./_to-length */ 47)
  , getIterFn   = __webpack_require__(/*! ./core.get-iterator-method */ 48)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 97 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ../~/core-js/library/modules/_invoke.js ***!
  \***********************************************/
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 98 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ../~/core-js/library/modules/_is-array.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ 19);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 99 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_iter-create.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(/*! ./_object-create */ 37)
  , descriptor     = __webpack_require__(/*! ./_property-desc */ 22)
  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 25)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ 9)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 1)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 100 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_iter-step.js ***!
  \**************************************************/
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 101 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ../~/core-js/library/modules/_keyof.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(/*! ./_object-keys */ 10)
  , toIObject = __webpack_require__(/*! ./_to-iobject */ 7);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 102 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ../~/core-js/library/modules/_meta.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(/*! ./_uid */ 27)('meta')
  , isObject = __webpack_require__(/*! ./_is-object */ 12)
  , has      = __webpack_require__(/*! ./_has */ 8)
  , setDesc  = __webpack_require__(/*! ./_object-dp */ 5).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ 11)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 103 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_microtask.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(/*! ./_global */ 2)
  , macrotask = __webpack_require__(/*! ./_task */ 61).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(/*! ./_cof */ 19)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 104 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ../~/core-js/library/modules/_object-assign.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(/*! ./_object-keys */ 10)
  , gOPS     = __webpack_require__(/*! ./_object-gops */ 38)
  , pIE      = __webpack_require__(/*! ./_object-pie */ 20)
  , toObject = __webpack_require__(/*! ./_to-object */ 26)
  , IObject  = __webpack_require__(/*! ./_iobject */ 54)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ 11)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 105 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_object-dps.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(/*! ./_object-dp */ 5)
  , anObject = __webpack_require__(/*! ./_an-object */ 4)
  , getKeys  = __webpack_require__(/*! ./_object-keys */ 10);

module.exports = __webpack_require__(/*! ./_descriptors */ 6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 106 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ../~/core-js/library/modules/_object-gopn-ext.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ 7)
  , gOPN      = __webpack_require__(/*! ./_object-gopn */ 57).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 107 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ../~/core-js/library/modules/_object-to-array.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(/*! ./_object-keys */ 10)
  , toIObject = __webpack_require__(/*! ./_to-iobject */ 7)
  , isEnum    = __webpack_require__(/*! ./_object-pie */ 20).f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

/***/ }),
/* 108 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ../~/core-js/library/modules/_redefine-all.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ 9);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 109 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_set-proto.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ 12)
  , anObject = __webpack_require__(/*! ./_an-object */ 4);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(/*! ./_ctx */ 15)(Function.call, __webpack_require__(/*! ./_object-gopd */ 56).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 110 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_set-species.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(/*! ./_global */ 2)
  , core        = __webpack_require__(/*! ./_core */ 0)
  , dP          = __webpack_require__(/*! ./_object-dp */ 5)
  , DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 6)
  , SPECIES     = __webpack_require__(/*! ./_wks */ 1)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 111 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ../~/core-js/library/modules/_species-constructor.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(/*! ./_an-object */ 4)
  , aFunction = __webpack_require__(/*! ./_a-function */ 32)
  , SPECIES   = __webpack_require__(/*! ./_wks */ 1)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 112 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_string-at.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 41)
  , defined   = __webpack_require__(/*! ./_defined */ 34);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 113 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ../~/core-js/library/modules/_to-index.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 41)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 114 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ../~/core-js/library/modules/core.get-iterator.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 4)
  , get      = __webpack_require__(/*! ./core.get-iterator-method */ 48);
module.exports = __webpack_require__(/*! ./_core */ 0).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 115 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ../~/core-js/library/modules/core.is-iterable.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(/*! ./_classof */ 33)
  , ITERATOR  = __webpack_require__(/*! ./_wks */ 1)('iterator')
  , Iterators = __webpack_require__(/*! ./_iterators */ 13);
module.exports = __webpack_require__(/*! ./_core */ 0).isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};

/***/ }),
/* 116 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ../~/core-js/library/modules/es6.array.iterator.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 92)
  , step             = __webpack_require__(/*! ./_iter-step */ 100)
  , Iterators        = __webpack_require__(/*! ./_iterators */ 13)
  , toIObject        = __webpack_require__(/*! ./_to-iobject */ 7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ 55)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 117 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.assign.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ 3);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(/*! ./_object-assign */ 104)});

/***/ }),
/* 118 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.create.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 3)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(/*! ./_object-create */ 37)});

/***/ }),
/* 119 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.define-property.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 6), 'Object', {defineProperty: __webpack_require__(/*! ./_object-dp */ 5).f});

/***/ }),
/* 120 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(/*! ./_to-object */ 26)
  , $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 58);

__webpack_require__(/*! ./_object-sap */ 66)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 121 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ 3);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(/*! ./_set-proto */ 109).set});

/***/ }),
/* 122 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/es6.promise.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(/*! ./_library */ 24)
  , global             = __webpack_require__(/*! ./_global */ 2)
  , ctx                = __webpack_require__(/*! ./_ctx */ 15)
  , classof            = __webpack_require__(/*! ./_classof */ 33)
  , $export            = __webpack_require__(/*! ./_export */ 3)
  , isObject           = __webpack_require__(/*! ./_is-object */ 12)
  , aFunction          = __webpack_require__(/*! ./_a-function */ 32)
  , anInstance         = __webpack_require__(/*! ./_an-instance */ 93)
  , forOf              = __webpack_require__(/*! ./_for-of */ 96)
  , speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 111)
  , task               = __webpack_require__(/*! ./_task */ 61).set
  , microtask          = __webpack_require__(/*! ./_microtask */ 103)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ 1)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ 108)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(/*! ./_set-to-string-tag */ 25)($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ 110)(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ 0)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ 65)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 123 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/es6.symbol.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(/*! ./_global */ 2)
  , has            = __webpack_require__(/*! ./_has */ 8)
  , DESCRIPTORS    = __webpack_require__(/*! ./_descriptors */ 6)
  , $export        = __webpack_require__(/*! ./_export */ 3)
  , redefine       = __webpack_require__(/*! ./_redefine */ 60)
  , META           = __webpack_require__(/*! ./_meta */ 102).KEY
  , $fails         = __webpack_require__(/*! ./_fails */ 11)
  , shared         = __webpack_require__(/*! ./_shared */ 40)
  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 25)
  , uid            = __webpack_require__(/*! ./_uid */ 27)
  , wks            = __webpack_require__(/*! ./_wks */ 1)
  , wksExt         = __webpack_require__(/*! ./_wks-ext */ 44)
  , wksDefine      = __webpack_require__(/*! ./_wks-define */ 43)
  , keyOf          = __webpack_require__(/*! ./_keyof */ 101)
  , enumKeys       = __webpack_require__(/*! ./_enum-keys */ 95)
  , isArray        = __webpack_require__(/*! ./_is-array */ 98)
  , anObject       = __webpack_require__(/*! ./_an-object */ 4)
  , toIObject      = __webpack_require__(/*! ./_to-iobject */ 7)
  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 42)
  , createDesc     = __webpack_require__(/*! ./_property-desc */ 22)
  , _create        = __webpack_require__(/*! ./_object-create */ 37)
  , gOPNExt        = __webpack_require__(/*! ./_object-gopn-ext */ 106)
  , $GOPD          = __webpack_require__(/*! ./_object-gopd */ 56)
  , $DP            = __webpack_require__(/*! ./_object-dp */ 5)
  , $keys          = __webpack_require__(/*! ./_object-keys */ 10)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ 57).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ 20).f  = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ 38).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(/*! ./_library */ 24)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 124 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ../~/core-js/library/modules/es7.object.values.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ 3)
  , $values = __webpack_require__(/*! ./_object-to-array */ 107)(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});

/***/ }),
/* 125 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ../~/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 43)('asyncIterator');

/***/ }),
/* 126 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************************!*\
  !*** ../~/core-js/library/modules/es7.symbol.observable.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 43)('observable');

/***/ }),
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */
/* unknown exports provided */
/* all exports used */
/*!******************!*\
  !*** ./frame.js ***!
  \******************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FrameStorageStrategy = __webpack_require__(/*! ./strategies/frame-storage */ 69);

var _require = __webpack_require__(/*! ./utils/constants */ 21),
    NOT_FOUND = _require.NOT_FOUND;

var BaseStorage = __webpack_require__(/*! ./base-storage */ 16);
var DataCapsule = __webpack_require__(/*! ./data-capsule */ 68);

module.exports = {
  NOT_FOUND: NOT_FOUND,
  BaseStorage: BaseStorage,
  DataCapsule: DataCapsule,
  FrameStorageStrategy: FrameStorageStrategy
};

/***/ })
/******/ ]);
//# sourceMappingURL=frame.bundle.js.map