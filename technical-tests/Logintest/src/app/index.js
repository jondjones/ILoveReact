import React from 'react';
import fetch from 'isomorphic-fetch';
import thunkInject from 'redux-thunk-inject';
import wrapFetchWithLogger from '@ynap/logging-utils/lib/wrapFetchWithLogger';
import clientLogger from '@ynap/logging-utils/lib/clientLogger';
import FrontendMonitoring from '@mrporter/frontend-monitoring';
import { createBrowserHistory } from 'history';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import appReducer from './appReducer';
import App from './components/App/App';
import messages from './messages';

const { state } = window.MA;
const frontendMonitoring = new FrontendMonitoring({
    ...state.config.keen,
    globalProperties: {
        app_name: state.config.appName,
        business: state.config.business
    }
});

const logger = clientLogger({ browser: { write: frontendMonitoring.trackEvent } });
const fetchAndLog = wrapFetchWithLogger(fetch, logger);
const history = createBrowserHistory();

const store = createStore(
    appReducer,
    state,
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunkInject(fetchAndLog)
        )
    )
);

const { locale } = store.getState();
const { language } = locale;

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App messages={messages[language]} />
        </ConnectedRouter>
    </Provider>,
    document.querySelector('.ma-wrapper'),
);
