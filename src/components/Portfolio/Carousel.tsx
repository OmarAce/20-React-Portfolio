import React, { useState } from "react"
import { PortfolioItems } from "./PortfolioItems"
import Carousel from "react-spring-3d-carousel"
import { config } from "react-spring"
import styled from "styled-components"

const CarouselContainer = styled.div`
  display: flex;
  height: 500px;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 40px;
`

const ProjectsCarousel: React.FC = () => {
  const [slide, goToSlide] = useState(0)

  const slides = PortfolioItems.map(item => {
    return { ...item, onClick: () => goToSlide(item.key) }
  })

  return (
    <CarouselContainer>
      <Carousel
        slides={slides}
        goToSlide={slide}
        offsetRadius={3}
        showNavigation={false}
        animationConfig={config.gentle}
      />
    </CarouselContainer>
  )
}

export default ProjectsCarousel
