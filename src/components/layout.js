import React from 'react'
import styled from 'styled-components';

import Header from './header'
import Footer from './footer'
import './layout.css'

const Wrapper = styled.div`
  background-color: #f9f9f2;
`

const Children = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
const Layout = ({ children }) => (
  <Wrapper>
    <Header siteTitle="Maya Sweedler" />
    <Children>{children}</Children>
    <Footer />
  </Wrapper>
)

export default Layout
