import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'express';
import { createMemoryHistory } from 'history';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { composeReducers } from '@ynap/reducer-utils';

import config from '../config';
import appReducer from '../../app/appReducer';
import App from '../../app/components/App/App';
import getMessages from '../getMessages';

const router = Router();

router.get('/:page(addresses|login)?', [featureCheck], accountRoute);
router.get('/:page(addresses)/?*?', accountRoute);

function featureCheck(req, res, next) {
    //Login page
    if(req.params.page === 'login' && !config.loginFeatureEnabled) {
        res.sendStatus(404);
    } else {
        next();
    }
}

function clientConfig(uberToken) {
    return {
        appName: 'myaccount',
        unauthorisedRedirect: config.unauthorisedRedirect,
        clientRequest: config.clientRequest,
        titles: config.titles,
        keen: config.keen,
        business: config.business,
        watsonService: {
            uberToken,
            baseUrl: config.watsonService.baseUrl,
            brandId: config.watsonService.brandId
        },
        captchaService: config.captchaService
    };
}

function getMetaData(messages, urlKey = 'default') {
    const metaData = messages[urlKey] || {};

    return {
        title: metaData.title || messages.default.title,
        description: metaData.description || messages.default.description,
        keywords: metaData.keywords || messages.default.keywords,
        robots: 'noindex,follow'
    };
}

export function accountRoute(req, res, next) {
    const { locale, originalUrl, cookies, params } = req;
    const { page } = params;
    const { id, country, language, region, countries, states } = locale;
    const history = createMemoryHistory({ initialEntries: [originalUrl] });
    const uberToken = cookies[`JSESSIONID_${region.toUpperCase()}`];
    const messages = getMessages(language);
    const meta = getMetaData(messages.metaData, page);
    const scripts = (config.assets[language] && config.assets[language].scripts) || config.assets.scripts;
    const styles = (config.assets[language] && config.assets[language].styles) || config.assets.styles;

    let layoutQuery = `locale=${id}`;
    if (cookies.napMobileApp === 'true' || cookies.napIPadApp === 'true') {
        layoutQuery += '&bare=true';
    }

    const initialState = {
        locale: { id, country, language, region, countries, states },
        config: clientConfig(uberToken),
        pages: config.pages
    };

    const store = createStore(appReducer, initialState, applyMiddleware(routerMiddleware(history)));
    const state = JSON.stringify(store.getState());

    const content = renderToString(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App messages={messages} />
            </ConnectedRouter>
        </Provider>
    );

    res.render('main', {
        layout: `${config.siteFurnitureService.baseUrl}?${layoutQuery}`,
        meta,
        scripts,
        styles,
        state,
        content,
        hash: config.gitHash
    }, (error, html) => {
        if (error) return next(error);
        return res.send(html);
    });
}

export default router;
