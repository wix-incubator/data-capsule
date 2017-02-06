/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./global.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/* global window */
	'use strict';
	
	window.DataCapsuleTools = __webpack_require__(/*! ./index */ 155);

/***/ },
/* 1 */
/*!*********************************************!*\
  !*** ../~/core-js/library/modules/_core.js ***!
  \*********************************************/
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 2 */
/*!********************************************!*\
  !*** ../~/core-js/library/modules/_wks.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(/*! ./_shared */ 41)('wks')
	  , uid        = __webpack_require__(/*! ./_uid */ 28)
	  , Symbol     = __webpack_require__(/*! ./_global */ 3).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 3 */
/*!***********************************************!*\
  !*** ../~/core-js/library/modules/_global.js ***!
  \***********************************************/
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 4 */
/*!***********************************************!*\
  !*** ../~/core-js/library/modules/_export.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./_global */ 3)
	  , core      = __webpack_require__(/*! ./_core */ 1)
	  , ctx       = __webpack_require__(/*! ./_ctx */ 16)
	  , hide      = __webpack_require__(/*! ./_hide */ 10)
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

/***/ },
/* 5 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_an-object.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 6 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_object-dp.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(/*! ./_an-object */ 5)
	  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 54)
	  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 43)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(/*! ./_descriptors */ 7) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

/***/ },
/* 7 */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_descriptors.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./_fails */ 12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 8 */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_to-iobject.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./_iobject */ 55)
	  , defined = __webpack_require__(/*! ./_defined */ 35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 9 */
/*!********************************************!*\
  !*** ../~/core-js/library/modules/_has.js ***!
  \********************************************/
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 10 */
/*!*********************************************!*\
  !*** ../~/core-js/library/modules/_hide.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(/*! ./_object-dp */ 6)
	  , createDesc = __webpack_require__(/*! ./_property-desc */ 23);
	module.exports = __webpack_require__(/*! ./_descriptors */ 7) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_object-keys.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(/*! ./_object-keys-internal */ 60)
	  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 37);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 12 */
/*!**********************************************!*\
  !*** ../~/core-js/library/modules/_fails.js ***!
  \**********************************************/
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 13 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_is-object.js ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_iterators.js ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 15 */
/*!*******************************!*\
  !*** ../~/axios/lib/utils.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(/*! ./helpers/bind */ 132);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ },
/* 16 */
/*!********************************************!*\
  !*** ../~/core-js/library/modules/_ctx.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./_a-function */ 33);
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

/***/ },
/* 17 */
/*!*************************!*\
  !*** ./base-storage.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 19);
	
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

/***/ },
/* 18 */
/*!****************************************************!*\
  !*** ../~/babel-runtime/helpers/classCallCheck.js ***!
  \****************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 19 */
/*!*************************************************!*\
  !*** ../~/babel-runtime/helpers/createClass.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 76);
	
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

/***/ },
/* 20 */
/*!********************************************!*\
  !*** ../~/core-js/library/modules/_cof.js ***!
  \********************************************/
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 21 */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_object-pie.js ***!
  \***************************************************/
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 22 */
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _values = __webpack_require__(/*! babel-runtime/core-js/object/values */ 78);
	
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

/***/ },
/* 23 */
/*!******************************************************!*\
  !*** ../~/core-js/library/modules/_property-desc.js ***!
  \******************************************************/
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 24 */
/*!***********************************************************!*\
  !*** ../~/core-js/library/modules/es6.string.iterator.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(/*! ./_string-at */ 113)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./_iter-define */ 56)(String, 'String', function(iterated){
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

/***/ },
/* 25 */
/*!************************************************!*\
  !*** ../~/core-js/library/modules/_library.js ***!
  \************************************************/
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 26 */
/*!**********************************************************!*\
  !*** ../~/core-js/library/modules/_set-to-string-tag.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(/*! ./_object-dp */ 6).f
	  , has = __webpack_require__(/*! ./_has */ 9)
	  , TAG = __webpack_require__(/*! ./_wks */ 2)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 27 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_to-object.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./_defined */ 35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 28 */
/*!********************************************!*\
  !*** ../~/core-js/library/modules/_uid.js ***!
  \********************************************/
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 29 */
/*!********************************************************!*\
  !*** ../~/core-js/library/modules/web.dom.iterable.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./es6.array.iterator */ 117);
	var global        = __webpack_require__(/*! ./_global */ 3)
	  , hide          = __webpack_require__(/*! ./_hide */ 10)
	  , Iterators     = __webpack_require__(/*! ./_iterators */ 14)
	  , TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 2)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 30 */
/*!*************************************************************!*\
  !*** ../~/babel-runtime/core-js/object/get-prototype-of.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ 87), __esModule: true };

/***/ },
/* 31 */
/*!**********************************************!*\
  !*** ../~/babel-runtime/helpers/inherits.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ 77);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(/*! ../core-js/object/create */ 75);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 52);
	
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

/***/ },
/* 32 */
/*!***************************************************************!*\
  !*** ../~/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 52);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 33 */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_a-function.js ***!
  \***************************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 34 */
/*!************************************************!*\
  !*** ../~/core-js/library/modules/_classof.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./_cof */ 20)
	  , TAG = __webpack_require__(/*! ./_wks */ 2)('toStringTag')
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

/***/ },
/* 35 */
/*!************************************************!*\
  !*** ../~/core-js/library/modules/_defined.js ***!
  \************************************************/
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_dom-create.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 13)
	  , document = __webpack_require__(/*! ./_global */ 3).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 37 */
/*!******************************************************!*\
  !*** ../~/core-js/library/modules/_enum-bug-keys.js ***!
  \******************************************************/
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 38 */
/*!******************************************************!*\
  !*** ../~/core-js/library/modules/_object-create.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(/*! ./_an-object */ 5)
	  , dPs         = __webpack_require__(/*! ./_object-dps */ 106)
	  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 37)
	  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(/*! ./_dom-create */ 36)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(/*! ./_html */ 53).appendChild(iframe);
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


/***/ },
/* 39 */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_object-gops.js ***!
  \****************************************************/
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 40 */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_shared-key.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(/*! ./_shared */ 41)('keys')
	  , uid    = __webpack_require__(/*! ./_uid */ 28);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 41 */
/*!***********************************************!*\
  !*** ../~/core-js/library/modules/_shared.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./_global */ 3)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 42 */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_to-integer.js ***!
  \***************************************************/
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 43 */
/*!*****************************************************!*\
  !*** ../~/core-js/library/modules/_to-primitive.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(/*! ./_is-object */ 13);
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

/***/ },
/* 44 */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_wks-define.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(/*! ./_global */ 3)
	  , core           = __webpack_require__(/*! ./_core */ 1)
	  , LIBRARY        = __webpack_require__(/*! ./_library */ 25)
	  , wksExt         = __webpack_require__(/*! ./_wks-ext */ 45)
	  , defineProperty = __webpack_require__(/*! ./_object-dp */ 6).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 45 */
