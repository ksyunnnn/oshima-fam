import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import HeroView from '../components/organisms/Hero';
import HappyWeddingView from '../components/organisms/HappyWedding';
import MembersView from '../components/organisms/Members';
import CongratulationsView from '../components/organisms/Congratulations';
import MovieView from '../components/organisms/Movies';
import WeddingPartyView from '../components/organisms/WeddingParty';
import MoreView from '../components/organisms/More';

import styled from 'styled-components';
import { Colors } from '../variables';

const MainWrapper = styled.div`
  position: relative;
  z-index: 1;
  top: 608px;
  background: ${Colors.white};
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Haapy Wedding Oshima fam" keywords={[`大島`, `ともよ`]} />
    <HeroView />
    <MainWrapper>
      <HappyWeddingView />
      <MembersView />
      <MovieView />
      <WeddingPartyView />
      <MoreView />
    </MainWrapper>
  </Layout>
)

export default IndexPage
