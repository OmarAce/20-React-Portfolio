import React from "react"
import ProjectCard from "./ProjectCard/ProjectCard"

export const PortfolioData = [
  {
    title: "TypeScripts",
    img:
      "https://raw.githubusercontent.com/OmarAce/TypeScripts2-FrontEnd/main/assets/TypeScripts.gif",
    repo: "https://github.com/OmarAce/TypeScripts2-FrontEnd",
    live: "https://typescripts-react.herokuapp.com/",
  },
  {
    title: "Workout Wizard",
    img:
      "https://user-images.githubusercontent.com/86388266/140447178-a482cde8-6c15-4365-a1c1-262af8a91753.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    repo: "https://github.com/runaariga/project-1",
    live: "https://runaariga.github.io/project-1/",
  },
  {
    title: "BangerAlert!",
    img:
      "https://user-images.githubusercontent.com/90432404/158029428-e675ed15-1925-45d3-a1a0-11fef4119b92.gif",
    repo: "https://github.com/runaariga/project3",
    live: "https://banger-alert-redux.herokuapp.com",
  },
  {
    title: "Weather Dashboard",
    img:
      "https://raw.githubusercontent.com/OmarAce/06-Weather-Dashboard/main/assets/weather-dash.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    repo: "https://github.com/OmarAce/06-Weather-Dashboard",
    live: "https://omarace.github.io/06-Weather-Dashboard/",
  },
  {
    title: "PC Times - Blog",
    img:
      "https://raw.githubusercontent.com/OmarAce/14-Tech-Blog/main/public/assets/site-demo.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    repo: "https://github.com/OmarAce/14-Tech-Blog",
    live: "https://pc-times.herokuapp.com/",
  },
  {
    title: "Budget Tracker",
    img:
      "https://raw.githubusercontent.com/OmarAce/19-Offline-Budget-Tracker/main/public/icons/tracker.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    repo: "https://github.com/OmarAce/19-Offline-Budget-Tracker",
    live: "https://budget-tracker-ace.herokuapp.com/",
  },
]

export const PortfolioItems = PortfolioData.map((item, index) => {
  return {
    key: index,
    content: (
      <ProjectCard
        title={item.title}
        img={item.img}
        live={item.live}
        repo={item.repo}
      />
    ),
  }
})
