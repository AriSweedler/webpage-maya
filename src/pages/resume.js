import React from 'react'
import styled from 'styled-components';

import Layout from '../components/layout';
import { FaDownload } from 'react-icons/fa';


const Heading = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const DownloadButton = styled.a`
  padding: 5px 1em 5px 1em;
  cursor: pointer;
  border-radius: 4em;
  font-size: 0.4em;
  color: grey;
  text-decoration: none;

  transition: all 0.4s linear;
  :hover {
    background-color: #00998c;
    color: black;
  }
`


const ResumePage = () => (
  <Layout>
    <Heading>
      <h1>Resume</h1>
      <DownloadButton href="https://drive.google.com/uc?id=1fUoSBjL2FoIGlDUGAC54XX2039jvzIDs&export=download">
        download <FaDownload />
      </DownloadButton>
    </Heading>
    <iframe
      title="My Resume"
      src="https://drive.google.com/file/d/1fUoSBjL2FoIGlDUGAC54XX2039jvzIDs/preview"
      style={{ width: "100%", height: "1100px"}}
    />

  </Layout>
)

export default ResumePage
