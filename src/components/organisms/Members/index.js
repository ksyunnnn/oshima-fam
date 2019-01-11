import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../variables';

import Heading from '../../molecules/Heading';
import Member from '../../molecules/Member';
import headingImage from '../../../assets/heading/members.svg';
import Oshima from '../../../assets/face/oshima.svg';
import Moyo from '../../../assets/face/moyo.svg';
import Baby from '../../../assets/face/baby.svg';

import rOshima from '../../../assets/real/oshima.png';
import rMoyo from '../../../assets/real/moyo.png';
import rBaby from '../../../assets/real/baby.png';

const Wrapper = styled.div`
  padding: 70px 0;
  background: #fff;
`;

const MemberWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default props => (
  <Wrapper>
    <Heading image={headingImage} text={'大島家の人々'} />

    <MemberWrapper>
      {[
      { icon: Oshima, name: 'Kohei', image: rOshima },
      { icon: Moyo, name: 'Moyo', image: rMoyo },
      { icon: Baby, name: 'Baby', image: rBaby },
    ].map((v, i) => (
      <Member key={i} {...v} />
    ))}
    </MemberWrapper>
  </Wrapper>
);
