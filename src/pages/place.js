import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import styled from 'styled-components';
import { Colors, Distance } from '../variables';

import Map1 from '../assets/map/map1.png';
import Map2 from '../assets/map/map2.png';
import Map3 from '../assets/map/map3.png';
import Map4 from '../assets/map/map4.png';
import Map5 from '../assets/map/map5.png';
import Map6 from '../assets/map/map6.png';
import Map7 from '../assets/map/map65.png';
import Map8 from '../assets/map/map7.png';

const Wrapper = styled.div`
  padding-top: 80px;
  background-color: ${Colors.white};
`;

const Innner = styled.div`
  max-width: 1040px;
  padding: 8px;
  margin: auto;
  h2 {
    margin-bottom: 24px;
  }
  pre {
    margin-bottom: 24px;
  }
  h3 {
    margin-bottom: 8px;
  }
  p {
    line-height: 2em;
  }
  img {
    margin-bottom: 40px;
  }
`;

const SecondPage = () => (
  <Layout>
    <SEO title="Place" />

    <Wrapper>
      <Innner>
        <h2>会場への行き方</h2>
        <pre>
          東京都渋谷区神南1-8-18 B1F ( <a target="_blank" href="https://goo.gl/maps/VYLyuKqSLLP2">GoogleMap</a> )<br />
        </pre>

        <h3>【1】渋谷駅ハチ公出口スタート</h3>
        <p>赤矢印：ハチ公像</p>
        <p>青矢印：進行方向</p>
        <img src={Map1} alt=""/>

        <h3>【2】進行方向へ進む</h3>
        <p>青矢印：進行方向</p>
        <img src={Map2} alt=""/>

        <h3>【3】道なりに進行方向へ進む(左側歩道)</h3>
        <p>青矢印：進行方向</p>
        <img src={Map3} alt=""/>

        <h3>【4】ニトリを目印に進む</h3>
        <p>青矢印：ニトリ</p>
        <img src={Map4} alt=""/>

        <h3>【5】ニトリを越えて200Mほど進む</h3>
        <p>青矢印：進行方向</p>
        <img src={Map5} alt=""/>

        <h3>【6】矢印の方向へ曲がる</h3>
        <p>青矢印：進行方向</p>
        <img src={Map6} alt=""/>

        <h3>【7】道なり左側に現れる消防署を更に左に曲がる</h3>
        <p>青矢印：進行方向</p>
        <img src={Map7} alt=""/>

        <h3>【8】道なり左側に目的地が現れます。渋谷高齢者ケアセンターが目印。</h3>
        <p>青矢印：進行方向</p>
        <img src={Map8} alt=""/>

        <pre>
          東京都渋谷区神南1-8-18 B1F ( <a target="_blank" href="https://goo.gl/maps/VYLyuKqSLLP2">GoogleMap</a> )<br />
        </pre>
      </Innner>

    </Wrapper>

  </Layout>
)

export default SecondPage
