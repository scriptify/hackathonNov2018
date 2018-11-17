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
      amount={100}
      id={place.id}
      coverImg={getCoverImg(place)}
      back="/discover"
    />
  );
};

export default view(PlaceItem);
