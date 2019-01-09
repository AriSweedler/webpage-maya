import PropTypes from 'prop-types'
import React from 'react'

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
      }}
    >
      <h1 style={{ margin: 0 }}>
        Social media links TODO
      </h1>
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: '',
}

export default Footer
