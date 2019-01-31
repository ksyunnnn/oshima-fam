import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../variables';

import HappyWeddingImage from '../../../assets/happywedding.gif';

const Wrapper = styled.div`
  background: ${Colors.white};
  text-align: center;
  padding: 80px 0;
`;

const HappyWedding = styled.img`
  max-width: 480px;
  display: block;
  margin: auto;
`;

export default props => (
  <Wrapper>
    {/* <Flag src={FlagsImage} /> */}
    <HappyWedding src={HappyWeddingImage} />
    {/* <FlagBottom src={FlagsImage} /> */}
  </Wrapper>
);
