import React from 'react';
import { view } from 'react-easy-state';

import globalState from '../../store';

import ListItem from '../ListItem';

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
    />
  );
};

export default view(GoodsItem);
