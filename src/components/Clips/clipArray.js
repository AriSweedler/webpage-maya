import React from 'react'

import Clip from './clip'
import ClipDivide from './divide'
import styled from 'styled-components'

const StyledClipArray = styled.div`
  width: 100%;
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

/*
least	somewhat	moderately	strongly	most
5     4         3           2         1
*/
function importanceNumber(clip) {
  if (clip.importance === "least") return 5;
  else if (clip.importance === "somewhat") return 4;
  else if (clip.importance === "moderately") return 3;
  else if (clip.importance === "strongly") return 2;
  else if (clip.importance === "most") return 1;
  else return 0;
}

const ClipArray = (props) => {
  const selectedClips = [];
  const otherClips = [];
  const publications = ['Seattle Times',	'LA Times',	'YDN',	'Pittsburgh Post Gazette',	'Wall Street Journal'];
  let i = 0;

  /* sort the way we traverse through clips by importance */
  const clipDataArray = props.data.site.siteMetadata.clips.sort((c1, c2) => importanceNumber(c1) - importanceNumber(c2));;

  /* sort by tag */
  for (let clipData of clipDataArray) {
    if (clipData[props.tag.category] === props.tag.option) {
      selectedClips.push(<Clip key={i++} data={clipData}/>);
    } else {
      otherClips.push(<Clip key={i++} data={clipData}/>);
    }
  }

  const blurb = (
    <div>
      <h1>My work:</h1>
      <p>Below find a sampling of my published work, which has appeared in publications including the Los Angeles Times, Wall Street Journal, Seattle Times and more.</p>
      <p>Use the search bar to filter</p>
    </div>
  )

  return (
    <>
      { props.tag.category ? null : blurb }
      <StyledClipArray>{selectedClips}</StyledClipArray>
      <ClipDivide />
      <StyledClipArray>{otherClips}</StyledClipArray>
    </>
  );
}

export default ClipArray
