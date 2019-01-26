import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Clips from '../components/Clips/clipArray'
// import SearchBar from '../components/SearchBar/searchBar'

//TODO get all the clips, and sort them based on the nav bar
const ClipsPage = ( {data} ) => (
  <Layout>
    {/* <SearchBar /> */}
    <div>Search Bar goes here</div>
    <Clips data={data}/>
  </Layout>
)

export const query = graphql`
  query ClipsPageQuery {
    site {
      siteMetadata {
        title
        key
      }
    }
  }
`
export default ClipsPage
