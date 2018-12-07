import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/planetaryhealth" activeClassName="is-active" exact={true}>Planetary Health</NavLink>
    <NavLink to="/globalhealthhuman" activeClassName="is-active" exact={true}>Global Health Humanitarianism</NavLink>
    <NavLink to="/globalhealthforesight" activeClassName="is-active" exact={true}>Global Health Foresighting</NavLink>
    <NavLink to="/aboutpage" activeClassName="is-active">About</NavLink>
    <NavLink to="/contactpage" activeClassName="is-active">Contact</NavLink>
  </header>
);

export default Header;
