import { Link } from 'gatsby'
import styled from 'styled-components';

import React from 'react'

const Outside = styled.div`
  background: #F3E5AB;
  margin-bottom: 1.45rem;
`
/* base a component's style off of an html object */
const Inside = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`
/* extend a component's style */
const StyledLink = styled(Link)`
  margin: 0
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Outside>
    <Inside>
      <StyledLink as="h1" to="/">
        {siteTitle}
      </StyledLink>
    </Inside>
  </Outside>
)

export default Header
