webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/reducers.js":
/*!***************************!*\
  !*** ./store/reducers.js ***!
  \***************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./store/state.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./store/actionTypes.js");


 // REDUCERS

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state__WEBPACK_IMPORTED_MODULE_1__["InitialState"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].TICK:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].INCREMENT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        count: state.count + 1
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].DECREMENT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        count: state.count - 1
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].RESET:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        count: exampleInitialState.count
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].LOAD_EXAMPLE_DATA:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        exampleData: action.data
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].LOADING_DATA_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: true
      });

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.5aadd52d6a6d88490c63.hot-update.js.map