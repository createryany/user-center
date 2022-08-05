(self["webpackChunkant_design_pro"] = self["webpackChunkant_design_pro"] || []).push([["mf-dep_src_umi_core_umiExports_ts-src_umi_plugin-request_request_ts"],{

/***/ "./src/.umi/core/history.ts":
/*!**********************************!*\
  !*** ./src/.umi/core/history.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHistory": function() { return /* binding */ createHistory; },
/* harmony export */   "history": function() { return /* binding */ history; }
/* harmony export */ });
/* harmony import */ var D_workSpace_code_myapp_node_modules_umi_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/umi/node_modules/@umijs/runtime */ "./node_modules/history-with-query/esm/history.js");
// @ts-nocheck

var options = {
  "basename": "/"
};

if (window.routerBase) {
  options.basename = window.routerBase;
} // remove initial history because of ssr


var history = ({"NODE_ENV":"development"}).__IS_SERVER ? null : (0,D_workSpace_code_myapp_node_modules_umi_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)(options);
var createHistory = function createHistory() {
  var hotReload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (!hotReload) {
    history = (0,D_workSpace_code_myapp_node_modules_umi_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)(options);
  }

  return history;
};


/***/ }),

/***/ "./src/.umi/core/plugin.ts":
/*!*********************************!*\
  !*** ./src/.umi/core/plugin.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": function() { return /* binding */ plugin; }
/* harmony export */ });
/* harmony import */ var D_workSpace_code_myapp_node_modules_umi_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/umi/node_modules/@umijs/runtime */ "./node_modules/umi/node_modules/@umijs/runtime/dist/index.esm.js");
// @ts-nocheck

var plugin = new D_workSpace_code_myapp_node_modules_umi_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__.Plugin({
  validKeys: ['modifyClientRenderOpts', 'patchRoutes', 'rootContainer', 'render', 'onRouteChange', '__mfsu', 'getInitialState', 'initialStateConfig', 'layout', 'layoutActionRef', 'request']
});


/***/ }),

/***/ "./src/.umi/core/umiExports.ts":
/*!*************************************!*\
  !*** ./src/.umi/core/umiExports.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "history": function() { return /* reexport safe */ _history__WEBPACK_IMPORTED_MODULE_0__.history; },
/* harmony export */   "plugin": function() { return /* reexport safe */ _plugin__WEBPACK_IMPORTED_MODULE_1__.plugin; },
/* harmony export */   "Access": function() { return /* reexport safe */ _plugin_access_access__WEBPACK_IMPORTED_MODULE_2__.Access; },
/* harmony export */   "traverseModifyRoutes": function() { return /* reexport safe */ _plugin_access_access__WEBPACK_IMPORTED_MODULE_2__.traverseModifyRoutes; },
/* harmony export */   "useAccess": function() { return /* reexport safe */ _plugin_access_access__WEBPACK_IMPORTED_MODULE_2__.useAccess; },
/* harmony export */   "__PLUGIN_INITIAL_STATE": function() { return /* reexport safe */ _plugin_initial_state_exports__WEBPACK_IMPORTED_MODULE_3__.__PLUGIN_INITIAL_STATE; },
/* harmony export */   "useModel": function() { return /* reexport safe */ _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_5__.useModel; },
/* harmony export */   "ErrorShowType": function() { return /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_6__.ErrorShowType; },
/* harmony export */   "UseRequestProvider": function() { return /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_6__.UseRequestProvider; },
/* harmony export */   "request": function() { return /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_6__.request; },
/* harmony export */   "useRequest": function() { return /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_6__.useRequest; },
/* harmony export */   "Helmet": function() { return /* reexport safe */ _plugin_helmet_exports__WEBPACK_IMPORTED_MODULE_7__.Helmet; },
/* harmony export */   "UmiUIFlag": function() { return /* reexport safe */ _preset_ui_UmiUIFlag__WEBPACK_IMPORTED_MODULE_8__.UmiUIFlag; }
/* harmony export */ });
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./src/.umi/core/history.ts");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ "./src/.umi/core/plugin.ts");
/* harmony import */ var _plugin_access_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugin-access/access */ "./src/.umi/plugin-access/access.tsx");
/* harmony import */ var _plugin_initial_state_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugin-initial-state/exports */ "./src/.umi/plugin-initial-state/exports.ts");
/* harmony import */ var _plugin_layout_layoutExports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugin-layout/layoutExports */ "./src/.umi/plugin-layout/layoutExports.ts");
/* harmony import */ var _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugin-model/useModel */ "./src/.umi/plugin-model/useModel.tsx");
/* harmony import */ var _plugin_request_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plugin-request/request */ "./src/.umi/plugin-request/request.ts");
/* harmony import */ var _plugin_helmet_exports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plugin-helmet/exports */ "./src/.umi/plugin-helmet/exports.ts");
/* harmony import */ var _preset_ui_UmiUIFlag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../preset-ui/UmiUIFlag */ "./src/.umi/preset-ui/UmiUIFlag.tsx");
// @ts-nocheck










