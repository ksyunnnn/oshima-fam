import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Colors, Distance } from 'variables';

const Wrapper = styled.div`
  height: 50px;
  line-height: 50px;
  background-color: ${Colors.white};
  padding: 0 ${Distance.mobile};
  position: absolute;
  width: 100%;
`;

export default props => <Wrapper>Happy Wedding</Wrapper>;
