import React from 'react';
import { view } from 'react-easy-state';

import globalState from '../../store';

import {
  places as placesClass,
  mainContent
} from './index.css';

import discoverImg from '../Menu/discover.png';

import PlaceItem from '../PlaceItem';
import Title from '../Title';

const Discover = () => (
  <div className={mainContent}>
    <Title isLoading={globalState.places.length === 0} title="Discover places near you and earn GreenCoins" img={discoverImg} />
    <div className={placesClass}>
      {
        globalState.places.map(place => (
          <PlaceItem key={place.Id} placeId={place.Id} />
        ))
      }
    </div>
  </div>
);

export default view(Discover);