/***/ }),

/***/ "./src/.umi/plugin-access/access.tsx":
/*!*******************************************!*\
  !*** ./src/.umi/plugin-access/access.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traverseModifyRoutes": function() { return /* reexport safe */ _runtimeUtil__WEBPACK_IMPORTED_MODULE_2__.traverseModifyRoutes; },
/* harmony export */   "useAccess": function() { return /* binding */ useAccess; },
/* harmony export */   "Access": function() { return /* binding */ Access; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/.umi/plugin-access/context.ts");
/* harmony import */ var _runtimeUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runtimeUtil */ "./src/.umi/plugin-access/runtimeUtil.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
// @ts-nocheck






var useAccess = function useAccess() {
  var access = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.default);
  return access;
};
var Access = function Access(props) {
  var accessible = props.accessible,
      fallback = props.fallback,
      children = props.children;

  if ( true && typeof accessible === 'function') {
    console.warn('[plugin-access]: provided "accessible" prop is a function named "' + accessible.name + '" instead of a boolean, maybe you need check it.');
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: accessible ? children : fallback
  }, void 0, false);
};

/***/ }),

/***/ "./src/.umi/plugin-access/context.ts":
/*!*******************************************!*\
  !*** ./src/.umi/plugin-access/context.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// @ts-nocheck

var AccessContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (AccessContext);

/***/ }),

/***/ "./src/.umi/plugin-access/runtimeUtil.ts":
/*!***********************************************!*\
  !*** ./src/.umi/plugin-access/runtimeUtil.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traverseModifyRoutes": function() { return /* binding */ traverseModifyRoutes; }
/* harmony export */ });
/* harmony import */ var D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


