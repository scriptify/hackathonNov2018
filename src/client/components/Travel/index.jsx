import React from 'react';
import { view } from 'react-easy-state';

import travelImg from '../Menu/travel.png';

import globalState from '../../store';

import Title from '../Title';

import { price as priceClass, priceTable } from './index.css';

const prices = [
  {
    name: 'Bus',
    value: 100
  },
  {
    name: 'Train',
    value: 300
  },
  {
    name: 'Ropeway',
    value: 500
  }
];

const Travel = () => (
  <div>
    <Title title={`${globalState.distanceTravelled}km already travelled in a green way`} img={travelImg} />
    <div className={priceTable}>
      {
        prices.map(price => (
          <div className={priceClass} key={price.name}>
            <span>1km {price.name}</span>
            <span> turns into</span>
            <span> {price.value}æ</span>
          </div>
        ))
      }
    </div>
  </div>
);

export default view(Travel);