/*!************************************************!*\
  !*** ../~/core-js/library/modules/_wks-ext.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(/*! ./_wks */ 2);

/***/ },
/* 46 */
/*!***************************************************!*\
  !*** ../~/babel-runtime/core-js/object/assign.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 84), __esModule: true };

/***/ },
/* 47 */
/*!*********************************************!*\
  !*** ../~/babel-runtime/core-js/promise.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ 90), __esModule: true };

/***/ },
/* 48 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_to-length.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./_to-integer */ 42)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 49 */
/*!****************************************************************!*\
  !*** ../~/core-js/library/modules/core.get-iterator-method.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./_classof */ 34)
	  , ITERATOR  = __webpack_require__(/*! ./_wks */ 2)('iterator')
	  , Iterators = __webpack_require__(/*! ./_iterators */ 14);
	module.exports = __webpack_require__(/*! ./_core */ 1).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 50 */
/*!****************************************************!*\
  !*** ../~/babel-runtime/core-js/json/stringify.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ 83), __esModule: true };

/***/ },
/* 51 */
/*!***************************************************!*\
  !*** ../~/babel-runtime/helpers/slicedToArray.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ 74);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ 73);
	
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

/***/ },
/* 52 */
/*!********************************************!*\
  !*** ../~/babel-runtime/helpers/typeof.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ 80);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(/*! ../core-js/symbol */ 79);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 53 */
/*!*********************************************!*\
  !*** ../~/core-js/library/modules/_html.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./_global */ 3).document && document.documentElement;

/***/ },
/* 54 */
/*!*******************************************************!*\
  !*** ../~/core-js/library/modules/_ie8-dom-define.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(/*! ./_descriptors */ 7) && !__webpack_require__(/*! ./_fails */ 12)(function(){
	  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 36)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 55 */
/*!************************************************!*\
  !*** ../~/core-js/library/modules/_iobject.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./_cof */ 20);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 56 */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_iter-define.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(/*! ./_library */ 25)
	  , $export        = __webpack_require__(/*! ./_export */ 4)
	  , redefine       = __webpack_require__(/*! ./_redefine */ 61)
	  , hide           = __webpack_require__(/*! ./_hide */ 10)
	  , has            = __webpack_require__(/*! ./_has */ 9)
	  , Iterators      = __webpack_require__(/*! ./_iterators */ 14)
	  , $iterCreate    = __webpack_require__(/*! ./_iter-create */ 100)
	  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 26)
	  , getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59)
	  , ITERATOR       = __webpack_require__(/*! ./_wks */ 2)('iterator')
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

/***/ },
/* 57 */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_object-gopd.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(/*! ./_object-pie */ 21)
	  , createDesc     = __webpack_require__(/*! ./_property-desc */ 23)
	  , toIObject      = __webpack_require__(/*! ./_to-iobject */ 8)
	  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 43)
	  , has            = __webpack_require__(/*! ./_has */ 9)
	  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 54)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(/*! ./_descriptors */ 7) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 58 */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_object-gopn.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(/*! ./_object-keys-internal */ 60)
	  , hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 37).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 59 */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_object-gpo.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(/*! ./_has */ 9)
	  , toObject    = __webpack_require__(/*! ./_to-object */ 27)
	  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 40)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 60 */
/*!*************************************************************!*\
  !*** ../~/core-js/library/modules/_object-keys-internal.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(/*! ./_has */ 9)
	  , toIObject    = __webpack_require__(/*! ./_to-iobject */ 8)
	  , arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 95)(false)
	  , IE_PROTO     = __webpack_require__(/*! ./_shared-key */ 40)('IE_PROTO');
	
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

/***/ },
/* 61 */
/*!*************************************************!*\
  !*** ../~/core-js/library/modules/_redefine.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./_hide */ 10);

/***/ },
/* 62 */
/*!*********************************************!*\
  !*** ../~/core-js/library/modules/_task.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(/*! ./_ctx */ 16)
	  , invoke             = __webpack_require__(/*! ./_invoke */ 98)
	  , html               = __webpack_require__(/*! ./_html */ 53)
	  , cel                = __webpack_require__(/*! ./_dom-create */ 36)
	  , global             = __webpack_require__(/*! ./_global */ 3)
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
	  if(__webpack_require__(/*! ./_cof */ 20)(process) == 'process'){
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

/***/ },
/* 63 */
/*!************************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.to-string.js ***!
  \************************************************************/
/***/ function(module, exports) {



/***/ },
/* 64 */
/*!******************************************************!*\
  !*** ../~/core-js/library/modules/_is-array-iter.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(/*! ./_iterators */ 14)
	  , ITERATOR   = __webpack_require__(/*! ./_wks */ 2)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 65 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_iter-call.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(/*! ./_an-object */ 5);
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

/***/ },
/* 66 */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_iter-detect.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(/*! ./_wks */ 2)('iterator')
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

/***/ },
/* 67 */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_object-sap.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(/*! ./_export */ 4)
	  , core    = __webpack_require__(/*! ./_core */ 1)
	  , fails   = __webpack_require__(/*! ./_fails */ 12);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 68 */
/*!*******************************************!*\
  !*** ../~/greedy-split/dist/src/index.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
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


/***/ },
/* 69 */
/*!**********************************!*\
  !*** ../~/axios/lib/defaults.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(/*! ./utils */ 15);
	var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ 152);
	
	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(/*! ./adapters/xhr */ 128);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(/*! ./adapters/http */ 128);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 136)))

/***/ },
/* 70 */
/*!*************************!*\
  !*** ./data-capsule.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 30);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 32);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 31);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 46);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BaseStorage = __webpack_require__(/*! ./base-storage */ 17);
	
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

/***/ },
/* 71 */
/*!*************************************!*\
  !*** ./strategies/frame-storage.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* global window */
	'use strict';
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 30);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 32);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 31);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 51);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 47);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 50);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var greedySplit = __webpack_require__(/*! greedy-split */ 68);
	var BaseStorage = __webpack_require__(/*! ../base-storage */ 17);
	
	var _require = __webpack_require__(/*! ../utils/constants */ 22),
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