// @ts-nocheck
var oldChildrenPropsName = 'routes';
function traverseModifyRoutes(childrenList, access) {
  var resultChildrenList = [].concat(childrenList).map(function (resultRoute) {
    var childList = resultRoute.children || resultRoute[oldChildrenPropsName];

    if (childList && childList !== null && childList !== void 0 && childList.length) {
      return (0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.default)((0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.default)({}, resultRoute), {}, (0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.default)({
        children: childList === null || childList === void 0 ? void 0 : childList.map(function (route) {
          return (0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.default)({}, route);
        })
      }, oldChildrenPropsName, childList === null || childList === void 0 ? void 0 : childList.map(function (route) {
        return (0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.default)({}, route);
      })));
    }

    return resultRoute;
  });
  return resultChildrenList.map(function (currentRoute) {
    var currentRouteAccessible = typeof currentRoute.unaccessible === 'boolean' ? !currentRoute.unaccessible : true;

    if (currentRoute && false) {
      currentRoute.unaccessible = true;
    } // 判断路由是否有权限的具体代码


    if (currentRoute && currentRoute.access) {
      if (typeof currentRoute.access !== 'string') {
        throw new Error('[plugin-access]: "access" field set in "' + currentRoute.path + '" route should be a string.');
      }

      var accessProp = access[currentRoute.access]; // 如果是方法需要执行以下

      if (typeof accessProp === 'function') {
        currentRouteAccessible = accessProp(currentRoute);
      } else if (typeof accessProp === 'boolean') {
        // 不是方法就直接 copy
        currentRouteAccessible = accessProp;
      }

      currentRoute.unaccessible = !currentRouteAccessible;
    }

    var childList = currentRoute.children || currentRoute[oldChildrenPropsName]; // 筛选子路由

    if (childList && Array.isArray(childList) && childList.length) {
      if (!Array.isArray(childList)) {
        return currentRoute;
      } // 父亲没权限，理论上每个孩子都没权限
      // 可能有打平 的事情发生，所以都执行一下


      childList.forEach(function (childRoute) {
        childRoute.unaccessible = !currentRouteAccessible;
      });
      var finallyChildList = traverseModifyRoutes(childList, access); // 如果每个子节点都没有权限，那么自己也属于没有权限

      var isAllChildChildrenUnaccessible = Array.isArray(finallyChildList) && finallyChildList.every(function (route) {
        return route.unaccessible;
      });

      if (!currentRoute.unaccessible && isAllChildChildrenUnaccessible) {
        currentRoute.unaccessible = true;
      }

      if (finallyChildList && (finallyChildList === null || finallyChildList === void 0 ? void 0 : finallyChildList.length) > 0) {
        return (0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.default)((0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.default)({}, currentRoute), {}, (0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.default)({
          children: finallyChildList
        }, oldChildrenPropsName, finallyChildList));
      }

      delete currentRoute.routes;
      delete currentRoute.children;
    }

    return currentRoute;
  });
}

/***/ }),

/***/ "./src/.umi/plugin-helmet/exports.ts":
/*!*******************************************!*\
  !*** ./src/.umi/plugin-helmet/exports.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helmet": function() { return /* reexport safe */ D_workSpace_code_myapp_node_modules_react_helmet__WEBPACK_IMPORTED_MODULE_0__.Helmet; }
/* harmony export */ });
/* harmony import */ var D_workSpace_code_myapp_node_modules_react_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
// @ts-nocheck
// @ts-ignore


/***/ }),

/***/ "./src/.umi/plugin-initial-state/exports.ts":
/*!**************************************************!*\
  !*** ./src/.umi/plugin-initial-state/exports.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__PLUGIN_INITIAL_STATE": function() { return /* binding */ __PLUGIN_INITIAL_STATE; }
/* harmony export */ });
// @ts-nocheck
// @ts-ignore
var __PLUGIN_INITIAL_STATE = 1;

/***/ }),

/***/ "./src/.umi/plugin-layout/layoutExports.ts":
/*!*************************************************!*\
  !*** ./src/.umi/plugin-layout/layoutExports.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// @ts-nocheck
// avoid `export *` error
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/.umi/plugin-model/helpers/constant.tsx":
/*!****************************************************!*\
  !*** ./src/.umi/plugin-model/helpers/constant.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UmiContext": function() { return /* binding */ UmiContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// @ts-nocheck

var UmiContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/***/ }),

/***/ "./src/.umi/plugin-model/useModel.tsx":
/*!********************************************!*\
  !*** ./src/.umi/plugin-model/useModel.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useModel": function() { return /* binding */ useModel; }
/* harmony export */ });
/* harmony import */ var D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var D_workSpace_code_myapp_node_modules_umijs_plugin_model_node_modules_fast_deep_equal_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@umijs/plugin-model/node_modules/fast-deep-equal/index.js */ "./node_modules/@umijs/plugin-model/node_modules/fast-deep-equal/index.js");
/* harmony import */ var D_workSpace_code_myapp_node_modules_umijs_plugin_model_node_modules_fast_deep_equal_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_workSpace_code_myapp_node_modules_umijs_plugin_model_node_modules_fast_deep_equal_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/constant */ "./src/.umi/plugin-model/helpers/constant.tsx");

