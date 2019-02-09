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

  position: sticky;
  z-index: 1;
  top: 0;
`

const SearchBar = (props) => (
  <StyledSearchBar>
    <SearchItem searchCallback={props.searchCallback} title="publication" options={['Seattle Times', 'LA Times', 'YDN', 'Pittsburgh Post Gazette', 'Wall Street Journal']} />
    <SearchItem searchCallback={props.searchCallback} title="genre" options={['Investigative', 'Political', 'Sports', 'Features']}  />
  </StyledSearchBar>
)

export default SearchBar
