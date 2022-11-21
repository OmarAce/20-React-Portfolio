import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-20 mt-10 bg-lightblack rounded-xl">
      <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-white text-4xl text-bold">
            Message from Omar Acevedo
          </h1>
          <p className="text-white text-sm mt-5 opacity-50">
            I hope you have enjoyed poking around the website! Feel free to
            contact me at my personal email as well, omarace95@gmail.com
          </p>
        </div>
        <div className="place-self-end self-center xxs:hidden lg:block">
          <ul className="text-xl font-poppins font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="https://twitter.com/OAceCoding">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/OmarAce">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/omaracevedo95/">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
