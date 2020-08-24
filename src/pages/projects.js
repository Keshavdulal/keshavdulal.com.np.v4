// import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { portfolio } from "../portfolio";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas, faHome, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, fab);

const Projects = () => (
  <Layout>
    <SEO title="projects" />
    <div className="container">
      <div className="content">
        <h1>Projects_</h1>
        <h3>Some Things I've Built</h3>
        {portfolio.petProjects.map((project) => (
          <div key={project.name} className="bucket project-bucket">
            <h3 className="title">{project.name}</h3>
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
                <FontAwesomeIcon icon={faLink} />
              </a>
            )}
            {project.github && (
              <a
                className="styledButtonTertiary"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Projects;
