'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _etc = require('etc');

var _etc2 = _interopRequireDefault(_etc);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _etcYaml = require('etc-yaml');

var _etcYaml2 = _interopRequireDefault(_etcYaml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = (0, _etc2.default)('.').use(_etcYaml2.default).argv().env('myaccount_', '_').file(process.env.NODE_ENV === 'development' ? _path2.default.join(__dirname, 'development.yaml') : null).file(_path2.default.join(__dirname, 'default.yaml')).file(_path2.default.join(__dirname, 'build.json')).set('env', process.env.NODE_ENV);

var assets = config.get('assets');

// prepend assets with baseurl
if ((typeof assets === 'undefined' ? 'undefined' : _typeof(assets)) === 'object' && assets.baseUrl) {
    Object.keys(assets).forEach(function (language) {
        ['scripts', 'styles'].forEach(function (type) {
            if (assets[language][type]) {
                assets[language][type] = assets[language][type].replace(/([^"'\s)]+\.(js|css))/ig, function (match, assetPath) {
                    return assets.baseUrl + assetPath;
                });
            }
        });
    });
    config.reset('assets', assets);
}

exports.default = config.toJSON();