/***/ },
/* 72 */
/*!*************************************!*\
  !*** ./strategies/local-storage.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* global localStorage */
	'use strict';
	
	var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 47);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 30);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 32);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 31);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 50);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BaseStorage = __webpack_require__(/*! ../base-storage */ 17);
	var localStorageCleaner = __webpack_require__(/*! ../utils/local-storage-cleaner */ 159);
	
	var _require = __webpack_require__(/*! ../utils/constants */ 22),
	    STORAGE_PREFIX = _require.STORAGE_PREFIX,
	    PREFIX_SEPARATOR = _require.PREFIX_SEPARATOR,
	    KEY_SEPARATOR = _require.KEY_SEPARATOR,
	    NOT_FOUND = _require.NOT_FOUND;
	
	var _require2 = __webpack_require__(/*! ../utils/record-utils */ 133),
	    getCacheRecords = _require2.getCacheRecords,
	    deserializeData = _require2.deserializeData,
	    isExpired = _require2.isExpired;
	
	function getCacheKey(key, options) {
	  return getCachePrefix(options) + key;
	}
	
	function getCachePrefix(options) {
	  return [STORAGE_PREFIX, options.namespace, options.scope && (0, _stringify2.default)(options.scope)].filter(function (x) {
	    return x;
	  }).join(PREFIX_SEPARATOR) + KEY_SEPARATOR;
	}
	
	function serializeData(value, options) {
	  return (0, _stringify2.default)({
	    createdAt: Date.now(),
	    expiration: options.expiration,
	    value: value
	  });
	}
	
	function updateAccessTime(fullKey, data) {
	  var expiration = data.expiration;
	  localStorage.setItem(fullKey, serializeData(data.value, { expiration: expiration }));
	}
	
	var LocalStorageStrategy = function (_BaseStorage) {
	  (0, _inherits3.default)(LocalStorageStrategy, _BaseStorage);
	
	  function LocalStorageStrategy() {
	    (0, _classCallCheck3.default)(this, LocalStorageStrategy);
	    return (0, _possibleConstructorReturn3.default)(this, (LocalStorageStrategy.__proto__ || (0, _getPrototypeOf2.default)(LocalStorageStrategy)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(LocalStorageStrategy, [{
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
	      return _promise2.default.resolve();
	    }
	  }, {
	    key: 'getItem',
	    value: function getItem(key, options) {
	      var fullKey = getCacheKey(key, options);
	      var data = localStorage.getItem(fullKey);
	      data = data && deserializeData(data);
	      if (data && !isExpired(data)) {
	        updateAccessTime(fullKey, data);
	        return _promise2.default.resolve(data.value);
	      } else {
	        return _promise2.default.reject(NOT_FOUND);
	      }
	    }
	  }, {
	    key: 'removeItem',
	    value: function removeItem(key, options) {
	      key = getCacheKey(key, options);
	      localStorage.removeItem(key);
	      return _promise2.default.resolve();
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
	      return _promise2.default.resolve(items);
	    }
	  }]);
	  return LocalStorageStrategy;
	}(BaseStorage);
	
	module.exports = LocalStorageStrategy;

/***/ },
/* 73 */
/*!**************************************************!*\
  !*** ../~/babel-runtime/core-js/get-iterator.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 81), __esModule: true };

/***/ },
/* 74 */
/*!*************************************************!*\
  !*** ../~/babel-runtime/core-js/is-iterable.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ 82), __esModule: true };

/***/ },
/* 75 */
/*!***************************************************!*\
  !*** ../~/babel-runtime/core-js/object/create.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 85), __esModule: true };

/***/ },
/* 76 */
/*!************************************************************!*\
  !*** ../~/babel-runtime/core-js/object/define-property.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 86), __esModule: true };

/***/ },
/* 77 */
/*!*************************************************************!*\
  !*** ../~/babel-runtime/core-js/object/set-prototype-of.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 88), __esModule: true };

/***/ },
/* 78 */
/*!***************************************************!*\
  !*** ../~/babel-runtime/core-js/object/values.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/values */ 89), __esModule: true };

/***/ },
/* 79 */
/*!********************************************!*\
  !*** ../~/babel-runtime/core-js/symbol.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 91), __esModule: true };

/***/ },
/* 80 */
/*!*****************************************************!*\
  !*** ../~/babel-runtime/core-js/symbol/iterator.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ 92), __esModule: true };

/***/ },
/* 81 */
/*!***********************************************!*\
  !*** ../~/core-js/library/fn/get-iterator.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 29);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 24);
	module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 115);

/***/ },
/* 82 */
/*!**********************************************!*\
  !*** ../~/core-js/library/fn/is-iterable.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 29);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 24);
	module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ 116);

/***/ },
/* 83 */
/*!*************************************************!*\
  !*** ../~/core-js/library/fn/json/stringify.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(/*! ../../modules/_core */ 1)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 84 */
/*!************************************************!*\
  !*** ../~/core-js/library/fn/object/assign.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.assign */ 118);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 1).Object.assign;

/***/ },
/* 85 */
/*!************************************************!*\
  !*** ../~/core-js/library/fn/object/create.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.create */ 119);
	var $Object = __webpack_require__(/*! ../../modules/_core */ 1).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 86 */
/*!*********************************************************!*\
  !*** ../~/core-js/library/fn/object/define-property.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.define-property */ 120);
	var $Object = __webpack_require__(/*! ../../modules/_core */ 1).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 87 */
/*!**********************************************************!*\
  !*** ../~/core-js/library/fn/object/get-prototype-of.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ 121);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 1).Object.getPrototypeOf;

/***/ },
/* 88 */
/*!**********************************************************!*\
  !*** ../~/core-js/library/fn/object/set-prototype-of.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 122);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 1).Object.setPrototypeOf;

/***/ },
/* 89 */
/*!************************************************!*\
  !*** ../~/core-js/library/fn/object/values.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es7.object.values */ 125);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 1).Object.values;

/***/ },
/* 90 */
/*!******************************************!*\
  !*** ../~/core-js/library/fn/promise.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/es6.object.to-string */ 63);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 24);
	__webpack_require__(/*! ../modules/web.dom.iterable */ 29);
	__webpack_require__(/*! ../modules/es6.promise */ 123);
	module.exports = __webpack_require__(/*! ../modules/_core */ 1).Promise;

/***/ },
/* 91 */
/*!***********************************************!*\
  !*** ../~/core-js/library/fn/symbol/index.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.symbol */ 124);
	__webpack_require__(/*! ../../modules/es6.object.to-string */ 63);
	__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ 126);
	__webpack_require__(/*! ../../modules/es7.symbol.observable */ 127);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 1).Symbol;

/***/ },
/* 92 */
/*!**************************************************!*\
  !*** ../~/core-js/library/fn/symbol/iterator.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.string.iterator */ 24);
	__webpack_require__(/*! ../../modules/web.dom.iterable */ 29);
	module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ 45).f('iterator');

/***/ },
/* 93 */
/*!***********************************************************!*\
  !*** ../~/core-js/library/modules/_add-to-unscopables.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 94 */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_an-instance.js ***!
  \****************************************************/
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 95 */
/*!*******************************************************!*\
  !*** ../~/core-js/library/modules/_array-includes.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 8)
	  , toLength  = __webpack_require__(/*! ./_to-length */ 48)
	  , toIndex   = __webpack_require__(/*! ./_to-index */ 114);
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

