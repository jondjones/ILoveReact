'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reduxThunkInject = require('redux-thunk-inject');

var _reduxThunkInject2 = _interopRequireDefault(_reduxThunkInject);

var _wrapFetchWithLogger = require('@ynap/logging-utils/lib/wrapFetchWithLogger');

var _wrapFetchWithLogger2 = _interopRequireDefault(_wrapFetchWithLogger);

var _clientLogger = require('@ynap/logging-utils/lib/clientLogger');

var _clientLogger2 = _interopRequireDefault(_clientLogger);

var _frontendMonitoring = require('@mrporter/frontend-monitoring');

var _frontendMonitoring2 = _interopRequireDefault(_frontendMonitoring);

var _history = require('history');

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _developmentOnly = require('redux-devtools-extension/developmentOnly');

var _appReducer = require('./appReducer');

var _appReducer2 = _interopRequireDefault(_appReducer);

var _App = require('./components/App/App');

var _App2 = _interopRequireDefault(_App);

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = window.MA.state;

var frontendMonitoring = new _frontendMonitoring2.default(_extends({}, state.config.keen, {
    globalProperties: {
        app_name: state.config.appName,
        business: state.config.business
    }
}));

var logger = (0, _clientLogger2.default)({ browser: { write: frontendMonitoring.trackEvent } });
var fetchAndLog = (0, _wrapFetchWithLogger2.default)(_isomorphicFetch2.default, logger);
var history = (0, _history.createBrowserHistory)();

var store = (0, _redux.createStore)(_appReducer2.default, state, (0, _developmentOnly.composeWithDevTools)((0, _redux.applyMiddleware)((0, _reactRouterRedux.routerMiddleware)(history), (0, _reduxThunkInject2.default)(fetchAndLog))));

var _store$getState = store.getState(),
    locale = _store$getState.locale;

var language = locale.language;


(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouterRedux.ConnectedRouter,
        { history: history },
        _react2.default.createElement(_App2.default, { messages: _messages2.default[language] })
    )
), document.querySelector('.ma-wrapper'));