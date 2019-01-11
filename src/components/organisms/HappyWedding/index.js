import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../variables';

import HappyWeddingImage from '../../../assets/happywedding.gif';
import FlagsImage from '../../../assets/flags.svg';
import OshimafamImage from '../../../assets/oshimafam.png';

const Wrapper = styled.div`
  background: ${Colors.white};
  text-align: center;
  padding: 80px 0;
`;

const Oshimafam = styled.div`
  max-width: 375px;
  margin: auto;
`;

const HappyWedding = styled.img`
  max-width: 480px;
  display: block;
  margin: auto;
`;

const Flag = styled.img`
  max-width: 480px;
  display: block;
  margin: auto;
`;

const FlagBottom = styled.img`
  max-width: 480px;
  display: block;
  margin: auto;
  transform: rotate(180deg)
`;

export default props => (
  <Wrapper>
    <Flag src={FlagsImage} />
    <HappyWedding src={HappyWeddingImage} />
    <FlagBottom src={FlagsImage} />
  </Wrapper>
);
