import React from 'react';
import { hot } from 'react-hot-loader';
import { view } from 'react-easy-state';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import globalState from '../../store';

import Menu from '../Menu';
import Discover from '../Discover';
import Travel from '../Travel';
import Buy from '../Buy';
import PlaceItem from '../PlaceItem';
import GoodsItem from '../GoodsItem';
import Transactions from '../Transactions';
import Hooray from '../Hooray';

import './index.css';

const App = () => (
  <Router>
    <div>
      <Menu />
      <Route
        exact
        path="/discover/:placeId"
        render={({ match: { params: { placeId } } }) => <PlaceItem placeId={placeId} isMain />}
      />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/travel" component={Travel} />
      <Route
        exact
        path="/buy/:goodId"
        render={({ match: { params: { goodId } } }) => <GoodsItem goodsId={goodId} isMain />}
      />
      <Route exact path="/buy" component={Buy} />
      <Route exact path="/" component={Transactions} />
      {
        globalState.hooray && <Hooray {...globalState.hooray} />
      }
    </div>
  </Router>
);

export default hot(module)(view(App));
