import React from 'react'
import styled from 'styled-components';

import Header from './header'
import Footer from './footer'
import './layout.css'

const Children = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
const Layout = ({ children }) => (
  <div>
    <Header siteTitle="Maya Sweedler" />
    <Children>{children}</Children>
    <Footer />
  </div>
)

export default Layout
