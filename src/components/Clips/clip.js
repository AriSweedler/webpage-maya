import React from 'react'
import styled from 'styled-components';

const StyledClip = styled.div`
  border: 2px solid red;

  &:hover {
    opacity: 0.9;
  }

  overflow: hidden;
  position: relative;
`

const Description = styled.div`
  background-color: lightgrey;
  padding: 10px;
  position: absolute;
  width: 100%;
  height: 100%;

  ${StyledClip}:not(hover) & {
    transition: all 0.7s ease-out;
    transform: translateY(-1000%);
  }

  ${StyledClip}:hover & {
    transition: all 0.5s cubic-bezier(.22,1.21,.76,1);
    transform: translateY(0);
  }
`

const Clip = (props) => (
  <StyledClip>
    <Description>
      <h3>The description</h3>
      <div>Description of image. It's a nice image. Here's a longer description.</div>
      <div>I don't want the StyledClip to allocate any space, I want this to be on top of the TitleImage.</div>
    </Description>
    <div>Here is clip {props.id}</div>
    <img src="http://img01.deviantart.net/609f/i/2013/170/4/9/girl_with_the_leather_jacket_by_jleonardk-d69rdd7.png" alt="test image" />
  </StyledClip>
)

export default Clip
