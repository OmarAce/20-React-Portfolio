import React from "react"
import ProjectsCarousel from "../components/Portfolio/Carousel"
import PortfolioText from "../components/Portfolio/portfolioText"

import Layout from "../components/layout"

export const Portfolio: React.FC = () => {
  return (
    <Layout>
      <PortfolioText />
      <ProjectsCarousel />
    </Layout>
  )
}

export default Portfolio
