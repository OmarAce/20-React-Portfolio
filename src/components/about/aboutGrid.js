import React from "react"
import AboutTeamCard from "./aboutTeamCard"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        web="https://github.com/Kam-Mivehchi/TypeScripts"
        imgSrc="https://raw.githubusercontent.com/Kam-Mivehchi/TypeScripts/main/public/assets/app-demo.png?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        position="Type{Scripts}"
      ></AboutTeamCard>
      <AboutTeamCard
        web="https://github.com/runaariga/project-1"
        imgSrc="https://user-images.githubusercontent.com/86388266/140447178-a482cde8-6c15-4365-a1c1-262af8a91753.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="Workout Wizard"
      ></AboutTeamCard>
      <AboutTeamCard
        web="https://github.com/OmarAce/06-Weather-Dashboard"
        imgSrc="https://raw.githubusercontent.com/OmarAce/06-Weather-Dashboard/main/assets/weather-dash.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="Weather Dashboard"
      ></AboutTeamCard>
      <AboutTeamCard
        web="https://github.com/OmarAce/14-Tech-Blog"
        imgSrc="https://raw.githubusercontent.com/OmarAce/14-Tech-Blog/main/public/assets/site-demo.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="PC Times - Blog"
      ></AboutTeamCard>
      <AboutTeamCard
        web="https://github.com/OmarAce/18-Workout-Tracker"
        imgSrc="https://raw.githubusercontent.com/OmarAce/18-Workout-Tracker/main/public/assets/homepage.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="Fitness Tracker App"
      ></AboutTeamCard>
      <AboutTeamCard
        web="https://github.com/OmarAce/19-Offline-Budget-Tracker"
        imgSrc="https://raw.githubusercontent.com/OmarAce/19-Offline-Budget-Tracker/main/public/icons/tracker.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="Budget Tracker"
      ></AboutTeamCard>
    </div>
  )
}

export default AboutGrid
