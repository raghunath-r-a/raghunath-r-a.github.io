import React from "react"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>More content about Raghunath Reddy will be added here.</p>
    </Layout>
  )
}

export default AboutPage

export const Head = () => (
  <>
    <title>About Me - Raghunath Reddy</title>
    <meta name="description" content="Learn more about Raghunath Reddy" />
  </>
)