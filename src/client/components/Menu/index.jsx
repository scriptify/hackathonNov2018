/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { view } from 'react-easy-state';

import { NavLink as RRLink } from 'react-router-dom';

import globalState from '../../store';

import { menu, menuItem, active, topBar, topBarName, topBarBalance } from './index.css';

import discoverImg from './discover.png';
import travelImg from './travel.png';
import buyImg from './buy.png';

const Link = ({ to, children }) => (
  <RRLink className={menuItem} activeClassName={active} to={to} href={to}>{children}</RRLink>
);

const Menu = () => (
  <div>
    <div className={topBar}>
      <div className={topBarName}>Hi,<br />Maximilian</div>
      <div className={topBarBalance}>
        <Link to="/">
          +{globalState.currentBalance}æ
        </Link>
      </div>
    </div>
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
  </div>
);

export default view(Menu);
