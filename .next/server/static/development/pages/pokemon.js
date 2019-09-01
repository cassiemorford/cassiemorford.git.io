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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Fonts.js":
/*!*****************************!*\
  !*** ./components/Fonts.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "fontfaceobserver");

const Fonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  const roboto = new FontFaceObserver('Roboto');
  roboto.load().then(() => {
    document.documentElement.classList.add('roboto');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Fonts);

/***/ }),

/***/ "./components/pokemon-info.tsx":
/*!*************************************!*\
  !*** ./components/pokemon-info.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fonts */ "./components/Fonts.js");
/* harmony import */ var _stat_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat-card */ "./components/stat-card.tsx");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/components/pokemon-info.tsx";






class PokemonInfo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true
    };
  }

  async componentDidMount() {
    Object(_Fonts__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`);
    const respJson = await resp.json();
    console.log(respJson);
    this.setState({
      data: respJson,
      loading: false
    });
  }

  render() {
    const {
      data,
      loading
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pokemon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "loader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), !loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pokemon__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "pokemon__image",
      src: data.sprites && data.sprites.back_default,
      alt: data.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "pokemon__name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "pokemon__image",
      src: data.sprites && data.sprites.front_default,
      alt: data.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pokemon__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pokemon__left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "pokemon__type-list-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, " types "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "pokemon__type-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, data.types.map(t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "pokemon__type",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, t.type.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "pokemon__weight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, " weight: ", data.weight)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pokemon__right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_stat_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      stats: data.stats,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PokemonInfo);

/***/ }),

/***/ "./components/pokemon-list.tsx":
/*!*************************************!*\
  !*** ./components/pokemon-list.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fonts */ "./components/Fonts.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/components/pokemon-list.tsx";





class PokemonList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async getPokemonData(url) {
    const resp = await fetch(url);
    const pokemonData = await resp.json();
    this.setState(prevState => {
      return {
        data: [...prevState.data, pokemonData]
      };
    });
  }

  async getPokemons(url) {
    const resp = await fetch(url);
    const respJson = await resp.json();
    const results = respJson.results;
    results.forEach(res => this.getPokemonData(res.url));

    if (respJson.next) {
      this.getPokemons(respJson.next);
    }
  }

  componentDidMount() {
    Object(_Fonts__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.getPokemons(`https://pokeapi.co/api/v2/pokemon/`);
  }

  render() {
    const {
      data
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pokemon-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pokemon-list__counter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, data.length, " pokemon loaded"), data.map(pokemon => {
      const primaryType = pokemon.types[0].type.name;
      const pokemonClass = `pokemon-mini pokemon-mini--${primaryType}`;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: pokemonClass,
        href: `/pokemon?pokemon=${pokemon.name}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "pokemon-mini__name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, pokemon.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "pokemon-mini__image",
        src: pokemon.sprites && pokemon.sprites.front_default,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }));
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PokemonList);

/***/ }),

/***/ "./components/stat-card.tsx":
/*!**********************************!*\
  !*** ./components/stat-card.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/components/stat-card.tsx";




class StatCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      stats
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stat-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, stats.map(stat => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stat-card__row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "stat-card__name-area",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, stat.stat.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stat-card__bar-area",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stat-card__stat-bar",
      style: {
        width: `${stat.base_stat}%`
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "stat-card__stat-value",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, stat.base_stat))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StatCard);

/***/ }),

/***/ "./pages/pokemon.tsx":
/*!***************************!*\
  !*** ./pages/pokemon.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Fonts */ "./components/Fonts.js");
/* harmony import */ var _components_pokemon_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pokemon-info */ "./components/pokemon-info.tsx");
/* harmony import */ var _components_pokemon_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pokemon-list */ "./components/pokemon-list.tsx");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/pages/pokemon.tsx";







class Pokemon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
  }

  async componentDidMount() {
    Object(_components_Fonts__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const name = params.get("pokemon");

    if (name) {
      this.setState({
        name
      });
    }
  }

  render() {
    const {
      name
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "placeholder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pokemon_info__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), !name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pokemon_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Pokemon);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/pokemon.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cassiemorford/Desktop/cassieM/pages/pokemon.tsx */"./pages/pokemon.tsx");


/***/ }),

/***/ "fontfaceobserver":
/*!***********************************!*\
  !*** external "fontfaceobserver" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fontfaceobserver");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

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
//# sourceMappingURL=pokemon.js.map