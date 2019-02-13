import React from 'react'

import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px 0;
`

const StyledHorizontalRule = styled.hr`
  height: 5px;
  background-color: #00998c;
  margin: 0;
  margin-top: 7px;
`

const ClipDivide = (props) => {
  return (
    <Wrapper>
      <StyledHorizontalRule/>
      <StyledHorizontalRule/>
    </Wrapper>
  );
}

export default ClipDivide
