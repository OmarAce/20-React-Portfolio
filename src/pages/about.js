import React from "react"
import AboutGrid from "../components/about/aboutGrid"
import AboutTeamBigCard from "../components/about/aboutTeamBigCard"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <AboutTeamBigCard></AboutTeamBigCard>
      <AboutGrid></AboutGrid>
    </Layout>
  )
}

export default About
