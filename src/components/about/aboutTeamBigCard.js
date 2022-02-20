import React from "react"

const AboutTeamBigCard = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="bg-lightblack w-full h-full flex flex-row justify-between rounded-xl xxs:flex-col sm:flex-row">
        <img
          className="w-3/4 object-cover h-96 rounded-l-lg xxs:w-full sm:w-3/4"
          src="https://omarace.github.io/Portfolio/assets/me-sq.png?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        ></img>
        <div className="flex flex-col justify-between">
          <div className="text-white text-right m-6 font-poppins xxs:text-center sm:text-right">
            <h1 className="text-5xl font-bold">Omar Acevedo</h1>
            <h3 className="text-lg font-bold opacity-50">Full Stack Developer</h3>
          </div>
          <p className="text-white p-6 text-xl text-right xxs:text-center sm:text-right">
          A full stack developer works with both client and server side experience with a wide range of coding skills, and can adapt to help other programmers 
          solve problems, regardless if they work on the back end or front end sides of a project. 
          I have experience in testing and debugging software to help keep code optimized; as well as reprocessing inefficient code to help 
          reduce required processing power. Adept at acquiring new languages. Skill highlights are: Database Management, Graphic Design, and UI/UX Management.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutTeamBigCard
