import React, {useState} from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ClipArray from '../components/Clips/clipArray'
import SearchBar from '../components/SearchBar/searchBar'

const ClipsPage = ( {data} ) => {
  const [tag, setTag] = useState({category: '', option: ''});

  return (
    <Layout>
      <SearchBar searchCallback={
        (category, option) => {
          console.log(`Logging selection '${category}: ${option}'`);
          setTag(category, option);
        }
      } />
      <ClipArray tag={tag} data={data}/>
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