/***/ },
/* 96 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_enum-keys.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(/*! ./_object-keys */ 11)
	  , gOPS    = __webpack_require__(/*! ./_object-gops */ 39)
	  , pIE     = __webpack_require__(/*! ./_object-pie */ 21);
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

/***/ },
/* 97 */
/*!***********************************************!*\
  !*** ../~/core-js/library/modules/_for-of.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(/*! ./_ctx */ 16)
	  , call        = __webpack_require__(/*! ./_iter-call */ 65)
	  , isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 64)
	  , anObject    = __webpack_require__(/*! ./_an-object */ 5)
	  , toLength    = __webpack_require__(/*! ./_to-length */ 48)
	  , getIterFn   = __webpack_require__(/*! ./core.get-iterator-method */ 49)
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

/***/ },
/* 98 */
/*!***********************************************!*\
  !*** ../~/core-js/library/modules/_invoke.js ***!
  \***********************************************/
/***/ function(module, exports) {

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

/***/ },
/* 99 */
/*!*************************************************!*\
  !*** ../~/core-js/library/modules/_is-array.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(/*! ./_cof */ 20);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 100 */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_iter-create.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(/*! ./_object-create */ 38)
	  , descriptor     = __webpack_require__(/*! ./_property-desc */ 23)
	  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 26)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./_hide */ 10)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 2)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 101 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_iter-step.js ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 102 */
/*!**********************************************!*\
  !*** ../~/core-js/library/modules/_keyof.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(/*! ./_object-keys */ 11)
	  , toIObject = __webpack_require__(/*! ./_to-iobject */ 8);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 103 */
/*!*********************************************!*\
  !*** ../~/core-js/library/modules/_meta.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(/*! ./_uid */ 28)('meta')
	  , isObject = __webpack_require__(/*! ./_is-object */ 13)
	  , has      = __webpack_require__(/*! ./_has */ 9)
	  , setDesc  = __webpack_require__(/*! ./_object-dp */ 6).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(/*! ./_fails */ 12)(function(){
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

/***/ },
/* 104 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_microtask.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./_global */ 3)
	  , macrotask = __webpack_require__(/*! ./_task */ 62).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(/*! ./_cof */ 20)(process) == 'process';
	
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

/***/ },
/* 105 */
/*!******************************************************!*\
  !*** ../~/core-js/library/modules/_object-assign.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(/*! ./_object-keys */ 11)
	  , gOPS     = __webpack_require__(/*! ./_object-gops */ 39)
	  , pIE      = __webpack_require__(/*! ./_object-pie */ 21)
	  , toObject = __webpack_require__(/*! ./_to-object */ 27)
	  , IObject  = __webpack_require__(/*! ./_iobject */ 55)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(/*! ./_fails */ 12)(function(){
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

/***/ },
/* 106 */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/_object-dps.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(/*! ./_object-dp */ 6)
	  , anObject = __webpack_require__(/*! ./_an-object */ 5)
	  , getKeys  = __webpack_require__(/*! ./_object-keys */ 11);
	
	module.exports = __webpack_require__(/*! ./_descriptors */ 7) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 107 */
/*!********************************************************!*\
  !*** ../~/core-js/library/modules/_object-gopn-ext.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 8)
	  , gOPN      = __webpack_require__(/*! ./_object-gopn */ 58).f
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


/***/ },
/* 108 */
/*!********************************************************!*\
  !*** ../~/core-js/library/modules/_object-to-array.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(/*! ./_object-keys */ 11)
	  , toIObject = __webpack_require__(/*! ./_to-iobject */ 8)
	  , isEnum    = __webpack_require__(/*! ./_object-pie */ 21).f;
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

/***/ },
/* 109 */
/*!*****************************************************!*\
  !*** ../~/core-js/library/modules/_redefine-all.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(/*! ./_hide */ 10);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 110 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_set-proto.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(/*! ./_is-object */ 13)
	  , anObject = __webpack_require__(/*! ./_an-object */ 5);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(/*! ./_ctx */ 16)(Function.call, __webpack_require__(/*! ./_object-gopd */ 57).f(Object.prototype, '__proto__').set, 2);
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

/***/ },
/* 111 */
/*!****************************************************!*\
  !*** ../~/core-js/library/modules/_set-species.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(/*! ./_global */ 3)
	  , core        = __webpack_require__(/*! ./_core */ 1)
	  , dP          = __webpack_require__(/*! ./_object-dp */ 6)
	  , DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 7)
	  , SPECIES     = __webpack_require__(/*! ./_wks */ 2)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 112 */
/*!************************************************************!*\
  !*** ../~/core-js/library/modules/_species-constructor.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(/*! ./_an-object */ 5)
	  , aFunction = __webpack_require__(/*! ./_a-function */ 33)
	  , SPECIES   = __webpack_require__(/*! ./_wks */ 2)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 113 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/_string-at.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./_to-integer */ 42)
	  , defined   = __webpack_require__(/*! ./_defined */ 35);
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

/***/ },
/* 114 */
/*!*************************************************!*\
  !*** ../~/core-js/library/modules/_to-index.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./_to-integer */ 42)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 115 */
/*!*********************************************************!*\
  !*** ../~/core-js/library/modules/core.get-iterator.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(/*! ./_an-object */ 5)
	  , get      = __webpack_require__(/*! ./core.get-iterator-method */ 49);
	module.exports = __webpack_require__(/*! ./_core */ 1).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 116 */
/*!********************************************************!*\
  !*** ../~/core-js/library/modules/core.is-iterable.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./_classof */ 34)
	  , ITERATOR  = __webpack_require__(/*! ./_wks */ 2)('iterator')
	  , Iterators = __webpack_require__(/*! ./_iterators */ 14);
	module.exports = __webpack_require__(/*! ./_core */ 1).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 117 */
/*!**********************************************************!*\
  !*** ../~/core-js/library/modules/es6.array.iterator.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 93)
	  , step             = __webpack_require__(/*! ./_iter-step */ 101)
	  , Iterators        = __webpack_require__(/*! ./_iterators */ 14)
	  , toIObject        = __webpack_require__(/*! ./_to-iobject */ 8);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./_iter-define */ 56)(Array, 'Array', function(iterated, kind){
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

/***/ },
/* 118 */
/*!*********************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.assign.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(/*! ./_export */ 4);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(/*! ./_object-assign */ 105)});

/***/ },
/* 119 */
/*!*********************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.create.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 4)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(/*! ./_object-create */ 38)});

/***/ },
/* 120 */
/*!******************************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.define-property.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(/*! ./_export */ 4);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 7), 'Object', {defineProperty: __webpack_require__(/*! ./_object-dp */ 6).f});

