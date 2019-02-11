import React from 'react'
import styled from 'styled-components';

import SearchItem from './searchItem'

const StyledSearchBar = styled.div`
  background-color: #00998c;
  padding: 0.5em;

  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  // Make the SearchBar stick to the top of the screen if you scroll down
  position: sticky;
  z-index: 1;
  top: 0;
`

const Prefix = styled.div`
  font-size: 2em;
  align-self: center;
  color: white;
`

const SearchBar = (props) => (
  <StyledSearchBar>
    <Prefix>sort by:</Prefix>
    <SearchItem searchCallback={props.searchCallback} title="publication" options={['Seattle Times', 'LA Times', 'YDN', 'Pittsburgh Post Gazette', 'Wall Street Journal']} />
    <SearchItem searchCallback={props.searchCallback} title="genre" options={['Investigative', 'Political', 'Sports', 'Features']} />
  </StyledSearchBar>
)

export default SearchBar
