webpackHotUpdate_N_E("pages/index",{

/***/ "./components/counter.js":
/*!*******************************!*\
  !*** ./components/counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _hooks_players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/players */ \"./hooks/players.js\");\n\n\n\nvar _jsxFileName = \"/home/thorge/Projects/LiederRaten/App/components/counter.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Counter = function Counter(_ref) {\n  _s();\n\n  var player = _ref.player,\n      index = _ref.index;\n\n  var _usePlayers = Object(_hooks_players__WEBPACK_IMPORTED_MODULE_3__[\"usePlayers\"])(),\n      _usePlayers2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_usePlayers, 2),\n      players = _usePlayers2[0],\n      setPlayers = _usePlayers2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"ListGroup\"].Item, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"ListGroup\"], {\n      horizontal: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          width: \"10rem\",\n          backgroundColor: player.color\n        },\n        onClick: function onClick() {\n          return setPlayers(players.map(function (p, i) {\n            if (i === index) p.score += 1;\n            return p;\n          }));\n        },\n        children: \"+1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n        style: {\n          width: \"100%\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Body, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Title, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: player.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Title, {\n            children: [\"Score: \", player.score]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"ButtonGroup\"], {\n        style: {\n          width: \"20%\"\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n          variant: \"success\",\n          style: {\n            width: \"60%\"\n          },\n          onClick: function onClick() {\n            return setPlayers(players.map(function (p, i) {\n              if (i === index) p.score += 1;\n              return p;\n            }));\n          },\n          children: \"+1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n          variant: \"danger\",\n          onClick: function onClick() {\n            return setPlayers(players.map(function (p, i) {\n              if (i === index) p.score -= 1;\n              return p;\n            }));\n          },\n          children: \"-1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Counter, \"E1esTE+s1Qv7V8XAoCw1QC9iBio=\", false, function () {\n  return [_hooks_players__WEBPACK_IMPORTED_MODULE_3__[\"usePlayers\"]];\n});\n\n_c = Counter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counter);\n\nvar _c;\n\n$RefreshReg$(_c, \"Counter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGVyLmpzP2M4OWYiXSwibmFtZXMiOlsiQ291bnRlciIsInBsYXllciIsImluZGV4IiwidXNlUGxheWVycyIsInBsYXllcnMiLCJzZXRQbGF5ZXJzIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm1hcCIsInAiLCJpIiwic2NvcmUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsb0JBQ1BDLGlFQUFVLEVBREg7QUFBQTtBQUFBLE1BQzlCQyxPQUQ4QjtBQUFBLE1BQ3JCQyxVQURxQjs7QUFHckMsc0JBQ0UscUVBQUMseURBQUQsQ0FBVyxJQUFYO0FBQUEsMkJBQ0UscUVBQUMseURBQUQ7QUFBVyxnQkFBVSxNQUFyQjtBQUFBLDhCQUNFO0FBQ0UsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRSxPQUFUO0FBQWtCQyx5QkFBZSxFQUFFTixNQUFNLENBQUNPO0FBQTFDLFNBRFQ7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFDUEgsVUFBVSxDQUNSRCxPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNwQixnQkFBSUEsQ0FBQyxLQUFLVCxLQUFWLEVBQWlCUSxDQUFDLENBQUNFLEtBQUYsSUFBVyxDQUFYO0FBQ2pCLG1CQUFPRixDQUFQO0FBQ0QsV0FIRCxDQURRLENBREg7QUFBQSxTQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFjRSxxRUFBQyxvREFBRDtBQUNFLGFBQUssRUFBRTtBQUNMSixlQUFLLEVBQUU7QUFERixTQURUO0FBQUEsK0JBS0UscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUEsa0NBQ0UscUVBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUEsbUNBQ0U7QUFBQSx3QkFBS0wsTUFBTSxDQUFDWTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUscUVBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUEsa0NBQW9CWixNQUFNLENBQUNXLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEYsZUEwQkUscUVBQUMsMkRBQUQ7QUFBYSxhQUFLLEVBQUU7QUFBRU4sZUFBSyxFQUFFO0FBQVQsU0FBcEI7QUFBQSxnQ0FDRSxxRUFBQyxzREFBRDtBQUNFLGlCQUFPLEVBQUMsU0FEVjtBQUVFLGVBQUssRUFBRTtBQUFFQSxpQkFBSyxFQUFFO0FBQVQsV0FGVDtBQUdFLGlCQUFPLEVBQUU7QUFBQSxtQkFDUEQsVUFBVSxDQUNSRCxPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNwQixrQkFBSUEsQ0FBQyxLQUFLVCxLQUFWLEVBQWlCUSxDQUFDLENBQUNFLEtBQUYsSUFBVyxDQUFYO0FBQ2pCLHFCQUFPRixDQUFQO0FBQ0QsYUFIRCxDQURRLENBREg7QUFBQSxXQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBZUUscUVBQUMsc0RBQUQ7QUFDRSxpQkFBTyxFQUFDLFFBRFY7QUFFRSxpQkFBTyxFQUFFO0FBQUEsbUJBQ1BMLFVBQVUsQ0FDUkQsT0FBTyxDQUFDSyxHQUFSLENBQVksVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDcEIsa0JBQUlBLENBQUMsS0FBS1QsS0FBVixFQUFpQlEsQ0FBQyxDQUFDRSxLQUFGLElBQVcsQ0FBWDtBQUNqQixxQkFBT0YsQ0FBUDtBQUNELGFBSEQsQ0FEUSxDQURIO0FBQUEsV0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNERELENBL0REOztHQUFNVixPO1VBQzBCRyx5RDs7O0tBRDFCSCxPO0FBaUVTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY291bnRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQsIExpc3RHcm91cCwgQnV0dG9uR3JvdXAsIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IHVzZVBsYXllcnMgfSBmcm9tIFwiLi4vaG9va3MvcGxheWVyc1wiO1xuXG5jb25zdCBDb3VudGVyID0gKHsgcGxheWVyLCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVBsYXllcnMoKTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0R3JvdXAuSXRlbT5cbiAgICAgIDxMaXN0R3JvdXAgaG9yaXpvbnRhbD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwcmVtXCIsIGJhY2tncm91bmRDb2xvcjogcGxheWVyLmNvbG9yIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgIHNldFBsYXllcnMoXG4gICAgICAgICAgICAgIHBsYXllcnMubWFwKChwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGluZGV4KSBwLnNjb3JlICs9IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgKzFcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxDYXJkLlRpdGxlPlxuICAgICAgICAgICAgICA8aDM+e3BsYXllci5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICA8Q2FyZC5UaXRsZT5TY29yZToge3BsYXllci5zY29yZX08L0NhcmQuVGl0bGU+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPEJ1dHRvbkdyb3VwIHN0eWxlPXt7IHdpZHRoOiBcIjIwJVwiIH19PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICBzZXRQbGF5ZXJzKFxuICAgICAgICAgICAgICAgIHBsYXllcnMubWFwKChwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXgpIHAuc2NvcmUgKz0gMTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICArMVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgc2V0UGxheWVycyhcbiAgICAgICAgICAgICAgICBwbGF5ZXJzLm1hcCgocCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGluZGV4KSBwLnNjb3JlIC09IDE7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgLTFcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgIDwvTGlzdEdyb3VwPlxuICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/counter.js\n");

/***/ })

})