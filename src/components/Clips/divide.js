import React from 'react'

import styled from 'styled-components';

const StyledHorizontalRule = styled.hr`
  height: 1em;
  background-color: #00998c;
  margin: 20px 0;
`

const ClipDivide = (props) => {

  if (!props.tag.category) {
    return null;
  }

  return (
    <>
      <StyledHorizontalRule/>
      <StyledHorizontalRule/>
    </>
  );
}

export default ClipDivide
