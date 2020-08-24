// import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { portfolio } from "../portfolio";

const Projects = () => (
  <Layout>
    <SEO title="projects" />
    <div className="container">
      <div className="content">
        <h2>Projects_</h2>
        <ul>
          {portfolio.petProjects.map((project) => (
            <li key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>
                {project.technologies.map((tech) => (
                  <span key={tech} className="styledButtonSecondary">
                    {tech}
                  </span>
                ))}
              </p>
              {project.url && (
                <a
                  className="styledButtonTertiary"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              )}
              {project.github && (
                <a
                  className="styledButtonTertiary"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
);

export default Projects;
