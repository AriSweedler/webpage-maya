import React from 'react'
import styled from 'styled-components';

import SearchItem from './searchItem'

const StyledSearchBar = styled.div`
  border: 2px solid #00bdae;
  background-color: #11cebf;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`

const SearchBar = (props) => (
  <StyledSearchBar>
    <div>(Search bar dynamic not working yet... Filtering based on most important)</div>
    <SearchItem searchCallback={props.searchCallback} title="Importance" options={['least', 'somewhat', 'moderately', 'strongly', 'most']} />
    <SearchItem searchCallback={props.searchCallback} title="Publication" options={['Seattle Times', 'LA Times', 'YDN', 'Pittsburgh Post Gazette', 'Wall Street Journal']} />
    <SearchItem searchCallback={props.searchCallback} title="Genre" options={['Investigative', 'Political', 'Sports', 'Features', 'Miscellaneous']}  />
  </StyledSearchBar>
)

export default SearchBar
