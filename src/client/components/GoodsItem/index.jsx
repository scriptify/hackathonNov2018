import React from 'react';
import { view } from 'react-easy-state';

import globalState from '../../store';

import treeImg from './tree.png';

import ListItem from '../ListItem';

function buyGood(good) {
  globalState.addTransaction({
    amount: good.price * -1,
    description: good.title
  });
  globalState.hooray = {
    title: 'Cool.',
    description: 'You just supported the green economy.',
    img: treeImg
  };
}

const GoodsItem = ({ goodsId, isMain = false }) => {
  const good = globalState.greenGoods.find(g => g.id === goodsId);
  if (!good)
    return <p>No such offer</p>;

  return (
    <ListItem
      title={good.title}
      text={good.description}
      subtitle={good.supplier}
      link={`/buy/${good.id}`}
      coverImg={good.coverImg}
      amount={good.price}
      key={good.id}
      isMain={isMain}
      back="/buy"
      btnText={isMain ? 'Invest GreenCoins' : ''}
      btnClick={() => buyGood(good)}
    />
  );
};

export default view(GoodsItem);