// @ts-nocheck
 // @ts-ignore

 // @ts-ignore


function useModel(namespace, updater) {
  var dispatcher = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_constant__WEBPACK_IMPORTED_MODULE_3__.UmiContext);
  var updaterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(updater);
  updaterRef.current = updater;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    return updaterRef.current ? updaterRef.current(dispatcher.data[namespace]) : dispatcher.data[namespace];
  }),
      _useState2 = (0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(state);
  stateRef.current = state;
  var isMount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    isMount.current = true;
    return function () {
      isMount.current = false;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handler = function handler(e) {
      if (!isMount.current) {
        // 如果 handler 执行过程中，组件被卸载了，则强制更新全局 data
        setTimeout(function () {
          dispatcher.data[namespace] = e;
          dispatcher.update(namespace);
        });
      } else {
        if (updater && updaterRef.current) {
          var currentState = updaterRef.current(e);
          var previousState = stateRef.current;

          if (!D_workSpace_code_myapp_node_modules_umijs_plugin_model_node_modules_fast_deep_equal_index_js__WEBPACK_IMPORTED_MODULE_2___default()(currentState, previousState)) {
            setState(currentState);
          }
        } else {
          setState(e);
        }
      }
    };

    try {
      dispatcher.callbacks[namespace].add(handler);
      dispatcher.update(namespace);
    } catch (e) {
      dispatcher.callbacks[namespace] = new Set();
      dispatcher.callbacks[namespace].add(handler);
      dispatcher.update(namespace);
    }

    return function () {
      dispatcher.callbacks[namespace].delete(handler);
    };
  }, [namespace]);
  return state;
}
;

/***/ }),

/***/ "./src/.umi/plugin-request/request.ts":
/*!********************************************!*\
  !*** ./src/.umi/plugin-request/request.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorShowType": function() { return /* binding */ ErrorShowType; },
/* harmony export */   "request": function() { return /* binding */ request; },
/* harmony export */   "useRequest": function() { return /* binding */ useRequest; },
/* harmony export */   "UseRequestProvider": function() { return /* reexport safe */ D_workSpace_code_myapp_node_modules_ahooksjs_use_request__WEBPACK_IMPORTED_MODULE_7__.UseRequestProvider; }
/* harmony export */ });
/* harmony import */ var D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_workSpace_code_myapp_node_modules_umi_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/umi-request */ "./node_modules/umi-request/dist/index.esm.js");
/* harmony import */ var D_workSpace_code_myapp_node_modules_umi_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/umi/node_modules/@umijs/runtime */ "./node_modules/umi/node_modules/@umijs/runtime/dist/index.esm.js");
/* harmony import */ var _core_umiExports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/umiExports */ "./src/.umi/core/umiExports.ts");
/* harmony import */ var _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @umijs/plugin-request/lib/ui */ "./src/.umi/plugin-request/ui/index.ts");
/* harmony import */ var D_workSpace_code_myapp_node_modules_ahooksjs_use_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@ahooksjs/use-request */ "./node_modules/@ahooksjs/use-request/es/index.js");




var _excluded = ["url"];
// @ts-nocheck

/**
 * Base on https://github.com/umijs/D:/workSpace/code/myapp/node_modules/umi-request
 */
 // @ts-ignore


 // decoupling with antd UI library, you can using `alias` modify the ui methods
// @ts-ignore




function useRequest(service) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,D_workSpace_code_myapp_node_modules_ahooksjs_use_request__WEBPACK_IMPORTED_MODULE_7__.default)(service, (0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.default)({
    formatResult: function formatResult(result) {
      return result === null || result === void 0 ? void 0 : result.data;
    },
    requestMethod: function requestMethod(requestOptions) {
      if (typeof requestOptions === 'string') {
        return request(requestOptions);
      }

      if (typeof requestOptions === 'object') {
        var _url = requestOptions.url,
            rest = (0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.default)(requestOptions, _excluded);

        return request(_url, rest);
      }

      throw new Error('request options error');
    }
  }, options));
}

