"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createMuiTheme = _interopRequireDefault(require("./createMuiTheme"));

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
var _default = theme;
exports.default = _default;