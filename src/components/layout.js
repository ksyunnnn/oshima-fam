import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

import Header from './header'
import './layout.css'

const Footer = styled.footer`
  padding: 8px;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
          <Footer>
            © {new Date().getFullYear()}, Happy Wedding
            {` `}
            <a target="_blank" href="https://www.instagram.com/explore/tags/%E3%81%93%E3%81%86%E3%81%B8%E3%81%84%E3%81%A8%E3%82%82%E3%82%88/">#こうへいともよ</a>
          </Footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
