import React from 'react';
import { view } from 'react-easy-state';

import globalState from '../../store';

import happyImg from './happy.png';

import {
  hooray,
  title as titleClass,
  description as descriptionClass,
  closeBtn,
  container
} from './index.css';

const Hooray = ({
  title, description, amount, img = happyImg
}) => (
  <div className={hooray}>
    <div className={closeBtn}>
      <button
        onClick={() => {
          globalState.hooray = null;
        }}
      >
        x
      </button>
    </div>
    <div className={container}>
      <img src={img} alt={title} />
      <div className={titleClass}>{title}</div>
      <div className={descriptionClass}>
        {description}<br />
        {
          amount && (
            <span>
              You earned <b>{amount}æ</b>.
            </span>
          )
        }
      </div>
    </div>
  </div>
);

export default view(Hooray);
