import React from 'react'
import styled from 'styled-components';

import SearchItem from './searchItem'

const StyledSearchBar = styled.div`
  border: 2px solid #00bdae;
  background-color: #11cebf;
  padding: 5px;
  display: flex;
  justify-content: space-around;
`

const SearchBar = () => (
  <StyledSearchBar>
    <SearchItem title="Publication" items={["a", "b", "c"]}/>
    <SearchItem title="Genre" items={["1", "2", "3"]}/>
    <SearchItem title="Date" items={["d", "e", "f"]}/>
  </StyledSearchBar>
)

export default SearchBar
