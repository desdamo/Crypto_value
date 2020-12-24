/* eslint-disable max-len */

import React from 'react';
import { Container } from 'semantic-ui-react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import './sparkline.scss';

const Sparkline = () => (
    <div className="sparkline">
  <Container className="sparkline__container" fluid textAlign="center">
    <Sparklines data={[5, 10, 5, 20, 4, 25, 50, 30, 2,20]} limit={10} width={300} height={50}>
      <SparklinesLine className="sparkline__line" color="orange" />
    </Sparklines>
  </Container>
  </div>
);

export default Sparkline;