/***/ },
/* 121 */
/*!*******************************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(/*! ./_to-object */ 27)
	  , $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59);
	
	__webpack_require__(/*! ./_object-sap */ 67)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 122 */
/*!*******************************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(/*! ./_export */ 4);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(/*! ./_set-proto */ 110).set});

/***/ },
/* 123 */
/*!***************************************************!*\
  !*** ../~/core-js/library/modules/es6.promise.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(/*! ./_library */ 25)
	  , global             = __webpack_require__(/*! ./_global */ 3)
	  , ctx                = __webpack_require__(/*! ./_ctx */ 16)
	  , classof            = __webpack_require__(/*! ./_classof */ 34)
	  , $export            = __webpack_require__(/*! ./_export */ 4)
	  , isObject           = __webpack_require__(/*! ./_is-object */ 13)
	  , aFunction          = __webpack_require__(/*! ./_a-function */ 33)
	  , anInstance         = __webpack_require__(/*! ./_an-instance */ 94)
	  , forOf              = __webpack_require__(/*! ./_for-of */ 97)
	  , speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 112)
	  , task               = __webpack_require__(/*! ./_task */ 62).set
	  , microtask          = __webpack_require__(/*! ./_microtask */ 104)()
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
	      , FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ 2)('species')] = function(exec){ exec(empty, empty); };
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
	  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ 109)($Promise.prototype, {
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
	__webpack_require__(/*! ./_set-to-string-tag */ 26)($Promise, PROMISE);
	__webpack_require__(/*! ./_set-species */ 111)(PROMISE);
	Wrapper = __webpack_require__(/*! ./_core */ 1)[PROMISE];
	
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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ 66)(function(iter){
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

/***/ },
/* 124 */
/*!**************************************************!*\
  !*** ../~/core-js/library/modules/es6.symbol.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(/*! ./_global */ 3)
	  , has            = __webpack_require__(/*! ./_has */ 9)
	  , DESCRIPTORS    = __webpack_require__(/*! ./_descriptors */ 7)
	  , $export        = __webpack_require__(/*! ./_export */ 4)
	  , redefine       = __webpack_require__(/*! ./_redefine */ 61)
	  , META           = __webpack_require__(/*! ./_meta */ 103).KEY
	  , $fails         = __webpack_require__(/*! ./_fails */ 12)
	  , shared         = __webpack_require__(/*! ./_shared */ 41)
	  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 26)
	  , uid            = __webpack_require__(/*! ./_uid */ 28)
	  , wks            = __webpack_require__(/*! ./_wks */ 2)
	  , wksExt         = __webpack_require__(/*! ./_wks-ext */ 45)
	  , wksDefine      = __webpack_require__(/*! ./_wks-define */ 44)
	  , keyOf          = __webpack_require__(/*! ./_keyof */ 102)
	  , enumKeys       = __webpack_require__(/*! ./_enum-keys */ 96)
	  , isArray        = __webpack_require__(/*! ./_is-array */ 99)
	  , anObject       = __webpack_require__(/*! ./_an-object */ 5)
	  , toIObject      = __webpack_require__(/*! ./_to-iobject */ 8)
	  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 43)
	  , createDesc     = __webpack_require__(/*! ./_property-desc */ 23)
	  , _create        = __webpack_require__(/*! ./_object-create */ 38)
	  , gOPNExt        = __webpack_require__(/*! ./_object-gopn-ext */ 107)
	  , $GOPD          = __webpack_require__(/*! ./_object-gopd */ 57)
	  , $DP            = __webpack_require__(/*! ./_object-dp */ 6)
	  , $keys          = __webpack_require__(/*! ./_object-keys */ 11)
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
	  __webpack_require__(/*! ./_object-gopn */ 58).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(/*! ./_object-pie */ 21).f  = $propertyIsEnumerable;
	  __webpack_require__(/*! ./_object-gops */ 39).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(/*! ./_library */ 25)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 125 */
/*!*********************************************************!*\
  !*** ../~/core-js/library/modules/es7.object.values.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(/*! ./_export */ 4)
	  , $values = __webpack_require__(/*! ./_object-to-array */ 108)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 126 */
/*!*****************************************************************!*\
  !*** ../~/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_wks-define */ 44)('asyncIterator');

/***/ },
/* 127 */
/*!*************************************************************!*\
  !*** ../~/core-js/library/modules/es7.symbol.observable.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./_wks-define */ 44)('observable');

/***/ },
/* 128 */
/*!**************************************!*\
  !*** ../~/axios/lib/adapters/xhr.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 15);
	var settle = __webpack_require__(/*! ./../core/settle */ 144);
	var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ 147);
	var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ 153);
	var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ 151);
	var createError = __webpack_require__(/*! ../core/createError */ 131);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ 146);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (("development") !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(/*! ./../helpers/cookies */ 149);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ },
/* 129 */
/*!***************************************!*\
  !*** ../~/axios/lib/cancel/Cancel.js ***!
  \***************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ },
/* 130 */
/*!*****************************************!*\
  !*** ../~/axios/lib/cancel/isCancel.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ },
/* 131 */
/*!******************************************!*\
  !*** ../~/axios/lib/core/createError.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(/*! ./enhanceError */ 143);
	
	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};


/***/ },
/* 132 */
/*!**************************************!*\
  !*** ../~/axios/lib/helpers/bind.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },
/* 133 */
/*!*******************************!*\
  !*** ./utils/record-utils.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* global localStorage */
	'use strict';
	
	var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 46);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 51);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _require = __webpack_require__(/*! ../utils/constants */ 22),
	    STORAGE_PREFIX = _require.STORAGE_PREFIX,
	    PREFIX_SEPARATOR = _require.PREFIX_SEPARATOR,
	    KEY_SEPARATOR = _require.KEY_SEPARATOR;
	
	function parseCacheKey(cacheKey) {
	  var _cacheKey$split = cacheKey.split(KEY_SEPARATOR),
	      _cacheKey$split2 = (0, _slicedToArray3.default)(_cacheKey$split, 2),
	      prefix = _cacheKey$split2[0],
	      key = _cacheKey$split2[1];
	
	  var _prefix$split = prefix.split(PREFIX_SEPARATOR),
	      _prefix$split2 = (0, _slicedToArray3.default)(_prefix$split, 3),
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
	      items.push((0, _assign2.default)({
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

/***/ },
/* 134 */
/*!******************************************************!*\
  !*** ../~/babel-runtime/helpers/asyncToGenerator.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(/*! ../core-js/promise */ 47);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }
	
	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            step("next", value);
	          }, function (err) {
	            step("throw", err);
	          });
	        }
	      }
	
	      return step("next");
	    });
	  };
	};

