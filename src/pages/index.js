import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import HeroView from '../components/organisms/Hero';
import HappyWeddingView from '../components/organisms/HappyWedding';
import MembersView from '../components/organisms/Members';
import CongratulationsView from '../components/organisms/Congratulations';

const IndexPage = () => (
  <Layout>
    <SEO title="Haapy Wedding Oshima fam" keywords={[`大島`, `ともよ`]} />
    <HeroView />
    <HappyWeddingView />
    <MembersView />
    <CongratulationsView />
  </Layout>
)

export default IndexPage
