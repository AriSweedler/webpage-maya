import React from 'react'

import Layout from '../components/layout'

/*
light yellow: #F9F6B8
turquoise: #00bdae
white: white
light grey: lightgrey
*/
const ResumePage = () => (
  <Layout>
    <h1>Resume</h1>
    <iframe
      title="My Resume"
      src="https://drive.google.com/file/d/1fUoSBjL2FoIGlDUGAC54XX2039jvzIDs/preview"
      style={{ width: "100%", height: "1000px"}}
    />
  </Layout>
)

export default ResumePage
