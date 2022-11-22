import styled from "styled-components"

interface CardProps {
  img: string
}

export const CardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;
  position: relative;
  align-items: center;
  justify-content: end;
  border-radius: 0.75rem;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
`
export const Title = styled.h1`
  position: absolute;
  padding: 2px 20px 10px 20px;
  border-radius: 0.75rem;
  top: 15px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`

export const LinkRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const LinkContainer = styled.h1`
  display: block;
  padding: 5px 20px 10px 20px;
  border-radius: 0.75rem;
  margin-bottom: 4px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`
export const Anchor = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
