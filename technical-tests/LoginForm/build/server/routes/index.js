'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressCacheControl = require('@ynap/express-cache-control');

var _expressCacheControl2 = _interopRequireDefault(_expressCacheControl);

var _expressLocaleParser = require('@ynap/express-locale-parser');

var _expressLocaleParser2 = _interopRequireDefault(_expressLocaleParser);

var _myaccountMocks = require('@ynap/myaccount-mocks');

var _myaccountMocks2 = _interopRequireDefault(_myaccountMocks);

var _wcsMocks = require('@ynap/wcs-mocks');

var _wcsMocks2 = _interopRequireDefault(_wcsMocks);

var _account = require('./account');

var _account2 = _interopRequireDefault(_account);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _requestAndLog = require('../requestAndLog');

var _requestAndLog2 = _interopRequireDefault(_requestAndLog);

var _ping = require('./ping');

var _ping2 = _interopRequireDefault(_ping);

var _localeReducer = require('../localeReducer');

var _localeReducer2 = _interopRequireDefault(_localeReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var preventCaching = (0, _expressCacheControl2.default)();
var localeParser = (0, _expressLocaleParser2.default)(_extends({}, _config2.default.countryService, { request: _requestAndLog2.default, reducer: _localeReducer2.default }));

router.get('/admin/ping', [preventCaching], _ping2.default);
router.use('/:locale/account', [preventCaching, localeParser], _account2.default);

if (_config2.default.useMocks) {
    router.use(_wcsMocks2.default);
    router.use(_myaccountMocks2.default);
}

if (_config2.default.env === 'development') {
    router.use('/assets', _express2.default.static(_path2.default.join(__dirname, '../../assets')));
}

exports.default = router;