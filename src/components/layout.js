/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Footer from "./footer"
import Navbar from "./navbar"


const Layout = ({ children }) => {
  return (

    <div>
      <Navbar></Navbar>
        
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="text" name="email" />
      <input type="text" name="phone" />
      <input type="text" name="company" />
      <textarea name="message"></textarea>
    </form>

      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
