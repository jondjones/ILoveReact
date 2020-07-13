'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_PureComponent) {
    _inherits(LoginForm, _PureComponent);

    function LoginForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LoginForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            formData: {
                username: '',
                password: ''
            }
        }, _this.handleSubmit = function (event) {
            event.preventDefault();
            if (_this.isFormValid) {
                _this.props.onLogin(_this.state.formData);
            }
        }, _this.handleInputUpdate = function (event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value;
            var formData = _this.state.formData;


            _this.setState({
                formData: _extends({}, formData, _defineProperty({}, name, value))
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LoginForm, [{
        key: 'render',
        value: function render() {
            var _state$formData = this.state.formData,
                username = _state$formData.username,
                password = _state$formData.password;

            return _react2.default.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                _react2.default.createElement(
                    'fieldset',
                    null,
                    _react2.default.createElement('img', { src: 'https://media0.giphy.com/media/v0FyPXlOqQOQw/200w.webp?cid=790b76115cc800667772546941a815e8&rid=200w.webp' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(Input, {
                        value: username,
                        onChange: this.handleInputUpdate,
                        placeholder: 'Username',
                        name: 'username'
                    })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(Input, {
                        value: password,
                        onChange: this.handleInputUpdate,
                        placeholder: '*****',
                        name: 'password',
                        type: 'password'
                    })
                ),
                _react2.default.createElement(
                    'button',
                    { type: 'submit', disabled: !this.isFormValid },
                    'Sign in'
                )
            );
        }
    }, {
        key: 'isFormValid',
        get: function get() {
            var _state$formData2 = this.state.formData,
                username = _state$formData2.username,
                password = _state$formData2.password;


            return username && password;
        }
    }]);

    return LoginForm;
}(_react.PureComponent);

LoginForm.propTypes = {
    onLogin: _propTypes2.default.func
};


function Input(_ref2) {
    var value = _ref2.value,
        onChange = _ref2.onChange,
        name = _ref2.name,
        placeholder = _ref2.placeholder,
        _ref2$type = _ref2.type,
        type = _ref2$type === undefined ? "text" : _ref2$type;

    return _react2.default.createElement('input', {
        value: value,
        onChange: onChange,
        placeholder: placeholder,
        name: name,
        type: type
    });
}

exports.default = LoginForm;