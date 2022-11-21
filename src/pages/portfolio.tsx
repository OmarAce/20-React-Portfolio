import React from "react"
import Carousel from "../components/Portfolio/Carousel"
import PortfolioText from "../components/Portfolio/portfolioText"

import Layout from "../components/layout"

export const Portfolio: React.FC = () => {
  return (
    <Layout>
      <PortfolioText />
      <Carousel />
    </Layout>
  )
}

export default Portfolio
