import { summaryReducer } from '@ynap/myaccount-summary-state';
import { customerReducer } from '@ynap/myaccount-customer-state';
import { addressReducer } from '@ynap/address-state';
import { overlayReducer } from '@ynap/overlay';
import { captchaReducer } from '@ynap/captcha-state';
import { reducer as form } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers, composeReducers } from '@ynap/reducer-utils';

export default composeReducers(
    combineReducers({ 
        form, 
        overlays: overlayReducer 
    }), 
    routerReducer,
    summaryReducer,
    customerReducer,
    addressReducer,
    captchaReducer
);
