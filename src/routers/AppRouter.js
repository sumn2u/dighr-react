import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PlanetaryHealth from '../components/PlanetaryHealth';
import GlobalHealthHuman from '../components/GlobalHealthHuman';
import GlobalHealthForesight from '../components/GlobalHealthForesight';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/planetaryhealth" component={PlanetaryHealth} exact={true} />
        <Route path="/globalhealthhuman" component={GlobalHealthHuman} exact={true} />
        <Route path="/globalhealthforesight" component={GlobalHealthForesight} exact={true} />
        <Route path="/aboutpage" component={AboutPage} exact={true} />
        <Route path="/contactpage" component={ContactPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
