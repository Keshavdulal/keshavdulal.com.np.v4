import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { portfolio } from "../portfolio";
import Experience from "../components/experience";

const Experiences = () => (
  <Layout>
    <SEO title="experience" />
    <div className="container">
      <div className="content">
        <h2>Work Experience_</h2>
        {portfolio.workExperiences.map((exp) => (
          <Experience key={exp.durationDetail} exp={exp} />
        ))}
      </div>
    </div>
  </Layout>
);

export default Experiences;
