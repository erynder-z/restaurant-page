/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    background: rgb(248, 184, 88);\n    font-family: 'Zilla Slab', serif;\n}\n\n.wrapper-upper {\n    display: flex;\n    flex-direction: column;\n    min-height: 15vh;\n}\n\n.background-image {\n    position: fixed;\n    height: 100vh;\n    z-index: -1;\n    opacity: 0.2;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n#logo {\n    width: 25%;\n    height: auto;\n}\n\n@media all and (max-width:500px) {\n\n    #logo {\n        width: 50%;\n    }\n\n}\n\n.nav-wrapper {\n    padding: 50px;\n}\n\n.nav ul {\n    border: 1px solid black;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    background: rgb(255, 136, 0);\n    min-height: 5vh;\n    font-size: 18px;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\n.nav li {\n    flex: 3;\n}\n\n.nav li a {\n    text-decoration: none;\n    color: rgb(46, 46, 46);\n    font-weight: bold;\n}\n\n.flex-nav .social {\n    flex: 3;\n}\n\n\n@media all and (max-width:1000px) {\n\n    .nav ul {\n        flex-wrap: wrap;\n        text-align: center;\n        min-height: 100%;\n\n    }\n\n    .nav li {\n        flex: 0 1 20%;\n    }\n\n    .nav .social {\n        flex: 1 1 auto;\n    }\n\n}\n\n@media all and (max-width:500px) {\n\n    .nav li {\n        flex-basis: 100%;\n        height: 25px;\n    }\n\n}\n\n.head-section h1 {\n    font-size: 60px;\n    text-align: center;\n}\n\n.head-section h3 {\n    font-size: 35px;\n}\n\n.head-section ul {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.head-section {\n    min-height: 75vh;\n    width: 85vw;\n}\n\n.head-section,\n.about,\n.hours {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 25px 25px 25px;\n    text-align: center;\n    margin: 0 auto;\n    border-bottom: solid 1px black;\n}\n\n.hours ul {\n    list-style: none;\n    padding: 0;\n}\n\n.reservations {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-bottom: solid 1px black;\n    padding-bottom: 25px;\n}\n\n.status {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 25px 0;\n    border-bottom: solid 1px black;\n    padding-bottom: 25px;\n\n\n}\n\n#current-status {\n    display: flex;\n    height: 40px;\n    width: 100px;\n    background: rgb(82, 134, 4);\n    color: white;\n    justify-content: center;\n    align-items: center;\n}\n\n.contact {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.submit-button {\n    margin-top: 20px;\n}\n\n.input-textarea {\n    width: 35vw;\n    height: 20vh;\n}\n\n@media all and (max-width:500px) {\n    .input-textarea {\n        width: 80vw;\n    }\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    min-height: 5vh;\n    margin: 0 10vw;\n}\n\n\n@media (max-width: 500px) {\n    footer {\n        flex-direction: column;\n        text-align: center;\n    }\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 80vh;\n}\n\n@media (max-width: 500px) {\n    .menu {\n        flex-direction: column;\n    }\n}\n\n.gallery {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1 1 0;\n    max-width: 90vw;\n    justify-content: center;\n}\n\n@media all and (max-width:500px) {\n    .gallery {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n}\n\ndiv.gallery {\n    border: 1px solid #ccc;\n}\n\ndiv.gallery:hover {\n    border: 1px solid #777;\n}\n\ndiv.gallery img {\n    width: 250px;\n    height: 200px;\n}\n\ndiv.desc {\n    padding: 15px;\n    text-align: center;\n}\n\n.responsive {\n    display: flex;\n    flex-direction: column;\n    padding: 0 6px;\n    float: left;\n}\n\n@media only screen and (max-width: 700px) {\n    .responsive {\n        width: 49.99999%;\n        margin: 6px 0;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    .responsive {\n        width: 100%;\n        padding: 0 25px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,WAAW;IACX,YAAY;IACZ,SAAS;IACT,2BAA2B;AAC/B;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;AAEA;;IAEI;QACI,UAAU;IACd;;AAEJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,aAAa;IACb,4BAA4B;IAC5B,eAAe;IACf,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,OAAO;AACX;;;AAGA;;IAEI;QACI,eAAe;QACf,kBAAkB;QAClB,gBAAgB;;IAEpB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,cAAc;IAClB;;AAEJ;;AAEA;;IAEI;QACI,gBAAgB;QAChB,YAAY;IAChB;;AAEJ;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;;;IAGI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,8BAA8B;IAC9B,oBAAoB;;;AAGxB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,2BAA2B;IAC3B,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,cAAc;AAClB;;;AAGA;IACI;QACI,sBAAsB;QACtB,kBAAkB;IACtB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI;QACI,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,mBAAmB;IACvB;AACJ;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,WAAW;AACf;;AAEA;IACI;QACI,gBAAgB;QAChB,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,WAAW;QACX,eAAe;IACnB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap');\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    background: rgb(248, 184, 88);\n    font-family: 'Zilla Slab', serif;\n}\n\n.wrapper-upper {\n    display: flex;\n    flex-direction: column;\n    min-height: 15vh;\n}\n\n.background-image {\n    position: fixed;\n    height: 100vh;\n    z-index: -1;\n    opacity: 0.2;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n#logo {\n    width: 25%;\n    height: auto;\n}\n\n@media all and (max-width:500px) {\n\n    #logo {\n        width: 50%;\n    }\n\n}\n\n.nav-wrapper {\n    padding: 50px;\n}\n\n.nav ul {\n    border: 1px solid black;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    background: rgb(255, 136, 0);\n    min-height: 5vh;\n    font-size: 18px;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\n.nav li {\n    flex: 3;\n}\n\n.nav li a {\n    text-decoration: none;\n    color: rgb(46, 46, 46);\n    font-weight: bold;\n}\n\n.flex-nav .social {\n    flex: 3;\n}\n\n\n@media all and (max-width:1000px) {\n\n    .nav ul {\n        flex-wrap: wrap;\n        text-align: center;\n        min-height: 100%;\n\n    }\n\n    .nav li {\n        flex: 0 1 20%;\n    }\n\n    .nav .social {\n        flex: 1 1 auto;\n    }\n\n}\n\n@media all and (max-width:500px) {\n\n    .nav li {\n        flex-basis: 100%;\n        height: 25px;\n    }\n\n}\n\n.head-section h1 {\n    font-size: 60px;\n    text-align: center;\n}\n\n.head-section h3 {\n    font-size: 35px;\n}\n\n.head-section ul {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.head-section {\n    min-height: 75vh;\n    width: 85vw;\n}\n\n.head-section,\n.about,\n.hours {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 25px 25px 25px;\n    text-align: center;\n    margin: 0 auto;\n    border-bottom: solid 1px black;\n}\n\n.hours ul {\n    list-style: none;\n    padding: 0;\n}\n\n.reservations {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-bottom: solid 1px black;\n    padding-bottom: 25px;\n}\n\n.status {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 25px 0;\n    border-bottom: solid 1px black;\n    padding-bottom: 25px;\n\n\n}\n\n#current-status {\n    display: flex;\n    height: 40px;\n    width: 100px;\n    background: rgb(82, 134, 4);\n    color: white;\n    justify-content: center;\n    align-items: center;\n}\n\n.contact {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.submit-button {\n    margin-top: 20px;\n}\n\n.input-textarea {\n    width: 35vw;\n    height: 20vh;\n}\n\n@media all and (max-width:500px) {\n    .input-textarea {\n        width: 80vw;\n    }\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    min-height: 5vh;\n    margin: 0 10vw;\n}\n\n\n@media (max-width: 500px) {\n    footer {\n        flex-direction: column;\n        text-align: center;\n    }\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 80vh;\n}\n\n@media (max-width: 500px) {\n    .menu {\n        flex-direction: column;\n    }\n}\n\n.gallery {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1 1 0;\n    max-width: 90vw;\n    justify-content: center;\n}\n\n@media all and (max-width:500px) {\n    .gallery {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n}\n\ndiv.gallery {\n    border: 1px solid #ccc;\n}\n\ndiv.gallery:hover {\n    border: 1px solid #777;\n}\n\ndiv.gallery img {\n    width: 250px;\n    height: 200px;\n}\n\ndiv.desc {\n    padding: 15px;\n    text-align: center;\n}\n\n.responsive {\n    display: flex;\n    flex-direction: column;\n    padding: 0 6px;\n    float: left;\n}\n\n@media only screen and (max-width: 700px) {\n    .responsive {\n        width: 49.99999%;\n        margin: 6px 0;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    .responsive {\n        width: 100%;\n        padding: 0 25px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHours": () => (/* binding */ createHours),
/* harmony export */   "createReservations": () => (/* binding */ createReservations),
/* harmony export */   "createStatus": () => (/* binding */ createStatus),
/* harmony export */   "createContacts": () => (/* binding */ createContacts)
/* harmony export */ });
const createHours = () => {

    const hours = document.createElement("div");
    hours.classList.add("hours");
    const heading1 = document.createElement("h3");
    heading1.innerText = "Opening hours:";
    hours.appendChild(heading1);
    const ul = document.createElement("ul");
    hours.appendChild(ul);
    const li1 = document.createElement("li");
    li1.innerText = "Monday (closed)";
    ul.appendChild(li1);
    const li2 = document.createElement("li");
    li2.innerText = "Tuesday: 11:00 - 22:00";
    ul.appendChild(li2);
    const li3 = document.createElement("li");
    li3.innerText = "Wednesday 11:00 - 22:00";
    ul.appendChild(li3);
    const li4 = document.createElement("li");
    li4.innerText = "Thursday 11:00 - 22:00";
    ul.appendChild(li4);
    const li5 = document.createElement("li");
    li5.innerText = "Friday 11:00 - 22:00";
    ul.appendChild(li5);
    const li6 = document.createElement("li");
    li6.innerText = "Saturday 11:00 - 22:00";
    ul.appendChild(li6);
    const li7 = document.createElement("li");
    li7.innerText = "Sunday 11:00 - 22:00";
    ul.appendChild(li7);

    return hours
}

