import React from "react"
import ProjectCard from "./ProjectCard/ProjectCard"
import { PortfolioItems } from "./PortfolioItems"
import styled from "styled-components"

const ProjectsContainer = styled.div`
  display: grid;
  max-width: 1280px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 384px;
  grid-gap: 10px;
  margin: 0 auto;
  margin-top: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Carousel: React.FC = () => {
  return (
    <ProjectsContainer>
      {PortfolioItems.map(item => {
        return (
          <ProjectCard
            title={item.title}
            img={item.img}
            live={item.live}
            repo={item.repo}
          />
        )
      })}
    </ProjectsContainer>
  )
}

export default Carousel
