import React from 'react';
import { view } from 'react-easy-state';
import { NavLink } from 'react-router-dom';

import globalState from '../../store';

import {
  placeItem,
  placeItemTitle,
  placeItemSubtitle,
  placeItemAdd,
  placeItemContent,
  placeMain,
  mainInfo as mainInfoClass,
  goBack
} from './index.css';

import backArrow from './back.png';

function getCoverImg(placeItemQuery) {
  const [image] = placeItemQuery.ImageGallery.sort((image1, image2) => (
    (image2.Width + image2.Height) - (image1.Width + image1.Height)
  ));

  return image ? image.ImageUrl : '';
}

const Div = ({ children, ...rest }) => (
  <div {...rest}>{children}</div>
);

const PlaceItem = ({ placeId, isMain = false }) => {
  const place = globalState.places.find(p => p.Id === placeId);
  if (!place)
    return <p>No such place</p>;
  const Wrapper = isMain ? Div : NavLink;

  const mainInfo = (
    <div className={mainInfoClass} dangerouslySetInnerHTML={{ __html: place.Detail.en.BaseText }} />
  );

  return (
    <Wrapper to={`/discover/${placeId}`} onClick={() => window.scrollTo(0, 0)}>
      {
        isMain && (
          <NavLink to="/discover">
            <div className={goBack}>
              <img src={backArrow} alt="Go back" />
            </div>
          </NavLink>
        )
      }
      <div className={`${placeItem}${isMain ? ` ${placeMain}` : ''}`} key={place.Id} style={{ backgroundImage: `url(${getCoverImg(place)})` }}>
        <div className={placeItemContent}>
          <div className={placeItemTitle}>{place.Shortname}</div>
          <div className={placeItemSubtitle}>{place.LocationInfo.AreaInfo.Name.en}</div>
          <div className={placeItemAdd}>+100æ</div>
        </div>
        {
          isMain && mainInfo
        }
      </div>
    </Wrapper>
  );
};

export default view(PlaceItem);