const createReservations = () => {

    const reservations = document.createElement("div");
    reservations.classList.add("reservations");
    const heading1 = document.createElement("h3");
    heading1.innerText = "Tabvle reservations";
    reservations.appendChild(heading1);
    const input = document.createElement("input");
    input.type = "datetime-local";
    reservations.appendChild(input);

    return reservations
}

const createStatus = () => {
    const status = document.createElement("div");
    status.classList.add("status");
    const heading1 = document.createElement("h3");
    heading1.innerText = "Current status:";
    status.appendChild(heading1);
    const current = document.createElement("div");
    current.id = "current-status";
    current.innerText = "Not so busy";
    status.appendChild(current);

    return status
}

const createContacts = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("contact-wrapper");
    const contact = document.createElement("div");
    contact.classList.add("contact");
    wrapper.appendChild(contact);
    const heading1 = document.createElement("h2");
    heading1.innerText = "Contact us:";
    contact.appendChild(heading1);
    const textarea = document.createElement("textarea");
    textarea.classList.add("input-textarea");
    textarea.placeholder = "Enter your message here...";
    contact.appendChild(textarea);

    const contact2 = document.createElement("div");
    contact2.classList.add("contact");
    wrapper.appendChild(contact2);
    const button = document.createElement("button");
    button.classList.add("submit-button");
    button.id = "submit";
    button.type = "submit";
    button.innerText = "Send message";
    contact2.appendChild(button);

    const contact3 = document.createElement("div");
    contact3.classList.add("contact");
    wrapper.appendChild(contact3);
    const heading2 = document.createElement("h4");
    heading2.innerText = "Mail:";
    contact3.appendChild(heading2);
    const link = document.createElement("a");
    link.href = "mailto:yamato@nood.le";
    link.innerText = " yamato@nood.le"
    heading2.appendChild(link);
    const heading3 = document.createElement("h4");
    heading3.innerText = "Phone: +49 1234 / 56789";
    contact3.appendChild(heading3);


    return wrapper

}



