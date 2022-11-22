import React from "react"
import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import * as S from "./ProjectCard.styled"

interface ProjectItemProps {
  title: string
  img: string
  live: string
  repo: string
}

const ProjectCard: React.FC<ProjectItemProps> = ({
  title,
  img,
  live,
  repo,
}) => {
  return (
    <Fade bottom cascade>
      <a href={live}>
        <S.CardContainer img={img}>
          <S.LinkContainer>
            <a href={repo}>
              <FontAwesomeIcon icon={faGithub} size="1x" /> {title}
            </a>
          </S.LinkContainer>
        </S.CardContainer>
      </a>
    </Fade>
  )
}

export default ProjectCard
