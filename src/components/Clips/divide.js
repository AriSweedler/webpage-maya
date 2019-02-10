import React from 'react'

import styled from 'styled-components';

const StyledHorizontalRule = styled.hr`
  height: 1em;
  background-color: #00998c;
  margin: 20px 0;
`

const DivideText = styled.div`
  text-align: center;
  padding: 1em;
  font-size: 1.3em;
`

const ClipDivide = (props) => {

  if (!props.tag.category) {
    return null;
  }

  return (
    <>
      <StyledHorizontalRule/>
      <DivideText>End of <i>{props.tag.category}</i>, <b>{props.tag.option}</b> clips</DivideText>
      <StyledHorizontalRule/>
    </>
  );
}

export default ClipDivide
