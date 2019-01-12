import React, { Fragment } from 'react';
import styled from 'styled-components';

import Heading from '../../molecules/Heading';
import headingImage from '../../../assets/heading/movies.svg';

const Wrapper = styled.div`
  padding: 70px 8px;
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
      text={'お祝いの動画'}
      />
    <MovieWrapper>
      <div><iframe width="365" height="205" src="https://www.youtube.com/embed/zlKeZg9p4LY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div><iframe width="365" height="205" src="https://www.youtube.com/embed/LyLUW3OGAOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </MovieWrapper>
  </Wrapper>
);
