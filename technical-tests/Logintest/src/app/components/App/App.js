import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { change } from 'redux-form';
import BEMHelper from '@ynap/bem-helper';
import login from '../../actions/login';
import LoginForm from '../LoginForm/LoginForm';

const classNames = new BEMHelper('App');

function App({ login }) {
    return (
        <div>
            <Switch>
                <Route path="/:locale/account/login" exact render={() => (
                    <div className={classNames('login')}>
                        <h2 className={classNames('title')}>Login</h2>
                        <LoginForm onLogin={login} />
                    </div>
                )} />
            </Switch>
        </div>
    );
}

export default connect(undefined, { login })(App);