/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHead": () => (/* binding */ createHead)
/* harmony export */ });
const createHead = () => {
    const head = document.createElement("div");
    head.classList.add("head-section");

    const h1 = document.createElement("h1");
    h1.innerText = "Yamato Ramen";
    head.appendChild(h1);

    const h3 = document.createElement("h3");
    h3.innerText = "Yummy ラーメン";
    head.appendChild(h3);

    const image = document.createElement("img");
    image.src = "../src/images/ramen-logo.png";
    image.id = "logo";
    head.appendChild(image);

    const p1 = document.createElement("p");
    p1.innerText = "Autentic japanese style Ramen for every taste.";

    const ul = document.createElement("ul");
    p1.appendChild(ul);
    head.append(p1);

    const li1 = document.createElement("li");
    li1.innerText = "Shōyu-Ramen";
    const li2 = document.createElement("li");
    li2.innerText = "Shio-Ramen";
    const li3 = document.createElement("li");
    li3.innerText = "Miso-Ramen";

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    const p2 = document.createElement("p");
    p2.innerText = "Try them all and discover your favorite! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum obcaecati aliquam nisi unde provident ad debitis harum ea sed natus, ut quibusdam inventore, assumenda vel! Molestias maiores temporibus odit provident ratione quos odio impedit laborum magnam sunt, asperiores distinctio et necessitatibus dicta ut doloribus commodi ipsa quidem libero quae. Modi.";
    p1.appendChild(p2);

    return head
}



/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
const createMenu = () => {

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const heading = document.createElement("h1");
    heading.innerText = "Menu";
    menu.appendChild(heading);

    const gallery = document.createElement("div");
    gallery.classList.add("gallery");
    menu.appendChild(gallery)
    const responsive1 = document.createElement("div");
    responsive1.classList.add("responsive");
    gallery.appendChild(responsive1);
    const item1 = document.createElement("div");
    responsive1.appendChild(item1);
    const a1 = document.createElement("a");
    a1.target = "_blank";
    a1.href = "../src/images/ramen4.jpg";
    item1.appendChild(a1);
    const img1 = document.createElement("img");
    img1.src = "../src/images/ramen4.jpg";
    img1.alt = "Ramen";
    a1.appendChild(img1);
    const desc1 = document.createElement("div");
    desc1.classList.add("desc");
    desc1.innerText = "Ramen\r\n 9,50€";
    item1.appendChild(desc1);

    const responsive2 = document.createElement("div");
    responsive2.classList.add("responsive");
    gallery.appendChild(responsive2);
    const item2 = document.createElement("div");
    responsive2.appendChild(item2);
    const a2 = document.createElement("a");
    a2.target = "_blank";
    a2.href = "../src/images/ramen2.jpg";
    item2.appendChild(a2);
    const img2 = document.createElement("img");
    img2.src = "../src/images/ramen2.jpg";
    img2.alt = "Ramen";
    a2.appendChild(img2);
    const desc2 = document.createElement("div");
    desc2.classList.add("desc");
    desc2.innerText = "Ramen\r\n 10,50€";
    item2.appendChild(desc2);

    const responsive3 = document.createElement("div");
    responsive3.classList.add("responsive");
    gallery.appendChild(responsive3);
    const item3 = document.createElement("div");
    responsive3.appendChild(item3);
    const a3 = document.createElement("a");
    a3.target = "_blank";
    a3.href = "../src/images/ramen3.jpg";
    item3.appendChild(a3);
    const img3 = document.createElement("img");
    img3.src = "../src/images/ramen3.jpg";
    img3.alt = "Ramen";
    a3.appendChild(img3);
    const desc3 = document.createElement("div");
    desc3.classList.add("desc");
    desc3.innerText = "Ramen\r\n 11,00€";
    item3.appendChild(desc3);

    const responsive4 = document.createElement("div");
    responsive4.classList.add("responsive");
    gallery.appendChild(responsive4);
    const item4 = document.createElement("div");
    responsive4.appendChild(item4);
    const a4 = document.createElement("a");
    a4.target = "_blank";
    a4.href = "../src/images/ramen6.jpg";
    item4.appendChild(a4);
    const img4 = document.createElement("img");
    img4.src = "../src/images/ramen6.jpg";
    img4.alt = "Ramen";
    a4.appendChild(img4);
    const desc4 = document.createElement("div");
    desc4.classList.add("desc");
    desc4.innerText = "Ramen\r\n 12,50€";
    item4.appendChild(desc4);

    return menu
}



/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBackground": () => (/* binding */ createBackground),
/* harmony export */   "createWrapperUpper": () => (/* binding */ createWrapperUpper),
/* harmony export */   "createNavWrap": () => (/* binding */ createNavWrap),
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
const createBackground = () => {
    const image = document.createElement("img");
    image.classList.add("background-image")
    image.src = "../src/images/ramen-background.jpg";
    image.alt = "tasty ramen";
    return image
}

const createWrapperUpper = () => {
    const wrapperU = document.createElement("div");
    wrapperU.classList.add("wrapper-upper");
    return wrapperU
}

const createNavWrap = () => {
    const navWrap = document.createElement("div");
    navWrap.classList.add("nav-wrapper");
    return navWrap
}

const createNav = () => {

    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const navUl = document.createElement("ul");
    nav.appendChild(navUl);

    const li1 = document.createElement("li");
    navUl.appendChild(li1);
    const li1A = document.createElement("a");
    li1.appendChild(li1A);
    li1A.href = "#";
    li1A.innerText = "Home";
    li1A.id = "home";

    const li2 = document.createElement("li");
    navUl.appendChild(li2);
    const li2A = document.createElement("a");
    li2.appendChild(li2A);
    li2A.href = "#";
    li2A.innerText = "Menu";
    li2A.id ="menu";

    const li3 = document.createElement("li");
    navUl.appendChild(li3);
    const li3A = document.createElement("a");
    li3.appendChild(li3A);
    li3A.href = "#";
    li3A.innerText = "Contact";
    li3A.id = "contact";

    const so1 = document.createElement("li");
    so1.classList.add("social");
    navUl.appendChild(so1);
    const so1A = document.createElement("a");
    so1.appendChild(so1A);
    so1A.href = "#";
    const icon1 = document.createElement("i");
    icon1.classList.add("fa", "fa-facebook");
    so1A.appendChild(icon1);

    const so2 = document.createElement("li");
    so2.classList.add("social");
    navUl.appendChild(so2);
    const so2A = document.createElement("a");
    so2.appendChild(so2A);
    so2A.href = "#";
    const icon2 = document.createElement("i");
    icon2.classList.add("fa", "fa-twitter");
    so2A.appendChild(icon2);

    const so3 = document.createElement("li");
    so3.classList.add("social");
    navUl.appendChild(so3);
    const so3A = document.createElement("a");
    so3.appendChild(so3A);
    so3A.href = "#";
    const icon3 = document.createElement("i");
    icon3.classList.add("fa", "fa-instagram");
    so3A.appendChild(icon3);

    return nav
}

