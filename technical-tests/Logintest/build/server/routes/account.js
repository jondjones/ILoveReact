'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.accountRoute = accountRoute;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _express = require('express');

var _history = require('history');

var _reactRouterRedux = require('react-router-redux');

var _reducerUtils = require('@ynap/reducer-utils');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _appReducer = require('../../app/appReducer');

var _appReducer2 = _interopRequireDefault(_appReducer);

var _App = require('../../app/components/App/App');

var _App2 = _interopRequireDefault(_App);

var _getMessages = require('../getMessages');

var _getMessages2 = _interopRequireDefault(_getMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/:page(addresses|login)?', [featureCheck], accountRoute);
router.get('/:page(addresses)/?*?', accountRoute);

function featureCheck(req, res, next) {
    //Login page
    if (req.params.page === 'login' && !_config2.default.loginFeatureEnabled) {
        res.sendStatus(404);
    } else {
        next();
    }
}

function clientConfig(uberToken) {
    return {
        appName: 'myaccount',
        unauthorisedRedirect: _config2.default.unauthorisedRedirect,
        clientRequest: _config2.default.clientRequest,
        titles: _config2.default.titles,
        keen: _config2.default.keen,
        business: _config2.default.business,
        watsonService: {
            uberToken: uberToken,
            baseUrl: _config2.default.watsonService.baseUrl,
            brandId: _config2.default.watsonService.brandId
        },
        captchaService: _config2.default.captchaService
    };
}

function getMetaData(messages) {
    var urlKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

    var metaData = messages[urlKey] || {};

    return {
        title: metaData.title || messages.default.title,
        description: metaData.description || messages.default.description,
        keywords: metaData.keywords || messages.default.keywords,
        robots: 'noindex,follow'
    };
}

function accountRoute(req, res, next) {
    var locale = req.locale,
        originalUrl = req.originalUrl,
        cookies = req.cookies,
        params = req.params;
    var page = params.page;
    var id = locale.id,
        country = locale.country,
        language = locale.language,
        region = locale.region,
        countries = locale.countries,
        states = locale.states;

    var history = (0, _history.createMemoryHistory)({ initialEntries: [originalUrl] });
    var uberToken = cookies['JSESSIONID_' + region.toUpperCase()];
    var messages = (0, _getMessages2.default)(language);
    var meta = getMetaData(messages.metaData, page);
    var scripts = _config2.default.assets[language] && _config2.default.assets[language].scripts || _config2.default.assets.scripts;
    var styles = _config2.default.assets[language] && _config2.default.assets[language].styles || _config2.default.assets.styles;

    var layoutQuery = 'locale=' + id;
    if (cookies.napMobileApp === 'true' || cookies.napIPadApp === 'true') {
        layoutQuery += '&bare=true';
    }

    var initialState = {
        locale: { id: id, country: country, language: language, region: region, countries: countries, states: states },
        config: clientConfig(uberToken),
        pages: _config2.default.pages
    };

    var store = (0, _redux.createStore)(_appReducer2.default, initialState, (0, _redux.applyMiddleware)((0, _reactRouterRedux.routerMiddleware)(history)));
    var state = JSON.stringify(store.getState());

    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterRedux.ConnectedRouter,
            { history: history },
            _react2.default.createElement(_App2.default, { messages: messages })
        )
    ));

    res.render('main', {
        layout: _config2.default.siteFurnitureService.baseUrl + '?' + layoutQuery,
        meta: meta,
        scripts: scripts,
        styles: styles,
        state: state,
        content: content,
        hash: _config2.default.gitHash
    }, function (error, html) {
        if (error) return next(error);
        return res.send(html);
    });
}

exports.default = router;