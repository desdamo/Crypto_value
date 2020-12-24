/* eslint-disable max-len */

import React from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';

import './list.scss';

import logo from './bitcoin_btc.svg';


const List = () => (
  <div className="list__container">
    <Grid divided="vertically">
    <Grid.Row columns={6}>
        <Grid.Column centered textAlign="center" verticalAlign="middle">
        <h2 className="list__title" >Logo</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center" verticalAlign="middle">
          <h2 className="list__title">Rank</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center" verticalAlign="middle">
          <h2 className="list__title">Name</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center" verticalAlign="middle">
          <h2 className="list__title">Symbol</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center" verticalAlign="middle">
          <h2 className="list__title">Price USD</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center" verticalAlign="middle">
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={6}>
        <Grid.Column centered textAlign="center">
          <Image centered className="list__logo" src={logo} size="mini" />
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <h2 className="list__rank">1</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <h2 className="list__name">BITCOIN</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <h2 className="list__symbol">BTC</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <h2 className="list__price">20 000 USD</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <Button>Selectionner</Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={6}>
        <Grid.Column centered textAlign="center">
          <Image centered className="list__logo" src={logo} size="mini" />
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <h2 className="list__rank">1</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <h2 className="list__name">BITCOIN</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <h2 className="list__symbol">BTC</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <h2 className="list__price">20 000 USD</h2>
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <Button>Selectionner</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default List;
