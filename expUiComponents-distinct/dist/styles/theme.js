"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _blue = _interopRequireDefault(require("@material-ui/core/colors/blue"));

var theme = (0, _styles.createMuiTheme)({
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