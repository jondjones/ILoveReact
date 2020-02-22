'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pino = require('pino');

var _pino2 = _interopRequireDefault(_pino);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _package = require('../../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pretty = _pino2.default.pretty();
pretty.pipe(process.stdout);

function req(request) {
    if (!request || !request.connection) return request;

    return {
        method: request.method,
        url: request.url,
        headers: request.headers,
        remoteAddress: request.connection.remoteAddress,
        remotePort: request.connection.remotePort
    };
}

exports.default = (0, _pino2.default)({
    name: _package.name,
    level: _config2.default.logger.level,
    serializers: {
        req: req,
        res: _pino.stdSerializers.res,
        err: _pino.stdSerializers.err
    }
}, _config2.default.logger.pretty ? pretty : null);