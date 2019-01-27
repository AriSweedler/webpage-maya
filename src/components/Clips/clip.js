import React from 'react'
import styled from 'styled-components';

const StyledClip = styled.a`
  border: 2px solid red;
  min-height: 300px;
  color: black;
  overflow: hidden;
  position: relative;

  transition: all 0.4s linear;
  &:hover {
    opacity: 0.9;
  }

  // img {
  //   object-fit: cover;
  //   margin-bottom: -10px;
  // }
`

const Description = styled.div`
  background-color: lightgrey;
  padding: 10px;
  position: absolute;
  width: 100%;
  height: 100%;

  overflow-y: auto;

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
  <StyledClip href={props.data.articleURL}>
    <Description>
      <h3>{props.data.title}</h3>
      <div>{props.data.description}.</div>
    </Description>
    <img src={props.data.imageURL} alt={props.data.title} />
  </StyledClip>
)

export default Clip
