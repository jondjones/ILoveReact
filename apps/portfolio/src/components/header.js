import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Expensify
                </h1>
                <ol>
                <li><NavLink to={this.props.portfolioLink} activeClassName='is-active'>Portfolio</NavLink></li>
                <li><NavLink to={this.props.contactPageLink} activeClassName='is-active' exact={true}>Contact</NavLink></li>
                </ol>
            </div>
        )}
    };

export default Header;