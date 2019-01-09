import { Link } from 'gatsby'
import styled from 'styled-components';

import React from 'react'

const Outside = styled.div`
  background: #F3E5AB;
  margin-bottom: 1.45rem;
`

const Inside = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;

  h1 {
    margin: 0
    * {
      color: white;
      text-decoration: none;
    }
  }
`

const Header = ({ siteTitle }) => (
  <Outside>
    <Inside>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </Inside>
  </Outside>
)

export default Header
