import React from 'react'
import styled from 'styled-components'

import mayaImage from '../assets/maya.jpg'
import Layout from '../components/layout'

const StyledImage = styled.img`
  float: left;
  width: calc(50% - 40px);
  margin: 10px;

  @media (max-width: 450px) {
    width: 100%;
    margin: 0;
  }

  @media (min-width: 1000px) {
    width: calc(1050px - 60vw);
  }

  min-width: 250px;
  max-width: 450px;
`
const Container = styled.div`
  overflow: auto;
  text-align: justify;
  padding: 10px;
`

const AboutPage = () => (
  <Layout page="About me" >
    <Container>
      <h1>About me</h1>
      <StyledImage src={mayaImage} />
      <p>Hello, my name is Maya Sweedler.</p>

      <p>I am a reporter currently searching for opportunities in journalism — preferably something that involves diving into public records and flexing my multimedia skills. I’m fascinated by the vagaries of the criminal justice system and the intersection of politics and policy. I also love stories that involve the relationships among sports, civil rights and culture.</p>
      <p>I honed my breaking news chops at the Los Angeles Times, where I covered the 2018 midterm elections, and the Wall Street Journal, where I spent a summer covering topics ranging from Florida’s red tide to Manhattan’s underground drone races. My work has also been published in The Seattle Times, where I wrote about naughty pirates as the David Boardman investigative intern, and the Pittsburgh Post-Gazette. Additionally, I assisted journalist Emily Bazelon with her forthcoming book ‘Charged’ (coming April 2019 from Random House), gathering and analyzing campaign contribution data as well as conducting research on criminal justice reform.</p>
      <p>Born and raised in Silicon Valley, I moved back east for college and fell in love with the idea of having four seasons. I graduated from Yale in May 2018 with a degree in history. However, I spent most of my time in college at the Yale Daily News, Yale’s award-winning daily newspaper, where I served as managing editor. Prior to that, I covered sports and dabbled in data-driven reporting and graphic design.</p>
    </Container>
  </Layout>
)

export default AboutPage
