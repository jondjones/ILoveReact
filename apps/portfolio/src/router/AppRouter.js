import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

//Pages
import Homepage from '../pages/homepage';
import NotFoundPage from '../pages/notfoundpage';
import PortfolioPage from '../pages/portfolio';
import PortfolioDetailsPage from '../pages/portfoliodetails';
import ContactPage from '../pages/contact';

//Components
import Header from '../components/header';

//Variables
const homePageLink = '/';
const portfolioLink = '/portfolio'
const portfolioDetailsLinks = '/portfolio/:id';
const contactPageLink = '/contact';

const AppRouter = () => (
  <BrowserRouter>
    <div>
        <Header  
            contactPageLink={contactPageLink}
            portfolioLink={portfolioLink}
        />
        <Switch>
            <Route path={homePageLink} component={Homepage} exact={true} />
            <Route path={portfolioDetailsLinks} component={PortfolioDetailsPage} />
            <Route path={portfolioLink} component={PortfolioPage} />
            <Route path={contactPageLink} component={ContactPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;