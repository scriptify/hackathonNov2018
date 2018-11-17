import React from 'react';
import { view } from 'react-easy-state';

import globalState from '../../store';

import {
  currentBalance as currentBalanceClass,
  transactions,
  transaction,
  positive,
  negative
} from './index.css';

/* eslint-disable react/no-array-index-key */
const Transactions = () => (
  <div className={currentBalanceClass}>
    <h1>
      {globalState.currentBalance}æ
    </h1>
    <div className={transactions}>
      {
        globalState.transactions.map((trans, i) => (
          <div key={i} className={`${transaction} ${trans.amount > 0 ? positive : negative}`}>
            {trans.amount > 0 && '+'}{trans.amount} {trans.description}
          </div>
        ))
      }
    </div>
  </div>
);

export default view(Transactions);
