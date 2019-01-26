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
  for (let i = 0; i < clipDataArray.length; i++) {

    if (clipDataArray[i].tags.includes(props.selectedTag)) {
      selectedClips.push(<Clip data={clipDataArray[i]}/>);
    } else {
      otherClips.push(<Clip data={clipDataArray[i]}/>);
    }
  }

  return (
    <StyledClipArray>{selectedClips}{otherClips}</StyledClipArray>
  );
}

export default ClipArray
