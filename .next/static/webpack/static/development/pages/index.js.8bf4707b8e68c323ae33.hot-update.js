webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/*! exports provided: serverRenderClock, startClock, incrementCount, decrementCount, resetCount, loadExampleData, loadingExampleDataFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRenderClock", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCount", function() { return incrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCount", function() { return decrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCount", function() { return resetCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadExampleData", function() { return loadExampleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingExampleDataFailure", function() { return loadingExampleDataFailure; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./store/actionTypes.js");


var serverRenderClock = function serverRenderClock() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].TICK,
    light: false,
    ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
  };
};
var startClock = function startClock() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].TICK,
    light: true,
    ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
  };
};
var incrementCount = function incrementCount() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].INCREMENT
  };
};
var decrementCount = function decrementCount() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].DECREMENT
  };
};
var resetCount = function resetCount() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET
  };
};
var loadExampleData = function loadExampleData(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOAD_EXAMPLE_DATA,
    data: data
  };
};
var loadingExampleDataFailure = function loadingExampleDataFailure() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOADING_DATA_FAILURE
  };
};

/***/ })

})
//# sourceMappingURL=index.js.8bf4707b8e68c323ae33.hot-update.js.map