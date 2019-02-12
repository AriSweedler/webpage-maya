import React from 'react'

import styled from 'styled-components';

const StyledHorizontalRule = styled.hr`
  height: 1em;
  background-color: #00998c;
  margin: 20px 0;
`

const ClipDivide = (props) => {
  return (
    <>
      <StyledHorizontalRule/>
      <StyledHorizontalRule/>
    </>
  );
}

export default ClipDivide
