import * as React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"

const PageContainer = styled.div`
  height: auto;
  width: 100vw;
`

const IndexPage: React.FC = () => (
  <PageContainer>
    <Layout>
      <Header></Header>
      <FeatureSection></FeatureSection>
    </Layout>
  </PageContainer>
)

export default IndexPage
