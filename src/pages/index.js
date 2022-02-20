import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Header></Header>
      <FeatureSection></FeatureSection>
    </Layout>
  </div>
)

export default IndexPage
