"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.theme = void 0;

var _react = _interopRequireDefault(require("react"));

var _createMuiTheme = _interopRequireDefault(require("./createMuiTheme"));

var _MuiThemeProvider = _interopRequireDefault(require("./MuiThemeProvider"));

var _blue = _interopRequireDefault(require("../colors/blue"));

var theme = (0, _createMuiTheme.default)({
  palette: {
    primary: _blue.default
  },
  typography: {
    fontSize: 12,
    useNextVariants: true
  }
});
exports.theme = theme;

function ExpUiThemeProvider(props) {
  return _react.default.createElement(_MuiThemeProvider.default, {
    theme: theme
  }, props.children);
}

var _default = ExpUiThemeProvider;
exports.default = _default;