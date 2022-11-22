import styled from "styled-components"

export const PortfolioIntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 0.75rem;
  max-width: 1280px;
  margin-top: 10px;
  padding: 20px;
  margin: 0 auto;
  background-color: rgb(20, 20, 20);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const PortfolioTextContainer = styled.div`
  color: white;
  text-align: right;
  font-family: poppins, sans-serif;
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const Name = styled.h1`
  font-size: 3rem;
  line-height: 1;
  font-weight: bold;
  margin: 6px;
`
export const Title = styled.h3`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: bold;
  opacity: 0.5;
`
export const PortfolioText = styled.p`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem;
  padding: 6px;
  text-align: right;
  margin-top: 25px;
  @media (max-width: 768px) {
    margin-top: 0px;
    text-align: center;
  }
`

export const ImageContainer = styled.img`
  position: absolute;
  object-fit: cover;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  outline: solid 2px white;
  outline-offset: 2px;
  @media (max-width: 768px) {
    position: relative;
    margin: 0 auto;
    height: 250px;
    width: 250px;
  }
`
