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
    color: #F9F6B8;
  }
`
const Outside = styled.div`
  background: #00bdae;
`
const Inside = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1rem 1rem;
  display: flex;
`

const Footer = ({ siteTitle }) => (
  <Outside>
    <Inside as="nav">

      <SocialIcon href="https://il.linkedin.com/in/maya-sweedler-601b52127/" target="_blank">
        <FaLinkedin />
      </SocialIcon>

      <SocialIcon href="mailto:maya.sweedler@gmail.com?subject=Mail from Our Site" target="_blank">
        <FaEnvelope />
      </SocialIcon>

      <SocialIcon href="https://twitter.com/mayasweedler" target="_blank">
        <FaTwitter />
      </SocialIcon>

    </Inside>
    {/* <p style={{ fontSize: "9px", paddingLeft: "10px" }}>I have a cool brother</p> */}
  </Outside>
)

export default Footer;
