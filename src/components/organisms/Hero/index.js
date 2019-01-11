import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Colors, Distance } from '../../../variables';

import HeroImage from '../../../assets/hero.jpg';
import FirstMsg from '../../../assets/msg/first.svg';
import SecondMsg from '../../../assets/msg/second.svg';
import ThirdMsg from '../../../assets/msg/third.svg';
import FourthMsg from '../../../assets/msg/fourth.svg';

const Wrapper = styled.div`
  background: url(${HeroImage});
  background-position: center;
  background-size: cover;
  min-height: 608px;
  padding: 0 ${Distance.mobile};
  padding-top: 50px;
`;

const MsgWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  color: ${Colors.white};
  background: ${Colors.black};

  position: absolute;
  right: ${Distance.mobile};

  ${props =>
    props.first
      ? `
      margin-top: 48px;
    `
      : ``}
  ${props =>
    props.second
      ? `
      margin-top: ${48 + 24 + 36}px;
    `
      : ``}
  ${props =>
    props.third
      ? `
      margin-top: ${48 + (24 + 254) + 36 * 2}px;
    `
      : ``}
  ${props =>
    props.fourth
      ? `
      margin-top: ${48 + (24 + 254 + 24) + 36 * 3}px;
    `
      : ``}
`;

export default props => (
  <Wrapper>
    <MsgWrapper first>
      <img src={FirstMsg} />
    </MsgWrapper>
    <MsgWrapper second>
      <img src={SecondMsg} />
    </MsgWrapper>
    <MsgWrapper third>
      <img src={ThirdMsg} />
    </MsgWrapper>
    <MsgWrapper fourth>
      <img src={FourthMsg} />
    </MsgWrapper>
  </Wrapper>
);
