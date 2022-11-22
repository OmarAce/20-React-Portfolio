import React from "react"
import ProjectsCarousel from "../components/Portfolio/Carousel"
import { PortfolioIntro } from "../components/Portfolio/PortfolioIntro"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"

export const Portfolio: React.FC = () => {
  return (
    <Layout>
      <Fade bottom cascade>
        <PortfolioIntro />
        <ProjectsCarousel />
      </Fade>
    </Layout>
  )
}

export default Portfolio
