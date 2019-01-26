import React from 'react'

import Clip from './clip'
import styled from 'styled-components';

const StyledClipArray = styled.div`
  width: 100%;
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

//TODO figure out how to get all the clips
//sort the array based on the nav bar (pass state of nav bar in through props)


const ClipArray = (props) => {

  const clips = [];
  for (let i = 0; i < 10; i++) {
    clips.push(<Clip {...props}/>);
  }

  return (
    <StyledClipArray>{clips}</StyledClipArray>
  );
}

export default ClipArray
