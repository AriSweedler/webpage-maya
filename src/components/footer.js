import React from 'react'

import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const SocialIcon = styled.a`
  margin: auto;
  font-size: 300%;
  color: white;
  text-decoration: none;
  transition: 0.3s;
  :hover {
    color: turquoise;
  }
`
const Outside = styled.div`
  background: #F3E5AB;
`
const Inside = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1rem 1rem;
  display: flex;
`

const Footer = ({ siteTitle }) => (
  <Outside>
    <Inside>

      <SocialIcon href="https://www.linkedin.com/in/maya-sweedler-601b52127/">
        <FaLinkedin />
      </SocialIcon>

      <SocialIcon href="mailto:maya@sweedler.com?subject=Mail from Our Site">
        <FaEnvelope />
      </SocialIcon>

      <SocialIcon href="https://twitter.com/mayasweedler">
        <FaTwitter />
      </SocialIcon>

    </Inside>
  </Outside>
)

export default Footer;
