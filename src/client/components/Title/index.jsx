import React from 'react';
import { view } from 'react-easy-state';

import {
  contentLoading,
  title as titleClass
} from './index.css';

const Title = ({ img, title, isLoading }) => (
  <h1 className={`${titleClass}${isLoading ? ` ${contentLoading}` : ''}`}>
    <img src={img} alt={title} />
    <div>{title}</div>
  </h1>
);

export default view(Title);
