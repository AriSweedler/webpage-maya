import React from 'react'
import {MenuButton, MenuList, MenuItem} from 'react-menu-list';

import styled from 'styled-components';

const StyledMenuList = styled(MenuList)`
  background-color: red;
  border: 5px solid orange;
  :hover {
    background-color: #F9F6B8;
  }
`

const StyledMenuItem = styled.div`
  background-color: blue;
  border: 1px solid orange;
  width: 50px;
  cursor: pointer;
  userSelect: none;
  :hover {
    background-color: #F9F6B8;
  }
`

// MenuItems don't come with any styling by default! You'll probably want to
// make your own component which wraps them and adds your own application's
// style to them like this.
function LI(props) {
  return (
    <StyledMenuItem
      highlightedStyle={{backgroundColor: 'gray'}}
      onItemChosen={e => {
        console.log(`selected ${props.children}, byKeyboard: ${String(e.byKeyboard)}`);
      }}
      {...props}
    />
  );
}

const SearchItem = (props) => {
  const items = [];
  for (let item of props.items) {
    items.push(<LI id={item}>{item}</LI>)
  }
  return (
    <MenuButton
      menu={
        <StyledMenuList>
          {items}
        </StyledMenuList>
      }
    >{props.title}</MenuButton>
  )
}


export default SearchItem