const createFooter = () => {
    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.innerText = "Copyright (c) erynder-Z.\r\n All Rights Reserved."
    footer.appendChild(p);
    const a = document.createElement("a");
    a.href = "#";
    a.rel = "noopener noreferrer";
    a.innerText = "Imprint";
    footer.appendChild(a);

    return footer
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");










const content = document.getElementById("content");

const initialize = (() => {
    content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createBackground)());
    const wrapperU = content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createWrapperUpper)());
    const navWrap = wrapperU.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createNavWrap)());
    navWrap.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createNav)());
    content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_2__.createHead)());
    content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createFooter)());

})();

const homeButton = () => {
    const homeBtn = document.getElementById("home");
    homeBtn.addEventListener("click", () => {
        clearContents();
        content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createBackground)());
        const wrapperU = content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createWrapperUpper)());
        const navWrap = wrapperU.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createNavWrap)());
        navWrap.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createNav)());
        content.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_2__.createHead)());
        content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createFooter)());
        homeButton();
        menuButton();
        contactButton();
    });
}

const menuButton = () => {
    const menuBtn = document.getElementById("menu");
    menuBtn.addEventListener("click", () => {
        clearContents();
        content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createBackground)());
        const wrapperU = content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createWrapperUpper)());
        const navWrap = wrapperU.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createNavWrap)());
        navWrap.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createNav)());
        content.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__.createMenu)());
        content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createFooter)());
        homeButton();
        menuButton();
        contactButton();
    });
}

const contactButton = () => {
    const contactBtn = document.getElementById("contact");
    contactBtn.addEventListener("click", () => {
        clearContents();
        content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createBackground)());
        const wrapperU = content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createWrapperUpper)());
        const navWrap = wrapperU.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createNavWrap)());
        navWrap.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createNav)());
        content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_4__.createHours)());
        content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_4__.createReservations)());
        content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_4__.createStatus)());
        content.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_4__.createContacts)());
        content.appendChild((0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.createFooter)());
        homeButton();
        menuButton();
        contactButton();
    });
}

function clearContents() {
    content.innerHTML = "";
}

