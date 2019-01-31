import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../variables';

const Wrapper = styled.div`
  padding: 40px 8px;
  padding-bottom: 80px;
  background: ${Colors.white};
`;

const Button = styled.a`
  display: block;
  margin: auto;
  padding: 8px;
  max-width: 350px;
  text-align: center;
`;

export default props => (
  <Wrapper>
    <Button href="https://www.instagram.com/explore/tags/%E3%81%93%E3%81%86%E3%81%B8%E3%81%84%E3%81%A8%E3%82%82%E3%82%88/" target="_blank">
      # こうへいともよ
    </Button>
  </Wrapper>
);