/***/ },
/* 135 */
/*!***********************************************!*\
  !*** ../~/babel-runtime/regenerator/index.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! regenerator-runtime */ 168);


/***/ },
/* 136 */
/*!*******************************!*\
  !*** ../~/process/browser.js ***!
  \*******************************/
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 137 */
/*!***************************!*\
  !*** ../~/axios/index.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/axios */ 138);

/***/ },
/* 138 */
/*!*******************************!*\
  !*** ../~/axios/lib/axios.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./utils */ 15);
	var bind = __webpack_require__(/*! ./helpers/bind */ 132);
	var Axios = __webpack_require__(/*! ./core/Axios */ 140);
	var defaults = __webpack_require__(/*! ./defaults */ 69);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ 129);
	axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ 139);
	axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ 130);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(/*! ./helpers/spread */ 154);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ },
/* 139 */
/*!********************************************!*\
  !*** ../~/axios/lib/cancel/CancelToken.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(/*! ./Cancel */ 129);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ },
/* 140 */
/*!************************************!*\
  !*** ../~/axios/lib/core/Axios.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(/*! ./../defaults */ 69);
	var utils = __webpack_require__(/*! ./../utils */ 15);
	var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ 141);
	var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ 142);
	var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ 150);
	var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ 148);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ },
/* 141 */
/*!*************************************************!*\
  !*** ../~/axios/lib/core/InterceptorManager.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 15);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ },
/* 142 */
/*!**********************************************!*\
  !*** ../~/axios/lib/core/dispatchRequest.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 15);
	var transformData = __webpack_require__(/*! ./transformData */ 145);
	var isCancel = __webpack_require__(/*! ../cancel/isCancel */ 130);
	var defaults = __webpack_require__(/*! ../defaults */ 69);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ },
/* 143 */
/*!*******************************************!*\
  !*** ../~/axios/lib/core/enhanceError.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};


/***/ },
/* 144 */
/*!*************************************!*\
  !*** ../~/axios/lib/core/settle.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(/*! ./createError */ 131);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response
	    ));
	  }
	};


/***/ },
/* 145 */
/*!********************************************!*\
  !*** ../~/axios/lib/core/transformData.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 15);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ },
/* 146 */
/*!**************************************!*\
  !*** ../~/axios/lib/helpers/btoa.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ },
/* 147 */
/*!******************************************!*\
  !*** ../~/axios/lib/helpers/buildURL.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 15);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ },
/* 148 */
/*!*********************************************!*\
  !*** ../~/axios/lib/helpers/combineURLs.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },
/* 149 */
/*!*****************************************!*\
  !*** ../~/axios/lib/helpers/cookies.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 15);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },
/* 150 */
/*!***********************************************!*\
  !*** ../~/axios/lib/helpers/isAbsoluteURL.js ***!
  \***********************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },
/* 151 */
/*!*************************************************!*\
  !*** ../~/axios/lib/helpers/isURLSameOrigin.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 15);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },
/* 152 */
/*!*****************************************************!*\
  !*** ../~/axios/lib/helpers/normalizeHeaderName.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ../utils */ 15);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ },
/* 153 */
/*!**********************************************!*\
  !*** ../~/axios/lib/helpers/parseHeaders.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(/*! ./../utils */ 15);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};


/***/ },
/* 154 */
/*!****************************************!*\
  !*** ../~/axios/lib/helpers/spread.js ***!
  \****************************************/
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ },
/* 155 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 46);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FrameStorageListener = __webpack_require__(/*! ./utils/frame-storage-listener */ 158);
	var LocalStorageStrategy = __webpack_require__(/*! ./strategies/local-storage */ 72);
	var FrameStorageStrategy = __webpack_require__(/*! ./strategies/frame-storage */ 71);
	var WixStorageStrategy = __webpack_require__(/*! ./strategies/wix-storage */ 157);
	var CachedStorageStrategy = __webpack_require__(/*! ./strategies/cached-storage */ 156);
	
	var _require = __webpack_require__(/*! ./utils/constants */ 22),
	    NOT_FOUND = _require.NOT_FOUND;
	
	var BaseStorage = __webpack_require__(/*! ./base-storage */ 17);
	var DataCapsule = __webpack_require__(/*! ./data-capsule */ 70);
	
	function LocalStorageCapsule(options) {
	  return new DataCapsule((0, _assign2.default)({}, options, { strategy: new LocalStorageStrategy() }));
	}
	
	function LocalStorageCachedCapsule(options) {
	  return new DataCapsule((0, _assign2.default)({}, options, {
	    strategy: new CachedStorageStrategy({ remoteStrategy: options.remoteStrategy })
	  }));
	}
	
	module.exports = {
	  NOT_FOUND: NOT_FOUND,
	  BaseStorage: BaseStorage,
	  DataCapsule: DataCapsule,
	  FrameStorageListener: FrameStorageListener,
	  FrameStorageStrategy: FrameStorageStrategy,
	  LocalStorageStrategy: LocalStorageStrategy,
	  LocalStorageCapsule: LocalStorageCapsule,
	  WixStorageStrategy: WixStorageStrategy,
	  CachedStorageStrategy: CachedStorageStrategy,
	  LocalStorageCachedCapsule: LocalStorageCachedCapsule
	};

