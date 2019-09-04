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

/***/ "./components/elevator-page/elevator-system.tsx":
/*!******************************************************!*\
  !*** ./components/elevator-page/elevator-system.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elevator_page_elevator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elevator-page/elevator */ "./components/elevator-page/elevator.tsx");
/* harmony import */ var _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elevator-page/elevator-types */ "./components/elevator-page/elevator-types.ts");


var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/components/elevator-page/elevator-system.tsx";




class ElevatorSystem extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "elevatorStep", () => {
      let {
        elevators,
        users,
        totalFloors
      } = this.state;
      elevators.forEach(el => {
        // MOVEMENT
        // if at top or bottom, turn around
        if (el.floor === totalFloors) {
          el.direction = _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_4__["ElevatorDirection"].Down;
        }

        if (el.floor === 1) {
          el.direction = _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_4__["ElevatorDirection"].Up;
        } // USERS
        // let off users


        users.forEach(u => {
          if (u.inElevator === el.el_id && el.floor === u.destination) {
            //let riders off
            u.inElevator = null;
            u.onFloor = u.destination;
            u.direction = null;
          } else if (u.onFloor === el.floor && el.direction === u.direction) {
            // let riders on
            u.onFloor = null;
            u.inElevator = el.el_id;
          }
        }); // take next step

        el.floor = el.direction === _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_4__["ElevatorDirection"].Up ? el.floor + 1 : el.floor - 1;
      });
      this.setState({
        elevators,
        users
      });
    });

    this.state = {
      elevators: [{
        floor: 1,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_4__["ElevatorDirection"].Up,
        stops: [],
        el_id: 'A'
      }, {
        floor: 5,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_4__["ElevatorDirection"].Down,
        stops: [],
        el_id: 'B'
      }],
      users: [{
        origin: 2,
        onFloor: 2,
        destination: 3,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_4__["ElevatorDirection"].Up
      }, {
        origin: 1,
        onFloor: 1,
        destination: 3,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_4__["ElevatorDirection"].Up
      }, {
        origin: 4,
        onFloor: 4,
        destination: 2,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_4__["ElevatorDirection"].Down
      }, {
        origin: 2,
        onFloor: 2,
        destination: 5,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_4__["ElevatorDirection"].Up
      }, {
        origin: 4,
        onFloor: 4,
        destination: 5,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_4__["ElevatorDirection"].Up
      }],
      totalFloors: 5
    };
  }

  render() {
    const {
      elevators,
      users,
      totalFloors
    } = this.state;
    const elevatorShaftStyles = {
      height: `${100 * totalFloors}px`
    };
    const floors = new Array(totalFloors).fill(0).map((el, i) => totalFloors - i);
    const peopleInElevators = users.filter(u => u.inElevator);
    const peopleWaiting = users.filter(u => u.onFloor);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "elevator-system",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      onClick: this.elevatorStep,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "Run Elevator"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "elevator-system__graphic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "elevator-system__elevators",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, elevators.map(el => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "elevator__shaft",
      key: el.el_id,
      style: elevatorShaftStyles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elevator_page_elevator__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, el, {
      el_id: el.el_id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }), peopleInElevators.filter(p => p.inElevator === el.el_id).map(p => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "elevator__rider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, `${p.origin}\u21e2${p.destination}`)))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "elevator-system__floors",
      style: elevatorShaftStyles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, floors.map((floor, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "elevator-system__floor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "elevator-system__floor-number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, floor), peopleWaiting.filter(p => p.onFloor === floor).map(p => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "elevator__rider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, `${p.origin}\u21e2${p.destination}`)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ElevatorSystem);

/***/ }),

/***/ "./components/elevator-page/elevator-types.ts":
/*!****************************************************!*\
  !*** ./components/elevator-page/elevator-types.ts ***!
  \****************************************************/
/*! exports provided: ElevatorDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElevatorDirection", function() { return ElevatorDirection; });
let ElevatorDirection;

(function (ElevatorDirection) {
  ElevatorDirection["Up"] = "UP";
  ElevatorDirection["Down"] = "DOWN";
})(ElevatorDirection || (ElevatorDirection = {}));

/***/ }),

/***/ "./components/elevator-page/elevator.tsx":
/*!***********************************************!*\
  !*** ./components/elevator-page/elevator.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/components/elevator-page/elevator.tsx";


class Elevator extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      floor,
      direction,
      el_id
    } = this.props;
    const directionClasses = `elevator__directions elevator__directions--${direction}`;
    const elevatorStyle = {
      bottom: `${(floor - 1) * 100}px`
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "elevator",
      style: elevatorStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "elevator__id",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, `${el_id}`), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: directionClasses,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "elevator__direction--up",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, `\u25b2`), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "elevator__floor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, floor), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "elevator__direction--down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, `\u25bc`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "elevator__riders",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Elevator);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/elevators.tsx":
/*!*****************************!*\
  !*** ./pages/elevators.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_elevator_page_elevator_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/elevator-page/elevator-system */ "./components/elevator-page/elevator-system.tsx");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/pages/elevators.tsx";




class Elevator extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_elevator_page_elevator_system__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Elevator);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/elevators.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cassiemorford/Desktop/cassieM/pages/elevators.tsx */"./pages/elevators.tsx");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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
//# sourceMappingURL=elevators.js.map