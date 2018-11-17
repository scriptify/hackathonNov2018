import React from 'react';
import { view } from 'react-easy-state';

import globalState from '../../store';

import ListItem from '../ListItem';

function getCoverImg(placeItemQuery) {
  const [image] = placeItemQuery.ImageGallery.sort((image1, image2) => (
    (image2.Width + image2.Height) - (image1.Width + image1.Height)
  ));

  return image ? image.ImageUrl : '';
}

const PlaceItem = ({ placeId, isMain = false }) => {
  const amount = 100;
  const place = globalState.places.find(p => p.Id === placeId);
  if (!place)
    return <p>No such place</p>;

  return (
    <ListItem
      text={place.Detail.en.BaseText}
      link={`/discover/${placeId}`}
      title={place.Shortname}
      isMain={isMain}
      subtitle={place.LocationInfo.AreaInfo.Name.en}
      amount={amount}
      id={place.id}
      coverImg={getCoverImg(place)}
      back="/discover"
      btnText={isMain ? 'Collect reward' : ''}
      btnClick={() => {
        globalState.addTransaction({
          amount,
          description: place.Shortname
        });
        globalState.hooray = {
          title: 'Hooray!',
          description: `You just arrived at ${place.Shortname}`,
          amount
        };
      }}
    />
  );
};

export default view(PlaceItem);
