import { Link } from 'gatsby'
import styled from 'styled-components';

import React from 'react'

const Outside = styled.div`
  background: #00998c;
  margin-bottom: 1.45rem;
`
/* base a component's style off of an html object */
const Inside = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
`
/* extend a component's style, setting some new stuff */
const StyledLink = styled(Link)`
  color: #f9f9f2;
  text-decoration: none;
  font-weight: 100;
  line-height: 1.1;

  transition: 0.3s;
  :hover {
    color: #F9F6B8;
  }

  //Is there a better way to make dividers between these things?
  :before {
    content: "| ";
  }

  :first-child {
    :before {
      content: "";
    }
    font-size: 2.5rem;
    font-weight: 700;
  }
`

const MyNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  font-size: 2rem;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: left;
  }
`

const pages = [
  {to: "/", title: "Maya Sweedler"},
  {to: "/about", title: "about"},
  {to: "/resume", title: "resume"},
  {to: "/clips", title: "clips"},
];
const navItems = [];
for(let item of pages) {
  navItems.push(
    <StyledLink key={item.title} to={item.to}>{item.title}</StyledLink>,
  )
}

const Header = ({ siteTitle }) => (
  <Outside>
    <Inside>
      <MyNav>{navItems}</MyNav>
    </Inside>
  </Outside>
)

export default Header
