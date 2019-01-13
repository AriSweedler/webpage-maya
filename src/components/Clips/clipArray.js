import React from 'react'

import Clip from './clip'
import styled from 'styled-components';

const StyledClipArray = styled.div`
  border: 2px solid orange;
  padding: 3px;
  display: grid;
  grid-template-columns: repeat(4, auto);
`

//TODO figure out how to get all the clips
//sort the array based on the nav bar (pass state of nav bar in through props)
const clips = [];
for (let i = 0; i < 10; i++) {
  clips.push(<Clip id={i} />);
}

const ClipArray = () => (
  <StyledClipArray>{clips}</StyledClipArray>
)

export default ClipArray
