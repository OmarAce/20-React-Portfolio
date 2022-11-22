import React from "react"
import { ProjectCard } from "./ProjectCard"

export const PortfolioData = [
  {
    title: "TypeScripts",
    img:
      "https://raw.githubusercontent.com/OmarAce/TypeScripts2-FrontEnd/main/assets/TypeScripts.gif",
    repo: "https://github.com/OmarAce/TypeScripts2-FrontEnd",
    live: "https://typescripts-react.herokuapp.com/",
    description:
      "TypeScripts is an application where the user is able to practice their typing speed and accuracy while learning/practicing coding languages at the same time. In the current build, the user is able to practice, Typescripts, Javascript, HTML, CSS, and plain english.",
  },
  {
    title: "Workout Wizard",
    img:
      "https://user-images.githubusercontent.com/86388266/140447178-a482cde8-6c15-4365-a1c1-262af8a91753.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    repo: "https://github.com/runaariga/project-1",
    live: "https://runaariga.github.io/project-1/",
    description:
      "Workout Wizard is an application where the user is able to find a workout specifically to certain muscle groups. If the user selects a muscle group, the application will provide a list of workouts and videos.",
  },
  {
    title: "BangerAlert!",
    img:
      "https://user-images.githubusercontent.com/90432404/158029428-e675ed15-1925-45d3-a1a0-11fef4119b92.gif",
    repo: "https://github.com/runaariga/project3",
    live: "https://banger-alert-redux.herokuapp.com",
    description:
      "BangerAlert is a Spotify Companion App that hosts a new wrapper and displays lyrics to sing along with. The application uses the Spotify API to provide a simple interface to enhance the listening experience.",
  },
  {
    title: "Weather Dashboard",
    img:
      "https://raw.githubusercontent.com/OmarAce/06-Weather-Dashboard/main/assets/weather-dash.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    repo: "https://github.com/OmarAce/06-Weather-Dashboard",
    live: "https://omarace.github.io/06-Weather-Dashboard/",
    description:
      "This application uses the OpenWeatherAPI so that when a user inputs a city; the application pulls up the weather information for that city. Items searched are saved to page and are stored to the local storage and reinitialized on on re-entry to the page. Pages built using Bootstrap, JQuery and Dayjs.",
  },
  {
    title: "PC Times - Blog",
    img:
      "https://raw.githubusercontent.com/OmarAce/14-Tech-Blog/main/public/assets/site-demo.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    repo: "https://github.com/OmarAce/14-Tech-Blog",
    live: "https://pc-times.herokuapp.com/",
    description:
      "PC Times is a blog style website for all developers, new and experienced, to discuss new developments in technology or have discussions on certain aspects pertaining to technology.",
  },
  {
    title: "Budget Tracker",
    img:
      "https://raw.githubusercontent.com/OmarAce/19-Offline-Budget-Tracker/main/public/icons/tracker.png?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    repo: "https://github.com/OmarAce/19-Offline-Budget-Tracker",
    live: "https://budget-tracker-ace.herokuapp.com/",
    description:
      "Budget Tracker is an application that allows the user to be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.",
  },
  {
    title: "Portfolio Website",
    img:
      "https://user-images.githubusercontent.com/90338441/203395462-69f1b251-1cb2-4ef2-981b-0fba93b90dc1.png",
    repo: "https://github.com/OmarAce/20-React-Portfolio",
    live: "https://omarace-portfolio.netlify.app/",
    description:
      "These are the links to the website and code repository of... well this website... too meta?",
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
