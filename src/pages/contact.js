import React from "react"
import Layout from "../components/layout"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import Fade from "react-reveal/Fade"

const Contact = () => {
  return (
    <Layout>
      <Fade bottom cascade>
        <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
          <div className="bg-lightblack p-10 rounded-xl w-3/4 m-5">
            <h2 className="text-xs opacity-50">Get in touch</h2>
            <h1 className="text-4xl font-bold font-poppins mt-2 xxs:text-lg sm:text-2xl lg:text-4xl">
              Let's work together
            </h1>
            <p className="text-lg mt-2 opacity-50 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
              Contact me for business opportunites, questions or comments
            </p>
            <form className="mt-5" method="POST" data-netlify="true">
              <div className="flex xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <Input placeholder="Your Name" id="name" name="name"></Input>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <Input placeholder="Your Email" id="email" name="email"></Input>
                </div>
              </div>

              <div className="flex mt-5 xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <Input placeholder="Your Company" id="company" name="company"></Input>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <Input placeholder="Your Phone" id="phone" name="phone"></Input>
                </div>
              </div>
              <textarea
                className="mt-5 w-full bg-white bg-opacity-20 rounded-xl p-5"
                rows="5"
                placeholder="How can we help you?"
                id="message"
                name="message"
              ></textarea>
              <Button
                title="Submit"
                colorClass="bg-gradient-to-r from-pink to-purple"
                marginClass="mt-5"
              ></Button>
            </form>
          </div>
          <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
            <img
              className="object-cover h-full w-full"
              src="https://thumbs.dreamstime.com/b/html-code-dark-background-colorful-html-code-as-abstract-computer-programming-concept-vector-illustration-155503891.jpg"
            ></img>
          </div>
        </div>
      </Fade>
    </Layout>
  )
}

export default Contact
