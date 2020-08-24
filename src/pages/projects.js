import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { portfolio } from "../portfolio";

const Projects = () => (
  <Layout>
    <SEO title="projects" />
    <div className="container">
      <div className="content">
        <h1>Projects</h1>
        {portfolio.petProjects.map((project) => (
          <li>
            <h2>{project.name}</h2>
            <p>{project.descrption}</p>
            <p>
              {project.technologies.map((tech) => (
                <span>{tech}</span>
              ))}
            </p>
            <a target="_blank" href={project.github}>
              Github
            </a>
            <a target="_blank" href={project.url}>
              Demo
            </a>
          </li>
        ))}
      </div>
    </div>
  </Layout>
);

export default Projects;
