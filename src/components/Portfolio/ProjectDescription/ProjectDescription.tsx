import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

export const ProjectText = styled.div`
  color: white;
  font-family: poppins, sans-serif;
  text-align: center;
  height: 300px;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`
interface DescriptionProps {
  text: string
  index: number
}

export const ProjectDescription: React.FC<DescriptionProps> = ({
  text,
  index,
}) => {
  return (
    <Fade bottom key={index}>
      <ProjectText>{text}</ProjectText>
    </Fade>
  )
}
