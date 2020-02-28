import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App/>
    </Provider>, document.getElementById('root'));
