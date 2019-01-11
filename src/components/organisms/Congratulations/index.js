import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Colors, Distance } from '../../../variables';

import Heading from '../../molecules/Heading';
import headingImage from '../../../assets/heading/congratulations.svg';

// import CongratulationsContainer from '../../../containers/CongratulationsContainer';

const Wrapper = styled.div`
  padding: 70px 0;
  background: ${Colors.white};
`;

const CongratulationsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 360px;
  margin: auto;
  padding: 0 ${Distance.mobile};
`;

export default props => (
  <Wrapper>
    <Heading
      image={headingImage}
      text={'みんなからのメッセージ'}
      />
    <CongratulationsWrapper>
      
    </CongratulationsWrapper>
  </Wrapper>
)
