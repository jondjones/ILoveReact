'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _myaccountSummaryState = require('@ynap/myaccount-summary-state');

var _myaccountCustomerState = require('@ynap/myaccount-customer-state');

var _addressState = require('@ynap/address-state');

var _overlay = require('@ynap/overlay');

var _captchaState = require('@ynap/captcha-state');

var _reduxForm = require('redux-form');

var _reactRouterRedux = require('react-router-redux');

var _reducerUtils = require('@ynap/reducer-utils');

exports.default = (0, _reducerUtils.composeReducers)((0, _reducerUtils.combineReducers)({
    form: _reduxForm.reducer,
    overlays: _overlay.overlayReducer
}), _reactRouterRedux.routerReducer, _myaccountSummaryState.summaryReducer, _myaccountCustomerState.customerReducer, _addressState.addressReducer, _captchaState.captchaReducer);