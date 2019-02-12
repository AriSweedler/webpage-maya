import React from 'react'
import styled from 'styled-components';

import SearchItem from './searchItem'

const SearchBarWrapper = styled.div`
  // Make the SearchBar stick to the top of the screen if you scroll down
  position: sticky;
  z-index: 1;
  top: 0;

  background-color: #00998c;
  text-align: center;
  color: #f9f9f2;
  padding-bottom: 10px;
  margin-bottom: 20px; /* match grid-gap for ClipsArray */

  display: flex;
  flex-direction: column;
`

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px; /* match padding bottom for the wrapper */
`

const Prefix = styled.div`
  font-size: 2em;
  align-self: center;
`

const StyledTagDescription = styled.div`
  padding-top: 10px; /* match padding bottom for the wrapper */
`
const tagDescription = (tag) => (
  <StyledTagDescription>Sorting by <i>{tag.category}</i>, <b>{tag.option}</b></StyledTagDescription>
)

const SearchBar = (props) => (
  <SearchBarWrapper>
    <StyledSearchBar>
      <Prefix>sort by:</Prefix>
      <SearchItem searchCallback={props.searchCallback} title="publication" options={['Seattle Times', 'LA Times', 'YDN', 'Pittsburgh Post Gazette', 'Wall Street Journal']} />
      <SearchItem searchCallback={props.searchCallback} title="genre" options={['Investigative', 'Political', 'Sports', 'Features']} />
    </StyledSearchBar>
    { props.tag.category ? tagDescription(props.tag) : null }
  </SearchBarWrapper>
)

export default SearchBar