homeButton();
menuButton();
contactButton();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGVBQWUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxRQUFRLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLHlHQUF5Ryw4QkFB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7VUNqR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7O0FBUUE7O0FBSUU7O0FBSUE7O0FBT0c7O0FBRTFCOztBQUVBO0FBQ0Esd0JBQXdCLDZEQUFnQjtBQUN4Qyx5Q0FBeUMsK0RBQWtCO0FBQzNELHlDQUF5QywwREFBYTtBQUN0RCx3QkFBd0Isc0RBQVM7QUFDakMsd0JBQXdCLHlEQUFVO0FBQ2xDLHdCQUF3Qix5REFBWTs7QUFFcEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2REFBZ0I7QUFDNUMsNkNBQTZDLCtEQUFrQjtBQUMvRCw2Q0FBNkMsMERBQWE7QUFDMUQsNEJBQTRCLHNEQUFTO0FBQ3JDLDRCQUE0Qix5REFBVTtBQUN0Qyw0QkFBNEIseURBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZEQUFnQjtBQUM1Qyw2Q0FBNkMsK0RBQWtCO0FBQy9ELDZDQUE2QywwREFBYTtBQUMxRCw0QkFBNEIsc0RBQVM7QUFDckMsNEJBQTRCLHlEQUFVO0FBQ3RDLDRCQUE0Qix5REFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkRBQWdCO0FBQzVDLDZDQUE2QywrREFBa0I7QUFDL0QsNkNBQTZDLDBEQUFhO0FBQzFELDRCQUE0QixzREFBUztBQUNyQyw0QkFBNEIsNkRBQVc7QUFDdkMsNEJBQTRCLG9FQUFrQjtBQUM5Qyw0QkFBNEIsOERBQVk7QUFDeEMsNEJBQTRCLGdFQUFjO0FBQzFDLDRCQUE0Qix5REFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9WmlsbGErU2xhYiZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNDgsIDE4NCwgODgpO1xcbiAgICBmb250LWZhbWlseTogJ1ppbGxhIFNsYWInLCBzZXJpZjtcXG59XFxuXFxuLndyYXBwZXItdXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxNXZoO1xcbn1cXG5cXG4uYmFja2dyb3VuZC1pbWFnZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjUwMHB4KSB7XFxuXFxuICAgICNsb2dvIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG5cXG59XFxuXFxuLm5hdi13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuLm5hdiB1bCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDEzNiwgMCk7XFxuICAgIG1pbi1oZWlnaHQ6IDV2aDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubmF2IGxpIHtcXG4gICAgZmxleDogMztcXG59XFxuXFxuLm5hdiBsaSBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZsZXgtbmF2IC5zb2NpYWwge1xcbiAgICBmbGV4OiAzO1xcbn1cXG5cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjEwMDBweCkge1xcblxcbiAgICAubmF2IHVsIHtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuXFxuICAgIH1cXG5cXG4gICAgLm5hdiBsaSB7XFxuICAgICAgICBmbGV4OiAwIDEgMjAlO1xcbiAgICB9XFxuXFxuICAgIC5uYXYgLnNvY2lhbCB7XFxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjUwMHB4KSB7XFxuXFxuICAgIC5uYXYgbGkge1xcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgfVxcblxcbn1cXG5cXG4uaGVhZC1zZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkLXNlY3Rpb24gaDMge1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbi5oZWFkLXNlY3Rpb24gdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5oZWFkLXNlY3Rpb24ge1xcbiAgICBtaW4taGVpZ2h0OiA3NXZoO1xcbiAgICB3aWR0aDogODV2dztcXG59XFxuXFxuLmhlYWQtc2VjdGlvbixcXG4uYWJvdXQsXFxuLmhvdXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjVweCAyNXB4IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmhvdXJzIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnJlc2VydmF0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4uc3RhdHVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjVweCAwO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcblxcblxcbn1cXG5cXG4jY3VycmVudC1zdGF0dXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDgyLCAxMzQsIDQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5pbnB1dC10ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAzNXZ3O1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NTAwcHgpIHtcXG4gICAgLmlucHV0LXRleHRhcmVhIHtcXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICB9XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWluLWhlaWdodDogNXZoO1xcbiAgICBtYXJnaW46IDAgMTB2dztcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIGZvb3RlciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogODB2aDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5tZW51IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XFxuXFxuLmdhbGxlcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXg6IDEgMSAwO1xcbiAgICBtYXgtd2lkdGg6IDkwdnc7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjUwMHB4KSB7XFxuICAgIC5nYWxsZXJ5IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbmRpdi5nYWxsZXJ5IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG59XFxuXFxuZGl2LmdhbGxlcnk6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xcbn1cXG5cXG5kaXYuZ2FsbGVyeSBpbWcge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcblxcbmRpdi5kZXNjIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmVzcG9uc2l2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDAgNnB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAucmVzcG9uc2l2ZSB7XFxuICAgICAgICB3aWR0aDogNDkuOTk5OTklO1xcbiAgICAgICAgbWFyZ2luOiA2cHggMDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5yZXNwb25zaXZlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSTtRQUNJLFVBQVU7SUFDZDs7QUFFSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7OztBQUdBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixnQkFBZ0I7O0lBRXBCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7QUFFSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixvQkFBb0I7OztBQUd4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVppbGxhK1NsYWImZGlzcGxheT1zd2FwJyk7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAxODQsIDg4KTtcXG4gICAgZm9udC1mYW1pbHk6ICdaaWxsYSBTbGFiJywgc2VyaWY7XFxufVxcblxcbi53cmFwcGVyLXVwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTV2aDtcXG59XFxuXFxuLmJhY2tncm91bmQtaW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo1MDBweCkge1xcblxcbiAgICAjbG9nbyB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICB9XFxuXFxufVxcblxcbi5uYXYtd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5uYXYgdWwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxMzYsIDApO1xcbiAgICBtaW4taGVpZ2h0OiA1dmg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5hdiBsaSB7XFxuICAgIGZsZXg6IDM7XFxufVxcblxcbi5uYXYgbGkgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mbGV4LW5hdiAuc29jaWFsIHtcXG4gICAgZmxleDogMztcXG59XFxuXFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDoxMDAwcHgpIHtcXG5cXG4gICAgLm5hdiB1bCB7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xcblxcbiAgICB9XFxuXFxuICAgIC5uYXYgbGkge1xcbiAgICAgICAgZmxleDogMCAxIDIwJTtcXG4gICAgfVxcblxcbiAgICAubmF2IC5zb2NpYWwge1xcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo1MDBweCkge1xcblxcbiAgICAubmF2IGxpIHtcXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIH1cXG5cXG59XFxuXFxuLmhlYWQtc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZC1zZWN0aW9uIGgzIHtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4uaGVhZC1zZWN0aW9uIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uaGVhZC1zZWN0aW9uIHtcXG4gICAgbWluLWhlaWdodDogNzV2aDtcXG4gICAgd2lkdGg6IDg1dnc7XFxufVxcblxcbi5oZWFkLXNlY3Rpb24sXFxuLmFib3V0LFxcbi5ob3VycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDI1cHggMjVweCAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcblxcbi5ob3VycyB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5yZXNlcnZhdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG59XFxuXFxuLnN0YXR1cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDI1cHggMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG5cXG5cXG59XFxuXFxuI2N1cnJlbnQtc3RhdHVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig4MiwgMTM0LCA0KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXQtdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMzV2dztcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjUwMHB4KSB7XFxuICAgIC5pbnB1dC10ZXh0YXJlYSB7XFxuICAgICAgICB3aWR0aDogODB2dztcXG4gICAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1pbi1oZWlnaHQ6IDV2aDtcXG4gICAgbWFyZ2luOiAwIDEwdnc7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICBmb290ZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAubWVudSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblxcbi5nYWxsZXJ5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4OiAxIDEgMDtcXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo1MDBweCkge1xcbiAgICAuZ2FsbGVyeSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG5kaXYuZ2FsbGVyeSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxufVxcblxcbmRpdi5nYWxsZXJ5OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc3NztcXG59XFxuXFxuZGl2LmdhbGxlcnkgaW1nIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG5kaXYuZGVzYyB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJlc3BvbnNpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwIDZweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgLnJlc3BvbnNpdmUge1xcbiAgICAgICAgd2lkdGg6IDQ5Ljk5OTk5JTtcXG4gICAgICAgIG1hcmdpbjogNnB4IDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAucmVzcG9uc2l2ZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZUhvdXJzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcbiAgICBjb25zdCBoZWFkaW5nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkaW5nMS5pbm5lclRleHQgPSBcIk9wZW5pbmcgaG91cnM6XCI7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaGVhZGluZzEpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKHVsKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkxLmlubmVyVGV4dCA9IFwiTW9uZGF5IChjbG9zZWQpXCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkyLmlubmVyVGV4dCA9IFwiVHVlc2RheTogMTE6MDAgLSAyMjowMFwiO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpMy5pbm5lclRleHQgPSBcIldlZG5lc2RheSAxMTowMCAtIDIyOjAwXCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcbiAgICBjb25zdCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGk0LmlubmVyVGV4dCA9IFwiVGh1cnNkYXkgMTE6MDAgLSAyMjowMFwiO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpNCk7XG4gICAgY29uc3QgbGk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpNS5pbm5lclRleHQgPSBcIkZyaWRheSAxMTowMCAtIDIyOjAwXCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGk1KTtcbiAgICBjb25zdCBsaTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGk2LmlubmVyVGV4dCA9IFwiU2F0dXJkYXkgMTE6MDAgLSAyMjowMFwiO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpNik7XG4gICAgY29uc3QgbGk3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpNy5pbm5lclRleHQgPSBcIlN1bmRheSAxMTowMCAtIDIyOjAwXCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGk3KTtcblxuICAgIHJldHVybiBob3Vyc1xufVxuXG5jb25zdCBjcmVhdGVSZXNlcnZhdGlvbnMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCByZXNlcnZhdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlc2VydmF0aW9ucy5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2YXRpb25zXCIpO1xuICAgIGNvbnN0IGhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWRpbmcxLmlubmVyVGV4dCA9IFwiVGFidmxlIHJlc2VydmF0aW9uc1wiO1xuICAgIHJlc2VydmF0aW9ucy5hcHBlbmRDaGlsZChoZWFkaW5nMSk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiZGF0ZXRpbWUtbG9jYWxcIjtcbiAgICByZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHJlc2VydmF0aW9uc1xufVxuXG5jb25zdCBjcmVhdGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZChcInN0YXR1c1wiKTtcbiAgICBjb25zdCBoZWFkaW5nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoZWFkaW5nMS5pbm5lclRleHQgPSBcIkN1cnJlbnQgc3RhdHVzOlwiO1xuICAgIHN0YXR1cy5hcHBlbmRDaGlsZChoZWFkaW5nMSk7XG4gICAgY29uc3QgY3VycmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VycmVudC5pZCA9IFwiY3VycmVudC1zdGF0dXNcIjtcbiAgICBjdXJyZW50LmlubmVyVGV4dCA9IFwiTm90IHNvIGJ1c3lcIjtcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQoY3VycmVudCk7XG5cbiAgICByZXR1cm4gc3RhdHVzXG59XG5cbmNvbnN0IGNyZWF0ZUNvbnRhY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtd3JhcHBlclwiKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgY29uc3QgaGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGluZzEuaW5uZXJUZXh0ID0gXCJDb250YWN0IHVzOlwiO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaGVhZGluZzEpO1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC10ZXh0YXJlYVwiKTtcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9IFwiRW50ZXIgeW91ciBtZXNzYWdlIGhlcmUuLi5cIjtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHRleHRhcmVhKTtcblxuICAgIGNvbnN0IGNvbnRhY3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0Mi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3QyKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ1dHRvblwiKTtcbiAgICBidXR0b24uaWQgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gXCJTZW5kIG1lc3NhZ2VcIjtcbiAgICBjb250YWN0Mi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgY29uc3QgY29udGFjdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3QzLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdDMpO1xuICAgIGNvbnN0IGhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGhlYWRpbmcyLmlubmVyVGV4dCA9IFwiTWFpbDpcIjtcbiAgICBjb250YWN0My5hcHBlbmRDaGlsZChoZWFkaW5nMik7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuaHJlZiA9IFwibWFpbHRvOnlhbWF0b0Bub29kLmxlXCI7XG4gICAgbGluay5pbm5lclRleHQgPSBcIiB5YW1hdG9Abm9vZC5sZVwiXG4gICAgaGVhZGluZzIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgY29uc3QgaGVhZGluZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgaGVhZGluZzMuaW5uZXJUZXh0ID0gXCJQaG9uZTogKzQ5IDEyMzQgLyA1Njc4OVwiO1xuICAgIGNvbnRhY3QzLmFwcGVuZENoaWxkKGhlYWRpbmczKTtcblxuXG4gICAgcmV0dXJuIHdyYXBwZXJcblxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUhvdXJzLFxuICAgIGNyZWF0ZVJlc2VydmF0aW9ucyxcbiAgICBjcmVhdGVTdGF0dXMsXG4gICAgY3JlYXRlQ29udGFjdHNcbn0iLCJjb25zdCBjcmVhdGVIZWFkID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWQtc2VjdGlvblwiKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmlubmVyVGV4dCA9IFwiWWFtYXRvIFJhbWVuXCI7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoMy5pbm5lclRleHQgPSBcIll1bW15IOODqeODvOODoeODs1wiO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbi1sb2dvLnBuZ1wiO1xuICAgIGltYWdlLmlkID0gXCJsb2dvXCI7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAxLmlubmVyVGV4dCA9IFwiQXV0ZW50aWMgamFwYW5lc2Ugc3R5bGUgUmFtZW4gZm9yIGV2ZXJ5IHRhc3RlLlwiO1xuXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgcDEuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGhlYWQuYXBwZW5kKHAxKTtcblxuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTEuaW5uZXJUZXh0ID0gXCJTaMWNeXUtUmFtZW5cIjtcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkyLmlubmVyVGV4dCA9IFwiU2hpby1SYW1lblwiO1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaTMuaW5uZXJUZXh0ID0gXCJNaXNvLVJhbWVuXCI7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkzKTtcblxuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDIuaW5uZXJUZXh0ID0gXCJUcnkgdGhlbSBhbGwgYW5kIGRpc2NvdmVyIHlvdXIgZmF2b3JpdGUhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFYXJ1bSBvYmNhZWNhdGkgYWxpcXVhbSBuaXNpIHVuZGUgcHJvdmlkZW50IGFkIGRlYml0aXMgaGFydW0gZWEgc2VkIG5hdHVzLCB1dCBxdWlidXNkYW0gaW52ZW50b3JlLCBhc3N1bWVuZGEgdmVsISBNb2xlc3RpYXMgbWFpb3JlcyB0ZW1wb3JpYnVzIG9kaXQgcHJvdmlkZW50IHJhdGlvbmUgcXVvcyBvZGlvIGltcGVkaXQgbGFib3J1bSBtYWduYW0gc3VudCwgYXNwZXJpb3JlcyBkaXN0aW5jdGlvIGV0IG5lY2Vzc2l0YXRpYnVzIGRpY3RhIHV0IGRvbG9yaWJ1cyBjb21tb2RpIGlwc2EgcXVpZGVtIGxpYmVybyBxdWFlLiBNb2RpLlwiO1xuICAgIHAxLmFwcGVuZENoaWxkKHAyKTtcblxuICAgIHJldHVybiBoZWFkXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlSGVhZFxufSIsImNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYWxsZXJ5LmNsYXNzTGlzdC5hZGQoXCJnYWxsZXJ5XCIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZ2FsbGVyeSlcbiAgICBjb25zdCByZXNwb25zaXZlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzcG9uc2l2ZTEuY2xhc3NMaXN0LmFkZChcInJlc3BvbnNpdmVcIik7XG4gICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChyZXNwb25zaXZlMSk7XG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlc3BvbnNpdmUxLmFwcGVuZENoaWxkKGl0ZW0xKTtcbiAgICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGExLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgYTEuaHJlZiA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbjQuanBnXCI7XG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQoYTEpO1xuICAgIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZzEuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuNC5qcGdcIjtcbiAgICBpbWcxLmFsdCA9IFwiUmFtZW5cIjtcbiAgICBhMS5hcHBlbmRDaGlsZChpbWcxKTtcbiAgICBjb25zdCBkZXNjMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzYzEuY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gICAgZGVzYzEuaW5uZXJUZXh0ID0gXCJSYW1lblxcclxcbiA5LDUw4oKsXCI7XG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQoZGVzYzEpO1xuXG4gICAgY29uc3QgcmVzcG9uc2l2ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlc3BvbnNpdmUyLmNsYXNzTGlzdC5hZGQoXCJyZXNwb25zaXZlXCIpO1xuICAgIGdhbGxlcnkuYXBwZW5kQ2hpbGQocmVzcG9uc2l2ZTIpO1xuICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXNwb25zaXZlMi5hcHBlbmRDaGlsZChpdGVtMik7XG4gICAgY29uc3QgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhMi50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIGEyLmhyZWYgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW4yLmpwZ1wiO1xuICAgIGl0ZW0yLmFwcGVuZENoaWxkKGEyKTtcbiAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcyLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbjIuanBnXCI7XG4gICAgaW1nMi5hbHQgPSBcIlJhbWVuXCI7XG4gICAgYTIuYXBwZW5kQ2hpbGQoaW1nMik7XG4gICAgY29uc3QgZGVzYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2MyLmNsYXNzTGlzdC5hZGQoXCJkZXNjXCIpO1xuICAgIGRlc2MyLmlubmVyVGV4dCA9IFwiUmFtZW5cXHJcXG4gMTAsNTDigqxcIjtcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChkZXNjMik7XG5cbiAgICBjb25zdCByZXNwb25zaXZlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzcG9uc2l2ZTMuY2xhc3NMaXN0LmFkZChcInJlc3BvbnNpdmVcIik7XG4gICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChyZXNwb25zaXZlMyk7XG4gICAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlc3BvbnNpdmUzLmFwcGVuZENoaWxkKGl0ZW0zKTtcbiAgICBjb25zdCBhMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEzLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgYTMuaHJlZiA9IFwiLi4vc3JjL2ltYWdlcy9yYW1lbjMuanBnXCI7XG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQoYTMpO1xuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZzMuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuMy5qcGdcIjtcbiAgICBpbWczLmFsdCA9IFwiUmFtZW5cIjtcbiAgICBhMy5hcHBlbmRDaGlsZChpbWczKTtcbiAgICBjb25zdCBkZXNjMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzYzMuY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gICAgZGVzYzMuaW5uZXJUZXh0ID0gXCJSYW1lblxcclxcbiAxMSwwMOKCrFwiO1xuICAgIGl0ZW0zLmFwcGVuZENoaWxkKGRlc2MzKTtcblxuICAgIGNvbnN0IHJlc3BvbnNpdmU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZXNwb25zaXZlNC5jbGFzc0xpc3QuYWRkKFwicmVzcG9uc2l2ZVwiKTtcbiAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKHJlc3BvbnNpdmU0KTtcbiAgICBjb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzcG9uc2l2ZTQuYXBwZW5kQ2hpbGQoaXRlbTQpO1xuICAgIGNvbnN0IGE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYTQudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICBhNC5ocmVmID0gXCIuLi9zcmMvaW1hZ2VzL3JhbWVuNi5qcGdcIjtcbiAgICBpdGVtNC5hcHBlbmRDaGlsZChhNCk7XG4gICAgY29uc3QgaW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nNC5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW42LmpwZ1wiO1xuICAgIGltZzQuYWx0ID0gXCJSYW1lblwiO1xuICAgIGE0LmFwcGVuZENoaWxkKGltZzQpO1xuICAgIGNvbnN0IGRlc2M0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjNC5jbGFzc0xpc3QuYWRkKFwiZGVzY1wiKTtcbiAgICBkZXNjNC5pbm5lclRleHQgPSBcIlJhbWVuXFxyXFxuIDEyLDUw4oKsXCI7XG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQoZGVzYzQpO1xuXG4gICAgcmV0dXJuIG1lbnVcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVNZW51XG59IiwiY29uc3QgY3JlYXRlQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmQtaW1hZ2VcIilcbiAgICBpbWFnZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcmFtZW4tYmFja2dyb3VuZC5qcGdcIjtcbiAgICBpbWFnZS5hbHQgPSBcInRhc3R5IHJhbWVuXCI7XG4gICAgcmV0dXJuIGltYWdlXG59XG5cbmNvbnN0IGNyZWF0ZVdyYXBwZXJVcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyVSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlclUuY2xhc3NMaXN0LmFkZChcIndyYXBwZXItdXBwZXJcIik7XG4gICAgcmV0dXJuIHdyYXBwZXJVXG59XG5cbmNvbnN0IGNyZWF0ZU5hdldyYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2V3JhcC5jbGFzc0xpc3QuYWRkKFwibmF2LXdyYXBwZXJcIik7XG4gICAgcmV0dXJuIG5hdldyYXBcbn1cblxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcblxuICAgIGNvbnN0IG5hdlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZVbCk7XG5cbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICBjb25zdCBsaTFBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGkxLmFwcGVuZENoaWxkKGxpMUEpO1xuICAgIGxpMUEuaHJlZiA9IFwiI1wiO1xuICAgIGxpMUEuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gICAgbGkxQS5pZCA9IFwiaG9tZVwiO1xuXG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgY29uc3QgbGkyQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpMi5hcHBlbmRDaGlsZChsaTJBKTtcbiAgICBsaTJBLmhyZWYgPSBcIiNcIjtcbiAgICBsaTJBLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGxpMkEuaWQgPVwibWVudVwiO1xuXG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKGxpMyk7XG4gICAgY29uc3QgbGkzQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpMy5hcHBlbmRDaGlsZChsaTNBKTtcbiAgICBsaTNBLmhyZWYgPSBcIiNcIjtcbiAgICBsaTNBLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICAgIGxpM0EuaWQgPSBcImNvbnRhY3RcIjtcblxuICAgIGNvbnN0IHNvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzbzEuY2xhc3NMaXN0LmFkZChcInNvY2lhbFwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChzbzEpO1xuICAgIGNvbnN0IHNvMUEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzbzEuYXBwZW5kQ2hpbGQoc28xQSk7XG4gICAgc28xQS5ocmVmID0gXCIjXCI7XG4gICAgY29uc3QgaWNvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpY29uMS5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS1mYWNlYm9va1wiKTtcbiAgICBzbzFBLmFwcGVuZENoaWxkKGljb24xKTtcblxuICAgIGNvbnN0IHNvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzbzIuY2xhc3NMaXN0LmFkZChcInNvY2lhbFwiKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChzbzIpO1xuICAgIGNvbnN0IHNvMkEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzbzIuYXBwZW5kQ2hpbGQoc28yQSk7XG4gICAgc28yQS5ocmVmID0gXCIjXCI7XG4gICAgY29uc3QgaWNvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpY29uMi5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS10d2l0dGVyXCIpO1xuICAgIHNvMkEuYXBwZW5kQ2hpbGQoaWNvbjIpO1xuXG4gICAgY29uc3Qgc28zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHNvMy5jbGFzc0xpc3QuYWRkKFwic29jaWFsXCIpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKHNvMyk7XG4gICAgY29uc3Qgc28zQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNvMy5hcHBlbmRDaGlsZChzbzNBKTtcbiAgICBzbzNBLmhyZWYgPSBcIiNcIjtcbiAgICBjb25zdCBpY29uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGljb24zLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLWluc3RhZ3JhbVwiKTtcbiAgICBzbzNBLmFwcGVuZENoaWxkKGljb24zKTtcblxuICAgIHJldHVybiBuYXZcbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAuaW5uZXJUZXh0ID0gXCJDb3B5cmlnaHQgKGMpIGVyeW5kZXItWi5cXHJcXG4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cIlxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYS5ocmVmID0gXCIjXCI7XG4gICAgYS5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgICBhLmlubmVyVGV4dCA9IFwiSW1wcmludFwiO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhKTtcblxuICAgIHJldHVybiBmb290ZXJcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVCYWNrZ3JvdW5kLFxuICAgIGNyZWF0ZVdyYXBwZXJVcHBlcixcbiAgICBjcmVhdGVOYXZXcmFwLFxuICAgIGNyZWF0ZU5hdixcbiAgICBjcmVhdGVGb290ZXJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHtcbiAgICBjcmVhdGVCYWNrZ3JvdW5kLFxuICAgIGNyZWF0ZVdyYXBwZXJVcHBlcixcbiAgICBjcmVhdGVOYXZXcmFwLFxuICAgIGNyZWF0ZU5hdixcbiAgICBjcmVhdGVGb290ZXJcbn0gZnJvbSBcIi4vbW9kdWxlcy91aVwiXG5cbmltcG9ydCB7XG4gICAgY3JlYXRlSGVhZCxcbn0gZnJvbSBcIi4vbW9kdWxlcy9ob21lXCJcblxuaW1wb3J0IHtcbiAgICBjcmVhdGVNZW51XG59IGZyb20gXCIuL21vZHVsZXMvbWVudVwiXG5cbmltcG9ydCB7XG4gICAgY3JlYXRlSG91cnMsXG4gICAgY3JlYXRlUmVzZXJ2YXRpb25zLFxuICAgIGNyZWF0ZVN0YXR1cyxcbiAgICBjcmVhdGVDb250YWN0c1xufSBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3RcIlxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBpbml0aWFsaXplID0gKCgpID0+IHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJhY2tncm91bmQoKSk7XG4gICAgY29uc3Qgd3JhcHBlclUgPSBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVdyYXBwZXJVcHBlcigpKTtcbiAgICBjb25zdCBuYXZXcmFwID0gd3JhcHBlclUuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2V3JhcCgpKTtcbiAgICBuYXZXcmFwLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbn0pKCk7XG5cbmNvbnN0IGhvbWVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCYWNrZ3JvdW5kKCkpO1xuICAgICAgICBjb25zdCB3cmFwcGVyVSA9IGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcHBlclVwcGVyKCkpO1xuICAgICAgICBjb25zdCBuYXZXcmFwID0gd3JhcHBlclUuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2V3JhcCgpKTtcbiAgICAgICAgbmF2V3JhcC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZCgpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gICAgICAgIGhvbWVCdXR0b24oKTtcbiAgICAgICAgbWVudUJ1dHRvbigpO1xuICAgICAgICBjb250YWN0QnV0dG9uKCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IG1lbnVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCYWNrZ3JvdW5kKCkpO1xuICAgICAgICBjb25zdCB3cmFwcGVyVSA9IGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcHBlclVwcGVyKCkpO1xuICAgICAgICBjb25zdCBuYXZXcmFwID0gd3JhcHBlclUuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2V3JhcCgpKTtcbiAgICAgICAgbmF2V3JhcC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gICAgICAgIGhvbWVCdXR0b24oKTtcbiAgICAgICAgbWVudUJ1dHRvbigpO1xuICAgICAgICBjb250YWN0QnV0dG9uKCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IGNvbnRhY3RCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCYWNrZ3JvdW5kKCkpO1xuICAgICAgICBjb25zdCB3cmFwcGVyVSA9IGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcHBlclVwcGVyKCkpO1xuICAgICAgICBjb25zdCBuYXZXcmFwID0gd3JhcHBlclUuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2V3JhcCgpKTtcbiAgICAgICAgbmF2V3JhcC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUmVzZXJ2YXRpb25zKCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVN0YXR1cygpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0cygpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gICAgICAgIGhvbWVCdXR0b24oKTtcbiAgICAgICAgbWVudUJ1dHRvbigpO1xuICAgICAgICBjb250YWN0QnV0dG9uKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudHMoKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5ob21lQnV0dG9uKCk7XG5tZW51QnV0dG9uKCk7XG5jb250YWN0QnV0dG9uKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9