import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from '../Menu';
import Discover from '../Discover';
import Travel from '../Travel';
import Buy from '../Buy';
import PlaceItem from '../PlaceItem';
import Transactions from '../Transactions';

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
      <Route exact path="/buy" component={Buy} />
      <Route exact path="/" component={Transactions} />
    </div>
  </Router>
);

export default hot(module)(App);
