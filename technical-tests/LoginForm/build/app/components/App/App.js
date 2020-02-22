'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _reactRouterRedux = require('react-router-redux');

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _bemHelper = require('@ynap/bem-helper');

var _bemHelper2 = _interopRequireDefault(_bemHelper);

var _login = require('../../actions/login');

var _login2 = _interopRequireDefault(_login);

var _LoginForm = require('../LoginForm/LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classNames = new _bemHelper2.default('App');

function App(_ref) {
    var login = _ref.login;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { path: '/:locale/account/login', exact: true, render: function render() {
                    return _react2.default.createElement(
                        'div',
                        { className: classNames('login') },
                        _react2.default.createElement(
                            'h2',
                            { className: classNames('title') },
                            'Login'
                        ),
                        _react2.default.createElement(_LoginForm2.default, { onLogin: login })
                    );
                } })
        )
    );
}

exports.default = (0, _reactRedux.connect)(undefined, { login: _login2.default })(App);