var ErrorShowType;

(function (ErrorShowType) {
  ErrorShowType[ErrorShowType["SILENT"] = 0] = "SILENT";
  ErrorShowType[ErrorShowType["WARN_MESSAGE"] = 1] = "WARN_MESSAGE";
  ErrorShowType[ErrorShowType["ERROR_MESSAGE"] = 2] = "ERROR_MESSAGE";
  ErrorShowType[ErrorShowType["NOTIFICATION"] = 4] = "NOTIFICATION";
  ErrorShowType[ErrorShowType["REDIRECT"] = 9] = "REDIRECT";
})(ErrorShowType || (ErrorShowType = {}));

var DEFAULT_ERROR_PAGE = '/exception';
var requestMethodInstance;

var getRequestMethod = function getRequestMethod() {
  var _requestConfig$errorC;

  if (requestMethodInstance) {
    // request method 已经示例化
    return requestMethodInstance;
  } // runtime 配置可能应为依赖顺序的问题在模块初始化的时候无法获取，所以需要封装一层在异步调用后初始化相关方法
  // 当用户的 app.ts 中依赖了该文件的情况下就该模块的初始化时间就会被提前，无法获取到运行时配置


  var requestConfig = _core_umiExports__WEBPACK_IMPORTED_MODULE_5__.plugin.applyPlugins({
    key: 'request',
    type: D_workSpace_code_myapp_node_modules_umi_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_8__.ApplyPluginsType.modify,
    initialValue: {}
  });

  var errorAdaptor = ((_requestConfig$errorC = requestConfig.errorConfig) === null || _requestConfig$errorC === void 0 ? void 0 : _requestConfig$errorC.adaptor) || function (resData) {
    return resData;
  };

  requestMethodInstance = (0,D_workSpace_code_myapp_node_modules_umi_request__WEBPACK_IMPORTED_MODULE_4__.extend)((0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.default)({
    errorHandler: function errorHandler(error) {
      var _error$request, _error$request$option, _errorInfo4;

      // @ts-ignore
      if (error !== null && error !== void 0 && (_error$request = error.request) !== null && _error$request !== void 0 && (_error$request$option = _error$request.options) !== null && _error$request$option !== void 0 && _error$request$option.skipErrorHandler) {
        throw error;
      }

      var errorInfo;

      if (error.name === 'ResponseError' && error.data && error.request) {
        var _errorInfo;

        var _ctx = {
          req: error.request,
          res: error.response
        };
        errorInfo = errorAdaptor(error.data, _ctx);
        error.message = ((_errorInfo = errorInfo) === null || _errorInfo === void 0 ? void 0 : _errorInfo.errorMessage) || error.message;
        error.data = error.data;
        error.info = errorInfo;
      }

      errorInfo = error.info;

      if (errorInfo) {
        var _errorInfo2, _errorInfo3, _requestConfig$errorC2;

        var errorMessage = (_errorInfo2 = errorInfo) === null || _errorInfo2 === void 0 ? void 0 : _errorInfo2.errorMessage;
        var errorCode = (_errorInfo3 = errorInfo) === null || _errorInfo3 === void 0 ? void 0 : _errorInfo3.errorCode;
        var errorPage = ((_requestConfig$errorC2 = requestConfig.errorConfig) === null || _requestConfig$errorC2 === void 0 ? void 0 : _requestConfig$errorC2.errorPage) || DEFAULT_ERROR_PAGE;

        switch ((_errorInfo4 = errorInfo) === null || _errorInfo4 === void 0 ? void 0 : _errorInfo4.showType) {
          case ErrorShowType.SILENT:
            // do nothing
            break;

          case ErrorShowType.WARN_MESSAGE:
            _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.message.warn(errorMessage);
            break;

          case ErrorShowType.ERROR_MESSAGE:
            _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.message.error(errorMessage);
            break;

          case ErrorShowType.NOTIFICATION:
            _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.notification.open({
              description: errorMessage,
              message: errorCode
            });
            break;

          case ErrorShowType.REDIRECT:
            // @ts-ignore
            _core_umiExports__WEBPACK_IMPORTED_MODULE_5__.history.push({
              pathname: errorPage,
              query: {
                errorCode: errorCode,
                errorMessage: errorMessage
              }
            }); // redirect to error page

            break;

          default:
            _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.message.error(errorMessage);
            break;
        }
      } else {
        _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.message.error(error.message || 'Request error, please retry.');
      }

      throw error;
    }
  }, requestConfig)); // 中间件统一错误处理
  // 后端返回格式 { success: boolean, data: any }
  // 按照项目具体情况修改该部分逻辑

  requestMethodInstance.use( /*#__PURE__*/function () {
    var _ref = (0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/(0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__.default)().mark(function _callee(ctx, next) {
      var _req$options;

      var req, res, options, getResponse, resData, errorInfo, error;
      return (0,D_workSpace_code_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__.default)().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next();

            case 2:
              req = ctx.req, res = ctx.res; // @ts-ignore

              if (!((_req$options = req.options) !== null && _req$options !== void 0 && _req$options.skipErrorHandler)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              options = req.options;
              getResponse = options.getResponse;
              resData = getResponse ? res.data : res;
              errorInfo = errorAdaptor(resData, ctx);

              if (!(errorInfo.success === false)) {
                _context.next = 17;
                break;
              }

              // 抛出错误到 errorHandler 中处理
              error = new Error(errorInfo.errorMessage);
              error.name = 'BizError';
              error.data = resData;
              error.info = errorInfo;
              error.request = req;
              error.response = res;
              throw error;

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()); // Add user custom middlewares

  var customMiddlewares = requestConfig.middlewares || [];
  customMiddlewares.forEach(function (mw) {
    requestMethodInstance.use(mw);
  }); // Add user custom interceptors

  var requestInterceptors = requestConfig.requestInterceptors || [];
  var responseInterceptors = requestConfig.responseInterceptors || [];
  requestInterceptors.map(function (ri) {
    requestMethodInstance.interceptors.request.use(ri);
  });
  responseInterceptors.map(function (ri) {
    requestMethodInstance.interceptors.response.use(ri);
  });
  return requestMethodInstance;
};

var request = function request(url, options) {
  var requestMethod = getRequestMethod();
  return requestMethod(url, options);
};



/***/ }),

/***/ "./src/.umi/plugin-request/ui/index.ts":
/*!*********************************************!*\
  !*** ./src/.umi/plugin-request/ui/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "message": function() { return /* reexport safe */ antd_es_message__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "notification": function() { return /* reexport safe */ antd_es_notification__WEBPACK_IMPORTED_MODULE_3__.default; }
/* harmony export */ });
/* harmony import */ var antd_es_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/message/style */ "./node_modules/antd/es/message/style/index.js");
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/message */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd_es_notification_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/notification/style */ "./node_modules/antd/es/notification/style/index.js");
/* harmony import */ var antd_es_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/notification */ "./node_modules/antd/es/notification/index.js");
// @ts-nocheck






/***/ }),

/***/ "./src/.umi/preset-ui/UmiUIFlag.tsx":
/*!******************************************!*\
  !*** ./src/.umi/preset-ui/UmiUIFlag.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UmiUIFlag": function() { return /* binding */ UmiUIFlag; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
// @ts-nocheck

/**
 * A component that provides points for umi ui
 */



var UmiUIFlag = function UmiUIFlag() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false);
};
UmiUIFlag.displayName = 'INSERT_BLOCK_PLACEHOLDER';

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);