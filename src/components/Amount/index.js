/* eslint-disable max-len */

import React from 'react';
import { Grid } from 'semantic-ui-react';
import toFixed from 'tofixed';

import './amount.scss';

const rates = [{
  name: 'GBP',
  rateValue: 0.7398968819,
},
{
  name: 'CHF',
  rateValue: 0.8882887307,
},
{
  name: 'EUR',
  rateValue: 0.8183975775,
},
];

const Amount = ({
  currencyValue, currencyName, currencies, clickCurrency,
}) => (
  <div className="amount__container">
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <h2 className="amount__currency">{toFixed(currencyValue, 2)} USD   ===>   {toFixed(currencies, 2)}
            <select
              onChange={clickCurrency}
              name="currency"
              id="currency-select"
              className="select__currency"
            >
              <option selected="true" disabled="disabled">Currency</option>
              {rates.map((rate) => (
                <option
                  key={rate.name}
                  value={rate.rateValue}
                >{rate.name}
                </option>
              ))}
            </select>
          </h2>
        </Grid.Column>
        <Grid.Column>
          <h2 className="amount__name">{currencyName}</h2>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Amount;
