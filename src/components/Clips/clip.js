import React from 'react'
import styled from 'styled-components';

const Description = styled.div`
  position: absolute;
  background-color: lightgrey;
  z-index: 10; /* In front of the StyledImage */
  padding: 10px 10px 0 10px;
  top: 0;
  bottom: 5px; //Why do I need this? To align bottom of description with bottom of image.

  overflow-y: auto;

`

const StyledImage = styled.img`
  z-index: 5; /* behind the Description */
  margin: 0;
  object-fit: cover;
`

const Title = styled.div`
  font-weight: 100;
  font-size: 1.1em;
  line-height: 1.5em;
  text-align: center;

`

const ImageAndDescription = styled.div`
  position: relative;

  transition: all 0.4s linear;
  &:hover {
    opacity: 0.9;
  }
`

const StyledClip = styled.a`
  color: black;
  overflow: hidden;
  text-decoration: none;

  :not(hover) ${Description} {
    transform: translateY(-500%);
    transition: all 0.5s ease-in;
  }

  :hover ${Description} {
    transform: translateY(0);
    transition: all 0.5s cubic-bezier(.22,1.21,.77,1.05);
  }
`

const Clip = (props) => (
  <StyledClip href={props.data.articleURL} target="_blank">
    <ImageAndDescription>
      <StyledImage src={props.data.imageURL} alt={props.data.title} />
      <Description >{props.data.description}</Description>
    </ImageAndDescription>
    <Title>{props.data.title}</Title>
  </StyledClip>
)

export default Clip
