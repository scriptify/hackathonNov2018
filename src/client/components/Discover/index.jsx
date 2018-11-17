import React from 'react';
import { view } from 'react-easy-state';

import globalState from '../../store';

import {
  places as placesClass,
  mainContent,
  contentLoading
} from './index.css';

import discoverImg from '../Menu/discover.png';

import PlaceItem from '../PlaceItem';

const Discover = () => (
  <div className={mainContent}>
    <h1 className={globalState.places.length === 0 ? contentLoading : ''}>
      <img src={discoverImg} alt="Discover" />
      <div>Discover places near you and earn GreenCoins</div>
    </h1>
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
