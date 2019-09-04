webpackHotUpdate("static/development/pages/elevators.js",{

/***/ "./components/elevator-page/elevator-system.tsx":
/*!******************************************************!*\
  !*** ./components/elevator-page/elevator-system.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _elevator_page_elevator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../elevator-page/elevator */ "./components/elevator-page/elevator.tsx");
/* harmony import */ var _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elevator-page/elevator-types */ "./components/elevator-page/elevator-types.ts");






var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/components/elevator-page/elevator-system.tsx";




var ElevatorSystem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ElevatorSystem, _React$Component);

  function ElevatorSystem(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ElevatorSystem);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ElevatorSystem).call(this, props));
    _this.state = {
      elevators: [{
        floor: 1,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_8__["ElevatorDirection"].Up,
        stops: []
      }, {
        floor: 4,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_8__["ElevatorDirection"].Down,
        stops: []
      }],
      users: [],
      totalFloors: 5
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ElevatorSystem, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          elevators = _this$state.elevators,
          users = _this$state.users,
          totalFloors = _this$state.totalFloors;
      var elevatorShaftStyles = {
        height: "".concat(100 * totalFloors, "px")
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "elevator-system",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "elevator-system__elevators",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, elevators.map(function (el) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "elevator__shaft",
          style: elevatorShaftStyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_elevator_page_elevator__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, el, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        })));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "elevator-system__floors",
        style: elevatorShaftStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, users.map(function (el) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "elevator-system--user",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        });
      })));
    }
  }]);

  return ElevatorSystem;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ElevatorSystem);

/***/ })

})
//# sourceMappingURL=elevators.js.cfe2979a6365f18c1eaa.hot-update.js.map