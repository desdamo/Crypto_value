/* eslint-disable max-len */

import React from 'react';
import { Container } from 'semantic-ui-react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import './sparkline.scss';

const Sparkline = ({spark}) => (
    <div className="sparkline">
  <Container className="sparkline__container" fluid textAlign="center">
    <Sparklines className="slide-top" data={spark} limit={10} width={300} height={50}>
      <SparklinesLine className="sparkline__line slide-top" color="orange" />
    </Sparklines>
  </Container>
  </div>
);

export default Sparkline;
