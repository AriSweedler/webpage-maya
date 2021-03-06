import React, { useState } from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ClipArray from '../components/Clips/clipArray'
import SearchBar from '../components/SearchBar/searchBar'

const ClipsPage = ( {data} ) => {
  // React Hooks rock!
  const [myTag, setTag] = useState({"category": null, "option": null});

  return (
    <Layout>
      <SearchBar tag={myTag} searchCallback={
        (category, option) => setTag({"category": category, "option": option})
      } />
      <ClipArray tag={myTag} data={data}/>
    </Layout>
  );
}

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
