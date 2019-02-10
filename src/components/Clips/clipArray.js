import React from 'react'

import Clip from './clip'
import styled from 'styled-components';

const StyledClipArray = styled.div`
  width: 100%;
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const ClipArray = (props) => {

  const selectedClips = [];
  const otherClips = [];
  const clipDataArray = props.data.site.siteMetadata.clips;
  let i = 0;
  for (let clipData of clipDataArray) {

    //TODO sort based on "props.tag"
    if (clipData[props.tag.category] === props.tag.option) {
      selectedClips.push(<Clip key={i} data={clipData}/>);
    } else {
      otherClips.push(<Clip key={i} data={clipData}/>);
    }
    i++;
  }

  return (
    <StyledClipArray>{selectedClips}{otherClips}</StyledClipArray>
  );
}

export default ClipArray
