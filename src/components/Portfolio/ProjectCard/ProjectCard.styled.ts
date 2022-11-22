import styled from "styled-components"

interface CardProps {
  img: string
}

export const CardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: end;
  border-radius: 0.75rem;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
`

export const LinkContainer = styled.h1`
  position: absolute;
  padding: 2px 20px 10px 20px;
  border-radius: 0.75rem;
  margin-bottom: 4px;
  text-align: center;
  background-color: black;
`
