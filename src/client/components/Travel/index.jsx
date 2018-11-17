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

function addRandomTravelTransaction() {
  const KM_TRAVELLED = 12;
  const earned = prices[0].value * KM_TRAVELLED;
  globalState.addTransaction({
    amount: earned,
    description: 'Travelled by bus',
    type: 'travel',
    distance: KM_TRAVELLED,
    travelType: 'Bus'
  });
  globalState.hooray = {
    description: `You just travelled ${KM_TRAVELLED}km with the Bus.`,
    title: 'Hooray!',
    amount: earned
  };
}

const Travel = () => (
  <div>
    <Title title={`${globalState.distanceTravelled}km already travelled in a green way`} img={travelImg} />
    <div className={priceTable} onClick={addRandomTravelTransaction} tabIndex={0} onKeyDown={() => {}} role="button">
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
