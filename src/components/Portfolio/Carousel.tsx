import React from "react"
import ProjectCard from "./ProjectCard"
import { PortfolioItems } from "./PortfolioItems"

const Carousel: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      {PortfolioItems.map(item => {
        return (
          <ProjectCard title={item.title} img={item.img} repo={item.repo} />
        )
      })}
    </div>
  )
}

export default Carousel
