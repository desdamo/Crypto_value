/* eslint-disable max-len */

import React from 'react';
import { Grid } from 'semantic-ui-react';

import './amount.scss';

const Amount = () => (
<div className="amount__container">
  <Grid divided="vertically">
    <Grid.Row columns={2}>
      <Grid.Column>
          <h2 className="amount__currency">20 000 USD</h2>
      </Grid.Column>
      <Grid.Column>
      <h2 className="amount__name">BITCOIN</h2>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
);

export default Amount;
