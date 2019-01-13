import React from 'react'
import styled from 'styled-components';

const StyledClip = styled.div`
  border: 2px solid red;
  padding: 3px;
  display:inline-block;
`

const Clip = (props) => (
  <StyledClip> Here is clip {props.id}</StyledClip>
)

export default Clip
