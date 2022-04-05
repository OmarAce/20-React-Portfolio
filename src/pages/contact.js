import React from "react"
import { navigate } from 'gatsby-link'
import Layout from "../components/layout"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import Fade from "react-reveal/Fade"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Contact = () => {

  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

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
            <form className="mt-5"         
              name="contact"
              method="post"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}>
              <div className="flex xxs:flex-col sm:flex-row">
              <Input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
                <div className="sm:mr-5 xxs:mr-0">
                  <Input placeholder="Your Name" id="name" name="name" type="text" onChange={handleChange}></Input>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <Input placeholder="Your Email" id="email" name="email" type="email" onChange={handleChange}></Input>
                </div>
              </div>

              <div className="flex mt-5 xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <Input placeholder="Your Company" id="company" name="company" type="text" onChange={handleChange}></Input>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <Input placeholder="Your Phone" id="phone" name="phone" type="text" onChange={handleChange}></Input>
                </div>
              </div>
              <textarea
                className="mt-5 w-full bg-white bg-opacity-20 rounded-xl p-5"
                rows="5"
                placeholder="How can we help you?"
                id="message"
                name="message"
                type="text"
                onChange={handleChange}
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
