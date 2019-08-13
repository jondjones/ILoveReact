import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router/Approuter';
import "normalize.css/normalize.css";
import './styles/styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('mainElement'));