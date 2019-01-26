import React from 'react'

import Layout from '../components/layout'
import Clips from '../components/Clips/clipArray'
// import SearchBar from '../components/SearchBar/searchBar'

//TODO get all the clips, and sort them based on the nav bar
const ClipsPage = () => (
  <Layout>
    {/* <SearchBar /> */}
    <div>Search Bar goes here</div>
    <Clips />
  </Layout>
)

export default ClipsPage
