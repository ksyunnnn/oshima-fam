import React, { Fragment } from 'react';
import styled from 'styled-components';

import Heading from '../../molecules/Heading';
import headingImage from '../../../assets/heading/congratulations.svg';

const Wrapper = styled.div`
  padding: 40px 8px;
  margin-bottom: 80px;
`;

const Button = styled.a`
  display: block;
  margin: auto;
  padding: 8px;
  max-width: 350px;
  cursor: pointer;
  :hover {
    box-shadow: 4px 4px 4px rgba(0,0,0,.2);
  }
`;

export default props => (
  <Wrapper>
    <Button href="https://www.instagram.com/explore/tags/%E3%81%93%E3%81%86%E3%81%B8%E3%81%84%E3%81%A8%E3%82%82%E3%82%88/" target="_blank">
      <img src={headingImage} alt=""/>
    </Button>
  </Wrapper>
);
