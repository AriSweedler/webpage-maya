import React from 'react'
import {MenuButton, MenuList, MenuItem} from 'react-menu-list';

import styled from 'styled-components';

const StyledMenuItem = styled(MenuItem)`
  background: grey;
  color: black;
  font-size: 1.2em;
  padding: 5px 10px;
  transition: 0.05s;

  cursor: pointer;
  user-select: none; //prevent users from highlighting the text
`

const StyledSearchItem = styled(MenuButton)`
  cursor: pointer;
  user-select: none; //prevent users from highlighting the text
  border: none;

  font-size: 2em;
  padding: 10px 20px;

  transition: 0.1s;
  &:hover {
    background: #F9F6B8;
  }

  //TODO maybe upon an item being hovered have the StyledSearchItem also be colored
`

const SearchItem = (props) => {
  const options = [];
  for (let opt of props.options) {
    options.push(
      <StyledMenuItem
        key={opt}
        highlightedStyle={{background: '#F9F6B8'}}
        onItemChosen={() => props.searchCallback(props.title, opt)}
        {...props}
      >{opt}</StyledMenuItem>
    );
  }
  const myMenu = <MenuList>{options}</MenuList>
  return <StyledSearchItem menu={myMenu}>{props.title}</StyledSearchItem>
}


export default SearchItem
