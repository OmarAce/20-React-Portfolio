import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDisplay } from "@fortawesome/free-solid-svg-icons"
import Fade from "react-reveal/Fade"
import * as S from "./ProjectCard.styled"

interface ProjectItemProps {
  title: string
  img: string
  live: string
  repo: string
}

export const ProjectCard: React.FC<ProjectItemProps> = ({
  title,
  img,
  live,
  repo,
}) => {
  return (
    <Fade bottom>
      <S.CardContainer img={img}>
        <S.Title>{title}</S.Title>
        <S.LinkRow>
          <S.LinkContainer>
            <S.Anchor href={live}>
              <FontAwesomeIcon icon={faDisplay} size="1x" /> Live
            </S.Anchor>
          </S.LinkContainer>
          <S.LinkContainer>
            <S.Anchor href={repo}>
              <FontAwesomeIcon icon={faGithub} size="1x" /> Code
            </S.Anchor>
          </S.LinkContainer>
        </S.LinkRow>
      </S.CardContainer>
    </Fade>
  )
}
