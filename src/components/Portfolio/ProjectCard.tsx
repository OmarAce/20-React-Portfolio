import React from "react"
import Fade from "react-reveal/Fade"

interface ProjectItemProps {
  title: string
  img: string
  repo: string
}

const ProjectCard: React.FC<ProjectItemProps> = ({ title, img, repo }) => {
  return (
    <Fade bottom cascade>
      <div className="w-full h-96 relative overflow-hidden rounded-xl flex flex-col justify-end items-center">
        <img className="object-cover h-full w-full absolute" src={img}></img>
        <h1 className="bg-lightblack text-white absolute p-2 rounded-xl w-3/4 mb-4 text-center">
          <a href={repo}>{title}</a>
        </h1>
      </div>
    </Fade>
  )
}

export default ProjectCard