/***/ },
/* 156 */
/*!**************************************!*\
  !*** ./strategies/cached-storage.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 161);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 47);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ 135);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ 134);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 46);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 30);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 32);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 31);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _require = __webpack_require__(/*! ../utils/constants */ 22),
	    NOT_FOUND = _require.NOT_FOUND;
	
	var BaseStorage = __webpack_require__(/*! ../base-storage */ 17);
	var LocalStorageStrategy = __webpack_require__(/*! ./local-storage */ 72);
	var DELETED = '___DELETED___';
	
	var CachedStorageStrategy = function (_BaseStorage) {
	  (0, _inherits3.default)(CachedStorageStrategy, _BaseStorage);
	
	  function CachedStorageStrategy(_ref) {
	    var remoteStrategy = _ref.remoteStrategy,
	        _ref$localStrategy = _ref.localStrategy,
	        localStrategy = _ref$localStrategy === undefined ? new LocalStorageStrategy() : _ref$localStrategy;
	    (0, _classCallCheck3.default)(this, CachedStorageStrategy);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (CachedStorageStrategy.__proto__ || (0, _getPrototypeOf2.default)(CachedStorageStrategy)).call(this));
	
	    _this.remoteStrategy = BaseStorage.verify(remoteStrategy);
	    _this.localStrategy = BaseStorage.verify(localStrategy);
	    return _this;
	  }
	
	  (0, _createClass3.default)(CachedStorageStrategy, [{
	    key: '_cacheItem',
	    value: function _cacheItem(key, value, options) {
	      return this.localStrategy.setItem(key, value, (0, _assign2.default)(options, { expiration: 3600 }));
	    }
	  }, {
	    key: 'setItem',
	    value: function () {
	      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(key, value, options) {
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return this.remoteStrategy.setItem(key, value, options);
	
	              case 2:
	                _context.next = 4;
	                return this._cacheItem(key, value, options);
	
	              case 4:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	
	      function setItem(_x, _x2, _x3) {
	        return _ref2.apply(this, arguments);
	      }
	
	      return setItem;
	    }()
	  }, {
	    key: 'removeItem',
	    value: function () {
	      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(key, options) {
	        return _regenerator2.default.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.next = 2;
	                return this.remoteStrategy.removeItem(key, options);
	
	              case 2:
	                _context2.next = 4;
	                return this._cacheItem(key, DELETED, options);
	
	              case 4:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));
	
	      function removeItem(_x4, _x5) {
	        return _ref3.apply(this, arguments);
	      }
	
	      return removeItem;
	    }()
	  }, {
	    key: '_getRemoteAndCache',
	    value: function () {
	      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(key, options) {
	        var value;
	        return _regenerator2.default.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                _context3.prev = 0;
	                _context3.next = 3;
	                return this.remoteStrategy.getItem(key, options);
	
	              case 3:
	                value = _context3.sent;
	                _context3.next = 6;
	                return this._cacheItem(key, value, options);
	
	              case 6:
	                return _context3.abrupt('return', value);
	
	              case 9:
	                _context3.prev = 9;
	                _context3.t0 = _context3['catch'](0);
	
	                if (!(_context3.t0 === NOT_FOUND)) {
	                  _context3.next = 14;
	                  break;
	                }
	
	                _context3.next = 14;
	                return this._cacheItem(key, DELETED, options);
	
	              case 14:
	                throw _context3.t0;
	
	              case 15:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this, [[0, 9]]);
	      }));
	
	      function _getRemoteAndCache(_x6, _x7) {
	        return _ref4.apply(this, arguments);
	      }
	
	      return _getRemoteAndCache;
	    }()
	  }, {
	    key: 'getItem',
	    value: function () {
	      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(key, options) {
	        var value;
	        return _regenerator2.default.wrap(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                value = void 0;
	                _context4.prev = 1;
	                _context4.next = 4;
	                return this.localStrategy.getItem(key, options);
	
	              case 4:
	                value = _context4.sent;
	                _context4.next = 10;
	                break;
	
	              case 7:
	                _context4.prev = 7;
	                _context4.t0 = _context4['catch'](1);
	
	                value = this._getRemoteAndCache(key, options);
	
	              case 10:
	                if (!(value === DELETED)) {
	                  _context4.next = 14;
	                  break;
	                }
	
	                throw NOT_FOUND;
	
	              case 14:
	                return _context4.abrupt('return', value);
	
	              case 15:
	              case 'end':
	                return _context4.stop();
	            }
	          }
	        }, _callee4, this, [[1, 7]]);
	      }));
	
	      function getItem(_x8, _x9) {
	        return _ref5.apply(this, arguments);
	      }
	
	      return getItem;
	    }()
	  }, {
	    key: 'getAllItems',
	    value: function () {
	      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(options) {
	        var _this2 = this;
	
	        var items;
	        return _regenerator2.default.wrap(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                _context5.next = 2;
	                return this.remoteStrategy.getAllItems(options);
	
	              case 2:
	                items = _context5.sent;
	                _context5.next = 5;
	                return _promise2.default.all((0, _keys2.default)(items).map(function (key) {
	                  return _this2._cacheItem(key, items[key], options);
	                }));
	
	              case 5:
	                return _context5.abrupt('return', items);
	
	              case 6:
	              case 'end':
	                return _context5.stop();
	            }
	          }
	        }, _callee5, this);
	      }));
	
	      function getAllItems(_x10) {
	        return _ref6.apply(this, arguments);
	      }
	
	      return getAllItems;
	    }()
	  }]);
	  return CachedStorageStrategy;
	}(BaseStorage);
	
	module.exports = CachedStorageStrategy;

