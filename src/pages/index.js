import React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby'

/*
light yellow: #F3E5AB
turquoise: turqoise
white: white
light grey: lightgrey
*/
const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about">About me</Link>
  </Layout>
)

export default IndexPage
