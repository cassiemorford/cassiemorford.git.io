module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/calculator-page/calculator-key.tsx":
/*!*******************************************************!*\
  !*** ./components/calculator-page/calculator-key.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/components/calculator-page/calculator-key.tsx";


class CalculatorKey extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      symbol,
      keyPressHandler
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "calculator__key",
      onClick: () => keyPressHandler(symbol),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, symbol));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CalculatorKey);

/***/ }),

/***/ "./components/calculator-page/calculator.tsx":
/*!***************************************************!*\
  !*** ./components/calculator-page/calculator.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-integer */ "./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _calculator_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator-key */ "./components/calculator-page/calculator-key.tsx");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/components/calculator-page/calculator.tsx";



const numbers = "1234567890".split("");
const operations = "+-*/".split("");
const specialOperations = ["CLR", "="];

class CalculatorComponent extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "calculateNewTotal", () => {
      const {
        total,
        display,
        pendingOperation
      } = this.state;
      console.log(`${total}${pendingOperation}${display}`);
      return eval(`${total}${pendingOperation}${display}`);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "clearHistory", (maintainDisplay = false) => {
      let newDisplay = 0;

      if (maintainDisplay) {
        newDisplay = this.calculateNewTotal();
      }

      this.setState({
        display: newDisplay,
        pendingOperation: "+",
        total: 0,
        continueInput: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleKeyPress", key => {
      const {
        total,
        display,
        pendingOperation,
        continueInput
      } = this.state;

      if (_babel_runtime_corejs2_core_js_number_is_integer__WEBPACK_IMPORTED_MODULE_0___default()(+key)) {
        const newDisplay = continueInput ? display + key : key;
        this.setState({
          display: +newDisplay,
          continueInput: true
        });
      } else if (specialOperations.includes(key)) {
        this.clearHistory(key === '=');
      } else {
        const newTotal = this.calculateNewTotal();
        this.setState({
          display: newTotal,
          pendingOperation: key,
          total: newTotal,
          continueInput: false
        });
      }
    });

    this.state = {
      display: 0,
      total: 0,
      pendingOperation: "+",
      continueInput: true
    };
  }

  render() {
    const {
      display
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "calculator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "calculator__display",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, display.toString().slice(0, 10)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "calculator__main-keys",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "calculator__number-keys",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, numbers.map(number => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_calculator_key__WEBPACK_IMPORTED_MODULE_3__["default"], {
      symbol: number,
      keyPressHandler: this.handleKeyPress,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "calculator__operation-keys",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, operations.map(symbol => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_calculator_key__WEBPACK_IMPORTED_MODULE_3__["default"], {
      symbol: symbol,
      keyPressHandler: this.handleKeyPress,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "calculator__special-keys",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, specialOperations.map(symbol => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_calculator_key__WEBPACK_IMPORTED_MODULE_3__["default"], {
      symbol: symbol,
      keyPressHandler: this.handleKeyPress,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }))), " ");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CalculatorComponent);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-integer */ "core-js/library/fn/number/is-integer");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/calculator.tsx":
/*!******************************!*\
  !*** ./pages/calculator.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_calculator_page_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/calculator-page/calculator */ "./components/calculator-page/calculator.tsx");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/pages/calculator.tsx";




class Calculator extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_calculator_page_calculator__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/calculator.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cassiemorford/Desktop/cassieM/pages/calculator.tsx */"./pages/calculator.tsx");


/***/ }),

/***/ "core-js/library/fn/number/is-integer":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/number/is-integer" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/number/is-integer");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=calculator.js.map