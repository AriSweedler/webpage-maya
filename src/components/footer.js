import React from 'react'

import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1rem',
        color: 'white',
        textDecoration: 'none',
      }}
    >

    <a href="https://www.linkedin.com/in/maya-sweedler-601b52127/">
      <FaLinkedin />
    </a>

    <a href="mailto:maya@sweedler.com?subject=Mail from Our Site">
      <FaEnvelope />
    </a>

    <a href="https://twitter.com/mayasweedler">
      <FaTwitter />
    </a>

    </div>
  </div>
)

export default Footer;
