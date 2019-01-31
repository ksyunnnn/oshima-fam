import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../variables';

import Heading from '../../molecules/Heading';
import headingImage from '../../../assets/heading/wedding-party.svg';
import movie from '../../../assets/movie_low.mp4';

const Wrapper = styled.div`
  padding: 70px 8px;
  background: ${Colors.white};
`;

const MovieWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 940px;
  margin: auto;
  > div {
    margin: 40px 8px;
  }
`;

export default props => (
  <Wrapper>
    <Heading
      image={headingImage}
      text={'感謝祭の様子'}
      />
    <MovieWrapper>
        <video width="100%" height="100%" controls loop><source src={movie} /></video>
    </MovieWrapper>
  </Wrapper>
);
