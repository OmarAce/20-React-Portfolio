import React, { useState } from "react"
import { PortfolioItems, PortfolioData } from "./PortfolioItems"
import { config } from "react-spring"
import styled from "styled-components"
import { ProjectDescription } from "./ProjectDescription"
import loadable from "@loadable/component"

const Carousel = loadable(() => import("react-spring-3d-carousel"))

const CarouselContainer = styled.div`
  display: flex;
  height: 500px;
  max-width: 1280px;
  margin-top: 40px;
  margin: 0 auto;
`

const ProjectsCarousel: React.FC = (): any => {
  const [slide, goToSlide] = useState(0)

  const slides = PortfolioItems.map(item => {
    return { ...item, onClick: () => goToSlide(item.key) }
  })

  return (
    <>
      <CarouselContainer>
        <Carousel
          slides={slides}
          goToSlide={slide}
          offsetRadius={2}
          showNavigation={false}
          animationConfig={config.gentle}
        />
      </CarouselContainer>
      <ProjectDescription
        index={slide}
        text={PortfolioData[slide].description}
      />
    </>
  )
}

export default ProjectsCarousel
