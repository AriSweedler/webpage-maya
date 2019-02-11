import React from 'react'

import ClipsPage from './clips'

//TODO redirect the URL as well? instead of showing the same thing? hacky stuff here is lame :(
const IndexPage = ( {data} ) => (
  <ClipsPage data={data} />
)

/* TODO how can I redirect to Clips page instead of leaving the blank URL? */
export const query = graphql`
  query IndexPageQuery {
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

export default IndexPage
