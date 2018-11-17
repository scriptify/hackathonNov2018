import React from 'react';
import { view } from 'react-easy-state';

import buyImg from '../Menu/buy.png';

import globalState from '../../store';

import { goodsList } from './index.css';

import Title from '../Title';
import GoodsItem from '../GoodsItem';

const Buy = () => (
  <div>
    <Title title="Re-Invest into green economy" img={buyImg} />
    <div className={goodsList}>
      {
        globalState.greenGoods.map(good => (
          <GoodsItem goodsId={good.id} key={good.id} />
        ))
      }
    </div>
  </div>
);

export default view(Buy);
