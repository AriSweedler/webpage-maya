import React from 'react'
import {MenuButton, MenuList, MenuItem} from 'react-menu-list';

import styled from 'styled-components';

const StyledMenuItem = styled(MenuItem)`
  background: #ddd;
  cursor: pointer;
  user-select: none; //prevent users from highlighting the text

  //TODO make this look nice.
  //Menu appears on hover?
  //bevel the edges?
  //color it properly? (ddd and gray)
`

const SearchItem = (props) => {
  const options = [];
  for (let opt of props.options) {
    options.push(
      <StyledMenuItem
        key={opt}
        highlightedStyle={{background: 'gray'}}
        onItemChosen={() => props.searchCallback(props.title, opt)}
        {...props}
      >{opt}</StyledMenuItem>
    );
  }
  const myMenu = <MenuList>{options}</MenuList>
  return <MenuButton menu={myMenu}>{props.title}</MenuButton>
}


export default SearchItem
