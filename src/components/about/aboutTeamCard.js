import React from "react"
import Fade from "react-reveal/Fade"

const AboutTeamCard = ({ imgSrc, position, web }) => {
  return (
    <Fade bottom cascade>
      <div className="w-full h-96 relative overflow-hidden rounded-xl flex flex-col justify-end items-center">
        <img className="object-cover h-full w-full absolute" src={imgSrc}></img>
        <h1 className="bg-lightblack text-white absolute p-2 rounded-xl w-3/4 mb-4 text-center">
        <a href={web}>{position}</a>
        </h1>
      </div>
    </Fade>
  )
}

export default AboutTeamCard
