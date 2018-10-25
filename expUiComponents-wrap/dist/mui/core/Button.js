"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CircularProgress = _interopRequireDefault(require("./CircularProgress"));

var _styles = require("./styles");

var duration = 100;

var styles = function styles() {
  return {
    progress: {
      position: 'absolute'
    },
    children: {
      opacity: 1,
      transition: "opacity ".concat(duration, "ms ease-in-out")
    },
    'children-entering': {
      opacity: 1
    },
    'children-entered': {
      opacity: 0
    }
  };
};

function Button(props) {
  var classes = props.classes,
      children = props.children,
      disabled = props.disabled,
      loading = props.loading,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "children", "disabled", "loading"]);
  return _react.default.createElement(_Button.default, (0, _extends2.default)({}, other, {
    disabled: disabled || loading
  }), _react.default.createElement(_Transition.default, {
    in: loading,
    timeout: duration
  }, function (state) {
    return _react.default.createElement(_react.default.Fragment, null, loading && state === 'entered' && _react.default.createElement(_CircularProgress.default, {
      className: (0, _classnames.default)(classes.progress),
      disabled: loading,
      size: 20
    }), _react.default.createElement("span", {
      className: (0, _classnames.default)(classes.children, classes["children-".concat(state)])
    }, children));
  }));
}

var _default = (0, _styles.withStyles)(styles)(Button);

exports.default = _default;