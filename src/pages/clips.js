import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ClipArray from '../components/Clips/clipArray'
// import SearchBar from '../components/SearchBar/searchBar'

//TODO get all the clips, and sort them based on the nav bar
const ClipsPage = ( {data} ) => (
  <Layout>
    {/* <SearchBar /> */}
    <div>Search Bar goes here</div>
    <ClipArray selectedTag='tag1' data={data}/>
  </Layout>
)

export const query = graphql`
  query ClipsPageQuery {
    site {
      siteMetadata {
        clips {
          imageURL
          title
          description
          articleURL
          genre
          publication
          importance
        }
      }
    }
  }
`
export default ClipsPage