/***/ },
/* 157 */
/*!***********************************!*\
  !*** ./strategies/wix-storage.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 30);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 32);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 31);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axios = __webpack_require__(/*! axios */ 137);
	var BaseStorage = __webpack_require__(/*! ../base-storage */ 17);
	
	var _require = __webpack_require__(/*! ../utils/constants */ 22),
	    NOT_FOUND = _require.NOT_FOUND,
	    SERVER_ERROR = _require.SERVER_ERROR;
	
	var WixStorageStrategy = function (_BaseStorage) {
	  (0, _inherits3.default)(WixStorageStrategy, _BaseStorage);
	
	  function WixStorageStrategy() {
	    (0, _classCallCheck3.default)(this, WixStorageStrategy);
	    return (0, _possibleConstructorReturn3.default)(this, (WixStorageStrategy.__proto__ || (0, _getPrototypeOf2.default)(WixStorageStrategy)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(WixStorageStrategy, [{
	    key: 'setItem',
	    value: function setItem(key, value, options) {
	      var payload = {
	        nameSpace: options.namespace,
	        key: key,
	        blob: value
	      };
	      if (options.scope && options.scope.siteId) {
	        payload.siteId = options.scope.siteId;
	      }
	      if (options.expiration) {
	        payload.TTLInDays = Math.ceil(options.expiration / (60 * 60 * 24));
	      }
	      return axios.post('/_api/wix-user-preferences-webapp/set', payload).then(function () {
	        return undefined;
	      }).catch(function () {
	        throw SERVER_ERROR;
	      });
	    }
	  }, {
	    key: 'removeItem',
	    value: function removeItem(key, options) {
	      var payload = {
	        nameSpace: options.namespace,
	        key: key
	      };
	      if (options.scope && options.scope.siteId) {
	        payload.siteId = options.scope.siteId;
	      }
	      return axios.post('/_api/wix-user-preferences-webapp/delete', payload).then(function () {
	        return undefined;
	      }).catch(function () {
	        throw SERVER_ERROR;
	      });
	    }
	  }, {
	    key: 'getItem',
	    value: function getItem(key, options) {
	      var siteId = options.scope && options.scope.siteId;
	      var path = siteId ? 'getVolatilePrefForSite' : 'getVolatilePrefForKey';
	      var url = ['/_api/wix-user-preferences-webapp', path, options.namespace, siteId, key].filter(function (x) {
	        return x;
	      }).join('/');
	
	      return axios.get(url).then(function (res) {
	        return res.data[key];
	      }).catch(function (err) {
	        throw err.response.status === 404 ? NOT_FOUND : SERVER_ERROR;
	      });
	    }
	  }, {
	    key: 'getAllItems',
	    value: function getAllItems(options) {
	      var siteId = options.scope && options.scope.siteId;
	      var path = siteId ? 'getVolatilePrefsForSite' : 'getVolatilePrefs';
	      var url = ['/_api/wix-user-preferences-webapp', path, options.namespace, siteId].filter(function (x) {
	        return x;
	      }).join('/');
	
	      return axios.get(url).then(function (res) {
	        return res.data;
	      }).catch(function () {
	        throw SERVER_ERROR;
	      });
	    }
	  }]);
	  return WixStorageStrategy;
	}(BaseStorage);
	
	module.exports = WixStorageStrategy;

/***/ },
/* 158 */
/*!*****************************************!*\
  !*** ./utils/frame-storage-listener.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* global window */
	'use strict';
	
	var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ 135);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ 162);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 50);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 51);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ 134);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 18);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 19);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var greedySplit = __webpack_require__(/*! greedy-split */ 68);
	var BaseStorage = __webpack_require__(/*! ../base-storage */ 17);
	
	var _require = __webpack_require__(/*! ./constants */ 22),
	    STORAGE_PREFIX = _require.STORAGE_PREFIX;
	
	var LocalStorageStrategy = __webpack_require__(/*! ../strategies/local-storage */ 72);
	
	var FrameStorageListener = function () {
	  function FrameStorageListener() {
	    var strategy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new LocalStorageStrategy();
	    (0, _classCallCheck3.default)(this, FrameStorageListener);
	
	    this.storageStrategy = BaseStorage.verify(strategy);
	  }
	
	  (0, _createClass3.default)(FrameStorageListener, [{
	    key: 'start',
	    value: function start(verifier) {
	      var _this = this;
	
	      // if (this._listener) {
	      //   return;
	      // }
	      var storageStrategy = BaseStorage.verify(this.storageStrategy);
	      this._listener = function () {
	        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
	          var _greedySplit, _greedySplit2, target, token, id, method, params, respond, invoke;
	
	          return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	              switch (_context.prev = _context.next) {
	                case 0:
	                  _greedySplit = greedySplit(e.data, '|', 5), _greedySplit2 = (0, _slicedToArray3.default)(_greedySplit, 5), target = _greedySplit2[0], token = _greedySplit2[1], id = _greedySplit2[2], method = _greedySplit2[3], params = _greedySplit2[4];
	
	                  respond = function respond(method, param) {
	                    var message = [target + 'Done', token, id, method, (0, _stringify2.default)(param)].join('|');
	                    (e.source || window).postMessage(message, e.origin || '*');
	                  };
	
	                  if (!(target === STORAGE_PREFIX && verifier(e.source, e.origin, token))) {
	                    _context.next = 15;
	                    break;
	                  }
	
	                  invoke = storageStrategy[method].bind(storageStrategy);
	                  _context.prev = 4;
	                  _context.t0 = respond;
	                  _context.next = 8;
	                  return invoke.apply(undefined, (0, _toConsumableArray3.default)(JSON.parse(params)));
	
	                case 8:
	                  _context.t1 = _context.sent;
	                  (0, _context.t0)('resolve', _context.t1);
	                  _context.next = 15;
	                  break;
	
	                case 12:
	                  _context.prev = 12;
	                  _context.t2 = _context['catch'](4);
	
	                  respond('reject', _context.t2.message || _context.t2);
	
	                case 15:
	                case 'end':
	                  return _context.stop();
	              }
	            }
	          }, _callee, _this, [[4, 12]]);
	        }));
	
	        return function (_x2) {
	          return _ref.apply(this, arguments);
	        };
	      }();
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

/***/ },
/* 159 */
/*!****************************************!*\
  !*** ./utils/local-storage-cleaner.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* global localStorage */
	'use strict';
	
	var _require = __webpack_require__(/*! ./record-utils */ 133),
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
	
	function createdAtSort(a, b) {
	  return a.createdAt - b.createdAt;
	}
	
	function canClean(cleaner) {
	  return cleaner.records.length > 0 && cleaner.requiredSpace > 0;
	}
	
	function deleteOld(cleaner) {
	  cleaner.records.sort(createdAtSort);
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

/***/ },
/* 160 */
/*!************************************************!*\
  !*** ../~/babel-runtime/core-js/array/from.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ 163), __esModule: true };

/***/ },
/* 161 */
/*!*************************************************!*\
  !*** ../~/babel-runtime/core-js/object/keys.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ 164), __esModule: true };

/***/ },
/* 162 */
/*!*******************************************************!*\
  !*** ../~/babel-runtime/helpers/toConsumableArray.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(/*! ../core-js/array/from */ 160);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 163 */
/*!*********************************************!*\
  !*** ../~/core-js/library/fn/array/from.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.string.iterator */ 24);
	__webpack_require__(/*! ../../modules/es6.array.from */ 166);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 1).Array.from;

/***/ },
/* 164 */
/*!**********************************************!*\
  !*** ../~/core-js/library/fn/object/keys.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.keys */ 167);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 1).Object.keys;

/***/ },
/* 165 */
/*!********************************************************!*\
  !*** ../~/core-js/library/modules/_create-property.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(/*! ./_object-dp */ 6)
	  , createDesc      = __webpack_require__(/*! ./_property-desc */ 23);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 166 */
/*!******************************************************!*\
  !*** ../~/core-js/library/modules/es6.array.from.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(/*! ./_ctx */ 16)
	  , $export        = __webpack_require__(/*! ./_export */ 4)
	  , toObject       = __webpack_require__(/*! ./_to-object */ 27)
	  , call           = __webpack_require__(/*! ./_iter-call */ 65)
	  , isArrayIter    = __webpack_require__(/*! ./_is-array-iter */ 64)
	  , toLength       = __webpack_require__(/*! ./_to-length */ 48)
	  , createProperty = __webpack_require__(/*! ./_create-property */ 165)
	  , getIterFn      = __webpack_require__(/*! ./core.get-iterator-method */ 49);
	
	$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ 66)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 167 */
/*!*******************************************************!*\
  !*** ../~/core-js/library/modules/es6.object.keys.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(/*! ./_to-object */ 27)
	  , $keys    = __webpack_require__(/*! ./_object-keys */ 11);
	
	__webpack_require__(/*! ./_object-sap */ 67)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 168 */
/*!**************************************************!*\
  !*** ../~/regenerator-runtime/runtime-module.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(/*! ./runtime */ 169);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 169 */
/*!*******************************************!*\
  !*** ../~/regenerator-runtime/runtime.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
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
	  runtime.wrap = wrap;
	
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
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
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
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
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
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
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
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
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
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
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
	
	  runtime.keys = function(object) {
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
	  runtime.values = values;
	
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
	        return !!caught;
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
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
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
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(/*! ./../process/browser.js */ 136)))

/***/ }
/******/ ]);
//# sourceMappingURL=index.bundle.js.map