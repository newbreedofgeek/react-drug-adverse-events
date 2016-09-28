"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrugAdverseEvents = function (_Component) {
  _inherits(DrugAdverseEvents, _Component);

  function DrugAdverseEvents(props) {
    _classCallCheck(this, DrugAdverseEvents);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DrugAdverseEvents).call(this, props));

    _this.state = {
      options: props.options
    };

    _this.optionStyle = {};

    _this.value = props.defaultValue;

    _this.onKeyUp = _this._onKeyUp.bind(_this);
    return _this;
  }

  _createClass(DrugAdverseEvents, [{
    key: "_onKeyUp",
    value: function _onKeyUp(e) {
      e.preventDefault();

      debugger;

      // if (this.value != e.target.dataset.val) {
      //   this.value = e.target.dataset.val;
      //
      //   if (this.props.onChange) {
      //       this.props.onChange({
      //         target: {
      //           value: this.value
      //         }
      //       });
      //   }
      //
      //   this.forceUpdate();
      // }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("textarea", {
          ref: "userEntry",
          autoComplete: "off",
          className: "form-control",
          rows: "8",
          onKeyUp: this.onKeyUp })
      );
    }
  }]);

  return DrugAdverseEvents;
}(_react.Component);

exports.default = DrugAdverseEvents;


DrugAdverseEvents.defaultProps = {
  marginSpace: 5,
  defaultValue: '',
  onChange: null,
  enableSelectionFill: false,
  selectionFillCls: ''
};