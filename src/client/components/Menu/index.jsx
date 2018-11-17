/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink as RRLink } from 'react-router-dom';

import { menu, menuItem, active } from './index.css';

import discoverImg from './discover.png';
import travelImg from './travel.png';
import buyImg from './buy.png';

const Link = ({ to, children }) => (
  <RRLink className={menuItem} activeClassName={active} to={to} href={to}>{children}</RRLink>
);

const Menu = () => (
  <nav className={menu}>
    <Link to="/discover">
      <img src={discoverImg} alt="Discover" />
    </Link>
    <Link to="/travel">
      <img src={travelImg} alt="Travel" />
    </Link>
    <Link to="/buy">
      <img src={buyImg} alt="Buy" />
    </Link>
  </nav>
);

export default Menu;
