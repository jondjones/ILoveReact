'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('isomorphic-fetch');

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _expressRemoteHandlebars = require('express-remote-handlebars');

var _expressRemoteHandlebars2 = _interopRequireDefault(_expressRemoteHandlebars);

var _expressErrorHandler = require('@ynap/express-error-handler');

var _expressErrorHandler2 = _interopRequireDefault(_expressErrorHandler);

var _expressLoggingMiddleware = require('@ynap/express-logging-middleware');

var _loggingUtils = require('@ynap/logging-utils');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _requestAndLog = require('./requestAndLog');

var _requestAndLog2 = _interopRequireDefault(_requestAndLog);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var errorMiddleware = (0, _expressErrorHandler2.default)(_logger2.default);
var loggerMiddleware = (0, _expressLoggingMiddleware.createLoggerMiddleware)(_logger2.default);
var app = (0, _express2.default)().disable('x-powered-by').disable('etag');

app.engine('handlebars', (0, _expressRemoteHandlebars2.default)(_extends({}, _config2.default.siteFurnitureService, { request: _requestAndLog2.default })));
app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.set('view cache', true);

app.use(loggerMiddleware);
app.use((0, _cookieParser2.default)());
app.use(_routes2.default);
app.use(function (req, res) {
    return res.type('text/html').status(404).end();
});
app.use(errorMiddleware);

var server = _http2.default.createServer(app).listen(_config2.default.server.port, function () {
    _logger2.default.info({
        port: _config2.default.server.port,
        env: _config2.default.env
    }, 'My Account app listening:');
});

var MONITORING_INTERVAL = 60 * 1000;

var stopEventMonitor = (0, _loggingUtils.monitorEventLoop)(_logger2.default, MONITORING_INTERVAL);
var stopMemoryMonitor = (0, _loggingUtils.monitorMemoryUsage)(_logger2.default, MONITORING_INTERVAL);
var stopCPUMonitor = (0, _loggingUtils.monitorCPUUsage)(_logger2.default, MONITORING_INTERVAL);
var stopGCMonitor = (0, _loggingUtils.monitorGC)(_logger2.default, MONITORING_INTERVAL);

server.on('close', stopEventMonitor);
server.on('close', stopMemoryMonitor);
server.on('close', stopCPUMonitor);
server.on('close', stopGCMonitor);