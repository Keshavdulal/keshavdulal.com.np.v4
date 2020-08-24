import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { portfolio } from "../portfolio";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="content">
        <h5>{portfolio.bio.intro}</h5>
        <h1>{portfolio.bio.firstName + ` ` + portfolio.bio.lastName}.</h1>
        <h2>{portfolio.bio.slogan}</h2>
        <div>
          {portfolio.bio.description.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}
          <p>{portfolio.bio.outro}</p>
        </div>
        <p>
          {portfolio.skillset.core.map((skill) => (
            <span className="styledButtonSecondary" key={skill}>
              {skill}
            </span>
          ))}
        </p>
        <br />
        <a
          className="styledButtonPrimary"
          href={`mailto:${portfolio.bio.email}`}
          rel="noopener noreferrer"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
