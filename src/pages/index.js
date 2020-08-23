import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import portfolio from "../portfolio";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h5>Hi, I am</h5>
    <h1>{portfolio.bio.firstName + ` ` + portfolio.bio.lastName}</h1>
    <h2>{portfolio.bio.slogan}</h2>
    <div>
      {portfolio.bio.description.map((d) => (
        <p>{d}</p>
      ))}
      <p>Here are a few technologies I've been working with recently:</p>
    </div>
    <ul>
      {portfolio.skillset.core.map((i) => (
        <li>{i}</li>
      ))}
    </ul>
    <span>Get in Touch</span>
  </Layout>
);

export default IndexPage;
