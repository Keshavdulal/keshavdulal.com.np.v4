import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h5>Hi, I am</h5>
    <h1>Keshav Dulal</h1>
    <h3>Frontend Software Engineer</h3>
    <p>I build things for web</p>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
