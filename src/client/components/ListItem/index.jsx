import React from 'react';
import { view } from 'react-easy-state';
import { NavLink } from 'react-router-dom';

import {
  placeItem,
  placeItemTitle,
  placeItemSubtitle,
  placeItemAdd,
  placeItemContent,
  placeMain,
  mainInfo as mainInfoClass,
  goBack,
  actionBtn
} from './index.css';

import backArrow from './back.png';

const Div = ({ children, ...rest }) => (
  <div {...rest}>{children}</div>
);

const PlaceItem = ({
  link, back, id, coverImg, title, subtitle, text, isMain, amount, btnText, btnClick = () => {}
}) => {
  const Wrapper = isMain ? Div : NavLink;

  const mainInfo = (
    <div className={mainInfoClass} dangerouslySetInnerHTML={{ __html: text }} />
  );

  return (
    <Wrapper to={link} onClick={() => window.scrollTo(0, 0)}>
      {
        isMain && (
          <NavLink to={back}>
            <div className={goBack}>
              <img src={backArrow} alt="Go back" />
            </div>
          </NavLink>
        )
      }
      <div className={`${placeItem}${isMain ? ` ${placeMain}` : ''}`} key={id} style={{ backgroundImage: `url(${coverImg})` }}>
        <div className={placeItemContent}>
          <div className={placeItemTitle}>{title}</div>
          <div className={placeItemSubtitle}>{subtitle}</div>
          <div className={placeItemAdd}>{amount}℈</div>
        </div>
        {
          isMain && mainInfo
        }
        {
          btnText && (
            <button className={actionBtn} onClick={btnClick}>{btnText}</button>
          )
        }
      </div>
    </Wrapper>
  );
};

export default view(PlaceItem);
