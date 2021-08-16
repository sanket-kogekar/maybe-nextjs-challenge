module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\KogoKing\\entrepreneur\\private\\maybe-nextjs\\components\\layout.tsx";

const Layout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto py-5 px-5 md:px-0 md:py-10",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./hooks/use-api-data.ts":
/*!*******************************!*\
  !*** ./hooks/use-api-data.ts ***!
  \*******************************/
/*! exports provided: useApiData, getNames, getIataList, getCountries, getCities, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApiData", function() { return useApiData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNames", function() { return getNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIataList", function() { return getIataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountries", function() { return getCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCities", function() { return getCities; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useApiData = (path, defaultValue, filters) => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultValue);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(path).catch(err => err.response).then(response => {
      setData(response.data);
    });
  }, []);
  return data;
};
const getNames = (path, defaultValue) => {
  const {
    0: names,
    1: setNames
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultValue);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(path).catch(err => err.response).then(response => {
      setNames(response.data);
    });
  }, []);
  return names;
};
const getIataList = (path, defaultValue) => {
  const {
    0: airportIataList,
    1: setAirportIataList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultValue);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(path).catch(err => err.response).then(response => {
      setAirportIataList(response.data);
    });
  }, []);
  return airportIataList;
};
const getCountries = (path, defaultValue) => {
  const {
    0: countries,
    1: setCountries
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultValue);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(path).catch(err => err.response).then(response => {
      setCountries(response.data);
    });
  }, []);
  return countries;
};
const getCities = (path, defaultValue, country) => {
  const {
    0: cities,
    1: setCities
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultValue);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(path).catch(err => err.response).then(response => {
      setCities(response.data);
    });
  }, []);
  return cities;
};
/* harmony default export */ __webpack_exports__["default"] = (useApiData);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _hooks_use_api_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-api-data */ "./hooks/use-api-data.ts");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab */ "@material-ui/lab");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\KogoKing\\entrepreneur\\private\\maybe-nextjs\\pages\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Page = () => {
  const airportNames = Object(_hooks_use_api_data__WEBPACK_IMPORTED_MODULE_3__["getNames"])("/api/names", []);
  const airportIataList = Object(_hooks_use_api_data__WEBPACK_IMPORTED_MODULE_3__["getIataList"])("/api/iata-list", []);
  const countries = Object(_hooks_use_api_data__WEBPACK_IMPORTED_MODULE_3__["getCountries"])("/api/countries", []);
  const cities = Object(_hooks_use_api_data__WEBPACK_IMPORTED_MODULE_3__["getCities"])("/api/cities", [], null);
  const c = Object(_hooks_use_api_data__WEBPACK_IMPORTED_MODULE_3__["getCountries"])("/api/countries", []);
  const initialState = {
    name: "",
    iata: "",
    country: "",
    city: ""
  };
  const {
    0: filterObject,
    1: setFilterObject
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState);
  const {
    0: currentCountryField,
    1: setCurrentCountryField
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: cityOptions,
    1: setCityOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(cities);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!!currentCountryField) {
      let newOptions = [];
      cities.forEach(city => {
        if (city.country === currentCountryField.name) {
          newOptions.push(city);
        }
      });
      setCityOptions(newOptions);
    } else {
      setCityOptions(cities);
    }
  }, [currentCountryField]);
  const {
    register,
    handleSubmit
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])();
  const {
    0: airports,
    1: setAirports
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const getAirportsList = filters => {
    axios__WEBPACK_IMPORTED_MODULE_9___default()({
      method: "post",
      url: "/api/airports",
      data: filters
    }).catch(err => err.response).then(response => {
      setAirports(response.data);
    });
  };

  const onSubmit = handleSubmit(() => {
    getAirportsList(filterObject);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "text-2xl",
      children: "\xA0\xA0Code Challenge: Airports"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        padding: "15px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          container: true,
          spacing: 1,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["Autocomplete"], {
              id: "name",
              options: airportNames,
              getOptionLabel: option => option.name,
              onChange: (event, option) => {
                if (!!option && !!option.name) {
                  setFilterObject(_objectSpread(_objectSpread({}, filterObject), {}, {
                    name: option.name
                  }));
                } else {
                  setFilterObject(_objectSpread(_objectSpread({}, filterObject), {}, {
                    name: ""
                  }));
                }
              },
              renderInput: params => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], _objectSpread(_objectSpread({}, params), {}, {
                label: "Name",
                variant: "outlined"
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["Autocomplete"], {
              id: "iata",
              options: airportIataList,
              getOptionLabel: option => option.name,
              onChange: (event, option) => {
                if (!!option && !!option.name) {
                  setFilterObject(_objectSpread(_objectSpread({}, filterObject), {}, {
                    iata: option.name
                  }));
                } else {
                  setFilterObject(_objectSpread(_objectSpread({}, filterObject), {}, {
                    iata: ""
                  }));
                }
              },
              renderInput: params => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], _objectSpread(_objectSpread({}, params), {}, {
                label: "IATA",
                variant: "outlined"
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["Autocomplete"], _objectSpread(_objectSpread({
              id: "country"
            }, register("country")), {}, {
              options: countries,
              getOptionLabel: option => option.name,
              onChange: (event, option) => {
                if (!!option && !!option.name) {
                  setFilterObject(_objectSpread(_objectSpread({}, filterObject), {}, {
                    country: option.name
                  }));
                  setCurrentCountryField(option);
                } else {
                  setFilterObject(_objectSpread(_objectSpread({}, filterObject), {}, {
                    country: ""
                  }));
                  setCurrentCountryField("");
                }
              },
              renderInput: params => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], _objectSpread(_objectSpread({}, params), {}, {
                label: "Country",
                variant: "outlined"
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 19
              }, undefined)
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            xs: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["Autocomplete"], {
              id: "city",
              options: cityOptions,
              getOptionLabel: option => option.name,
              onChange: (event, option) => {
                if (!!option && !!option.name) {
                  setFilterObject(_objectSpread(_objectSpread({}, filterObject), {}, {
                    city: option.name
                  }));
                } else {
                  setFilterObject(_objectSpread(_objectSpread({}, filterObject), {}, {
                    city: ""
                  }));
                }
              },
              renderInput: params => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], _objectSpread(_objectSpread({}, params), {}, {
                label: "City",
                variant: "outlined"
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          container: true,
          spacing: 1,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            xs: 10
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            xs: 2,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
              variant: "contained",
              color: "primary",
              type: "submit",
              fullWidth: true,
              children: "Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "mt-10 text-xl",
      children: "\xA0\xA0List of Airports (Sorted A-Z):"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [!!airports && airports.map(airport => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: `/airports/${airport.iata.toLowerCase()}`,
        className: "mt-5 flex items-center shadow p-5 border",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [airport.name, ", ", airport.city]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ml-auto text-mono",
          children: airport.country
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 15
        }, undefined)]
      }, airport.iata, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, undefined), !airports && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "\xA0\xA0[ Please click on 'Search' to view the list of Available Airports! ]"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/lab":
/*!***********************************!*\
  !*** external "@material-ui/lab" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Iiwid2VicGFjazovLy8uL2hvb2tzL3VzZS1hcGktZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZUFwaURhdGEiLCJwYXRoIiwiZGVmYXVsdFZhbHVlIiwiZmlsdGVycyIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsImNhdGNoIiwiZXJyIiwicmVzcG9uc2UiLCJ0aGVuIiwiZ2V0TmFtZXMiLCJuYW1lcyIsInNldE5hbWVzIiwiZ2V0SWF0YUxpc3QiLCJhaXJwb3J0SWF0YUxpc3QiLCJzZXRBaXJwb3J0SWF0YUxpc3QiLCJnZXRDb3VudHJpZXMiLCJjb3VudHJpZXMiLCJzZXRDb3VudHJpZXMiLCJnZXRDaXRpZXMiLCJjb3VudHJ5IiwiY2l0aWVzIiwic2V0Q2l0aWVzIiwiUGFnZSIsImFpcnBvcnROYW1lcyIsImMiLCJpbml0aWFsU3RhdGUiLCJuYW1lIiwiaWF0YSIsImNpdHkiLCJmaWx0ZXJPYmplY3QiLCJzZXRGaWx0ZXJPYmplY3QiLCJjdXJyZW50Q291bnRyeUZpZWxkIiwic2V0Q3VycmVudENvdW50cnlGaWVsZCIsImNpdHlPcHRpb25zIiwic2V0Q2l0eU9wdGlvbnMiLCJuZXdPcHRpb25zIiwiZm9yRWFjaCIsInB1c2giLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInVzZUZvcm0iLCJhaXJwb3J0cyIsInNldEFpcnBvcnRzIiwiZ2V0QWlycG9ydHNMaXN0IiwibWV0aG9kIiwidXJsIiwib25TdWJtaXQiLCJwYWRkaW5nIiwib3B0aW9uIiwiZXZlbnQiLCJwYXJhbXMiLCJtYXAiLCJhaXJwb3J0IiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkEsTUFBTUEsTUFBZ0IsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtB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LFFBQ21CMEIsT0FBTyxDQUFDeEIsSUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGLGVBUUU7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsb0JBQW9Dd0IsT0FBTyxDQUFDakM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBLFNBRU9pQyxPQUFPLENBQUN6QixJQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FGSixlQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEYsRUFlRyxDQUFDYyxRQUFELGlCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBOEhELENBekxEOztBQTJMZW5CLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDaE5BLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJjb25zdCBMYXlvdXQ6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG14LWF1dG8gcHktNSBweC01IG1kOnB4LTAgbWQ6cHktMTAnPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXBpRGF0YSA9IDxUPihcclxuICBwYXRoOiBzdHJpbmcsXHJcbiAgZGVmYXVsdFZhbHVlOiBhbnksXHJcbiAgZmlsdGVyczogYW55XHJcbik6IFQgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPFQ+KGRlZmF1bHRWYWx1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0PFQ+KHBhdGgpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBlcnIucmVzcG9uc2UpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5hbWVzID0gPFQ+KHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpOiBUID0+IHtcclxuICBjb25zdCBbbmFtZXMsIHNldE5hbWVzXSA9IHVzZVN0YXRlPFQ+KGRlZmF1bHRWYWx1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0PFQ+KHBhdGgpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBlcnIucmVzcG9uc2UpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldE5hbWVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiBuYW1lcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJYXRhTGlzdCA9IDxUPihwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KTogVCA9PiB7XHJcbiAgY29uc3QgW2FpcnBvcnRJYXRhTGlzdCwgc2V0QWlycG9ydElhdGFMaXN0XSA9IHVzZVN0YXRlPFQ+KGRlZmF1bHRWYWx1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0PFQ+KHBhdGgpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBlcnIucmVzcG9uc2UpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldEFpcnBvcnRJYXRhTGlzdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gYWlycG9ydElhdGFMaXN0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvdW50cmllcyA9IDxUPihwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KTogVCA9PiB7XHJcbiAgY29uc3QgW2NvdW50cmllcywgc2V0Q291bnRyaWVzXSA9IHVzZVN0YXRlPFQ+KGRlZmF1bHRWYWx1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0PFQ+KHBhdGgpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBlcnIucmVzcG9uc2UpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldENvdW50cmllcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gY291bnRyaWVzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENpdGllcyA9IDxUPihcclxuICBwYXRoOiBzdHJpbmcsXHJcbiAgZGVmYXVsdFZhbHVlOiBhbnksXHJcbiAgY291bnRyeTogYW55XHJcbik6IFQgPT4ge1xyXG4gIGNvbnN0IFtjaXRpZXMsIHNldENpdGllc10gPSB1c2VTdGF0ZTxUPihkZWZhdWx0VmFsdWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldDxUPihwYXRoKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gZXJyLnJlc3BvbnNlKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRDaXRpZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIGNpdGllcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUFwaURhdGE7XHJcbiIsImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHVzZUFwaURhdGEsIHtcclxuICBnZXROYW1lcyxcclxuICBnZXRJYXRhTGlzdCxcclxuICBnZXRDb3VudHJpZXMsXHJcbiAgZ2V0Q2l0aWVzLFxyXG59IGZyb20gXCIuLi9ob29rcy91c2UtYXBpLWRhdGFcIjtcclxuaW1wb3J0IEFpcnBvcnQgZnJvbSBcIi4uL3R5cGVzL2FpcnBvcnRcIjtcclxuaW1wb3J0IEFpcnBvcnROYW1lIGZyb20gXCIuLi90eXBlcy9haXJwb3J0LW5hbWVcIjtcclxuaW1wb3J0IEFpcnBvcnRJYXRhIGZyb20gXCIuLi90eXBlcy9haXJwb3J0LWlhdGFcIjtcclxuaW1wb3J0IENpdHkgZnJvbSBcIi4uL3R5cGVzL2NpdHlcIjtcclxuaW1wb3J0IENvdW50cnkgZnJvbSBcIi4uL3R5cGVzL2NvdW50cnlcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIE5lc3RlZFZhbHVlLCB1c2VXYXRjaCB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkLCBTZWxlY3QgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWlycG9ydE5hbWVzID0gZ2V0TmFtZXM8QWlycG9ydE5hbWVbXT4oXCIvYXBpL25hbWVzXCIsIFtdKTtcclxuICBjb25zdCBhaXJwb3J0SWF0YUxpc3QgPSBnZXRJYXRhTGlzdDxBaXJwb3J0SWF0YVtdPihcIi9hcGkvaWF0YS1saXN0XCIsIFtdKTtcclxuICBjb25zdCBjb3VudHJpZXMgPSBnZXRDb3VudHJpZXM8Q291bnRyeVtdPihcIi9hcGkvY291bnRyaWVzXCIsIFtdKTtcclxuICBjb25zdCBjaXRpZXMgPSBnZXRDaXRpZXM8Q2l0eVtdPihcIi9hcGkvY2l0aWVzXCIsIFtdLCBudWxsKTtcclxuICBjb25zdCBjID0gZ2V0Q291bnRyaWVzPENvdW50cnlbXT4oXCIvYXBpL2NvdW50cmllc1wiLCBbXSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBpYXRhOiBcIlwiLFxyXG4gICAgY291bnRyeTogXCJcIixcclxuICAgIGNpdHk6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2ZpbHRlck9iamVjdCwgc2V0RmlsdGVyT2JqZWN0XSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRDb3VudHJ5RmllbGQsIHNldEN1cnJlbnRDb3VudHJ5RmllbGRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NpdHlPcHRpb25zLCBzZXRDaXR5T3B0aW9uc10gPSB1c2VTdGF0ZShjaXRpZXMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCEhY3VycmVudENvdW50cnlGaWVsZCkge1xyXG4gICAgICBsZXQgbmV3T3B0aW9ucyA9IFtdO1xyXG4gICAgICBjaXRpZXMuZm9yRWFjaCgoY2l0eSkgPT4ge1xyXG4gICAgICAgIGlmIChjaXR5LmNvdW50cnkgPT09IGN1cnJlbnRDb3VudHJ5RmllbGQubmFtZSkge1xyXG4gICAgICAgICAgbmV3T3B0aW9ucy5wdXNoKGNpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNldENpdHlPcHRpb25zKG5ld09wdGlvbnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q2l0eU9wdGlvbnMoY2l0aWVzKTtcclxuICAgIH1cclxuICB9LCBbY3VycmVudENvdW50cnlGaWVsZF0pO1xyXG5cclxuICB0eXBlIEZvcm1WYWx1ZXMgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpYXRhOiBzdHJpbmc7XHJcbiAgICBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgICBjaXR5OiBzdHJpbmc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtPEZvcm1WYWx1ZXM+KCk7XHJcblxyXG4gIGNvbnN0IFthaXJwb3J0cywgc2V0QWlycG9ydHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBnZXRBaXJwb3J0c0xpc3QgPSAoZmlsdGVycykgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9haXJwb3J0c1wiLFxyXG4gICAgICBkYXRhOiBmaWx0ZXJzLFxyXG4gICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGVyci5yZXNwb25zZSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0QWlycG9ydHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gaGFuZGxlU3VibWl0KCgpID0+IHtcclxuICAgIGdldEFpcnBvcnRzTGlzdChmaWx0ZXJPYmplY3QpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+Jm5ic3A7Jm5ic3A7Q29kZSBDaGFsbGVuZ2U6IEFpcnBvcnRzPC9oMT5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICB7LyogRmlsdGVycyAqL31cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjE1cHhcIiB9fT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17YWlycG9ydE5hbWVzfVxyXG4gICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb246IEFpcnBvcnROYW1lKSA9PiBvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IGFueSwgb3B0aW9uOiBBaXJwb3J0TmFtZSB8IG51bGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCEhb3B0aW9uICYmICEhb3B0aW9uLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaWx0ZXJPYmplY3QoeyAuLi5maWx0ZXJPYmplY3QsIG5hbWU6IG9wdGlvbi5uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpbHRlck9iamVjdCh7IC4uLmZpbHRlck9iamVjdCwgbmFtZTogXCJcIiB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJOYW1lXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICBpZD1cImlhdGFcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17YWlycG9ydElhdGFMaXN0fVxyXG4gICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb246IEFpcnBvcnRJYXRhKSA9PiBvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IGFueSwgb3B0aW9uOiBBaXJwb3J0SWF0YSB8IG51bGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCEhb3B0aW9uICYmICEhb3B0aW9uLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaWx0ZXJPYmplY3QoeyAuLi5maWx0ZXJPYmplY3QsIGlhdGE6IG9wdGlvbi5uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpbHRlck9iamVjdCh7IC4uLmZpbHRlck9iamVjdCwgaWF0YTogXCJcIiB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJJQVRBXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICBpZD1cImNvdW50cnlcIlxyXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiY291bnRyeVwiKX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvdW50cmllc31cclxuICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uOiBDb3VudHJ5KSA9PiBvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IGFueSwgb3B0aW9uOiBDb3VudHJ5IHwgbnVsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoISFvcHRpb24gJiYgISFvcHRpb24ubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpbHRlck9iamVjdCh7IC4uLmZpbHRlck9iamVjdCwgY291bnRyeTogb3B0aW9uLm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudENvdW50cnlGaWVsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpbHRlck9iamVjdCh7IC4uLmZpbHRlck9iamVjdCwgY291bnRyeTogXCJcIiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q291bnRyeUZpZWxkKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkNvdW50cnlcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgIGlkPVwiY2l0eVwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtjaXR5T3B0aW9uc31cclxuICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uOiBDaXR5KSA9PiBvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IGFueSwgb3B0aW9uOiBDaXR5IHwgbnVsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoISFvcHRpb24gJiYgISFvcHRpb24ubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpbHRlck9iamVjdCh7IC4uLmZpbHRlck9iamVjdCwgY2l0eTogb3B0aW9uLm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmlsdGVyT2JqZWN0KHsgLi4uZmlsdGVyT2JqZWN0LCBjaXR5OiBcIlwiIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkNpdHlcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9PjwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICB7LyogIExpc3Qgb2YgQWlycG9ydHMgICovfVxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMTAgdGV4dC14bFwiPlxyXG4gICAgICAgICZuYnNwOyZuYnNwO0xpc3Qgb2YgQWlycG9ydHMgKFNvcnRlZCBBLVopOlxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHshIWFpcnBvcnRzICYmXHJcbiAgICAgICAgICBhaXJwb3J0cy5tYXAoKGFpcnBvcnQpID0+IChcclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXtgL2FpcnBvcnRzLyR7YWlycG9ydC5pYXRhLnRvTG93ZXJDYXNlKCl9YH1cclxuICAgICAgICAgICAgICBrZXk9e2FpcnBvcnQuaWF0YX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC01IGZsZXggaXRlbXMtY2VudGVyIHNoYWRvdyBwLTUgYm9yZGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7YWlycG9ydC5uYW1lfSwge2FpcnBvcnQuY2l0eX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gdGV4dC1tb25vXCI+e2FpcnBvcnQuY291bnRyeX08L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgeyFhaXJwb3J0cyAmJiAoXHJcbiAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICZuYnNwOyZuYnNwO1sgUGxlYXNlIGNsaWNrIG9uICdTZWFyY2gnIHRvIHZpZXcgdGhlIGxpc3Qgb2YgQXZhaWxhYmxlXHJcbiAgICAgICAgICAgIEFpcnBvcnRzISBdXHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9