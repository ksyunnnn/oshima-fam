import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../variables';

const Wrapper = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: auto;
  margin-bottom: 16px;
`;

const Text = styled.div`
  :after {
    content: '';
    display: block;
    width: 56px;
    height: 1px;
    background: ${Colors.black};
    margin: 24px auto;
  }
`;

export default props => (
  <Wrapper>
    <Img src={props.image} />
    <Text>{props.text}</Text>
  </Wrapper>
);
