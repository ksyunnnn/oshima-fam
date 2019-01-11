import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components';
import { media } from '../helpers/media-query';
import { Colors, Distance } from '../variables';
import LogoImage from '../assets/logo.svg';

const Wrapper = styled.div`
  height: 58px;
  background-color: ${Colors.white};
  padding: 8px;
  position: absolute;
  width: 100%;
  ${media.phone`
    height: 50px;
    padding: 4px;
  `}
`;

const Logo = styled.img`
  width: auto;
  height: 42px;
`;

const Header = props => (
  <Wrapper>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
    <Logo src={LogoImage} />
    </Link>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
