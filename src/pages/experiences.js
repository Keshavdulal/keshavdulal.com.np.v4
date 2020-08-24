import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { portfolio } from "../portfolio";
import Experience from "../components/experience";

const Experiences = () => (
  <Layout>
    <SEO title="Experiences" />
    <div className="container">
      <div className="content">
        <h1>Work Experience_</h1>
        {portfolio.workExperiences.map((exp) => (
          <Experience key={Math.random()} exp={exp} />
        ))}
      </div>
    </div>
  </Layout>
);

export default Experiences;
