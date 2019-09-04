webpackHotUpdate("static/development/pages/elevators.js",{

/***/ "./components/elevator-page/elevator-system.tsx":
/*!******************************************************!*\
  !*** ./components/elevator-page/elevator-system.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/components/elevator-page/elevator-system.tsx";


var ElevatorSystem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ElevatorSystem, _React$Component);

  function ElevatorSystem(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ElevatorSystem);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ElevatorSystem).call(this, props));
    _this.state = {
      elevators: [],
      users: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ElevatorSystem, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          elevators = _this$state.elevators,
          users = _this$state.users;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "elevator-system",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "elevator-system--elevators",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, elevators.map(function (el) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "elevator-system--elevator",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "elevator-system--users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, users.map(function (el) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "elevator-system--user",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        });
      })));
    }
  }]);

  return ElevatorSystem;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ElevatorSystem);

/***/ })

})
//# sourceMappingURL=elevators.js.7ffaf7d7d07e7c477c0f.hot-update.js.map