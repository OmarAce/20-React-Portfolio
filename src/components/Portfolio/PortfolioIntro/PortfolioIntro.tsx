import React from "react"
import * as S from "./PortfolioIntro.styled"

export const PortfolioIntro: React.FC = () => {
  return (
    <S.PortfolioIntroContainer>
      <S.ImageContainer src="https://i.imgur.com/MNgtkg9.jpg" />
      <S.PortfolioTextContainer>
        <S.Name>Omar Acevdo</S.Name>
        <S.Title>Full Stack Developer</S.Title>
        <S.PortfolioText>
          A full stack developer works with both client and server side
          experience with a wide range of coding skills, and can adapt to help
          other programmers solve problems, regardless if they work on the back
          end or front end sides of a project. I have experience in testing and
          debugging software to help keep code optimized; as well as
          reprocessing inefficient code to help reduce required processing
          power. Adept at acquiring new languages. Skill highlights are:
          Database Management, Graphic Design, and UI/UX Management.
        </S.PortfolioText>
      </S.PortfolioTextContainer>
    </S.PortfolioIntroContainer>
  )
}

export default PortfolioIntro
