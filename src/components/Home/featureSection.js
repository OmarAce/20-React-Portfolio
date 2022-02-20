import React from "react"
import Fade from "react-reveal/Fade"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto ">

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <h1 className="text-white text-4xl">TL;DR</h1>
            <div className="mt-5">
              <div>
                <h2 className="text-white opacity-50 text-xl">Full-Stack Developer</h2>
                <h1 className="text-white text-sm">Since 2021</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">Life Saver / Emergency Medical Technician</h2>
                <h1 className="text-white text-sm">Since 2018</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">Ready to Get Started</h2>
                <h1 className="text-white text-sm">Immediately</h1>

              </div>
            </div>
          </div>

          <div className="w-4/6 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h1 className="text-white text-4xl">Brief Introduction</h1>
            <p className="mt-10 text-white opacity-50">
            Hi, I'm Omar Acevedo! I am a full stack developer from Anaheim, California. Able to work remotely with no issue. 👍
After 5 years working as a Emergency Medical Technician; 🚑 It was time for my entrance into the tech industry!
I'm eager to work with a stack that includes frontend and backend, multiple languages and frameworks. Ready to work quickly, effectively, and to burn the midnight oil. 🕯️ Willing to learn any new languages too!
Motivated and self-driven; I am geared up to work solo, or in a collaborative group effort to produce features across the UX, API, and service layers.
Always looking to improve! Thank you for taking the time to look at my page. Have fun exploring! 🚀
            </p>
          </div>
        </div>
      </Fade>

    </div>
  )
}

export default FeatureSection
