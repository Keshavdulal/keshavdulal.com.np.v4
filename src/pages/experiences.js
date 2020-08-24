import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { portfolio } from "../portfolio";
import WorkExperience from "../components/work-experience";

const Experiences = () => (
  <Layout>
    <SEO title="experience" />
    <div className="container">
      <div className="content">
        <h1>Work Experience_</h1>
        {portfolio.workExperiences.map((exp) => (
          <WorkExperience exp={exp} />
        ))}
      </div>
    </div>
  </Layout>
);

export default Experiences;
