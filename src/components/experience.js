import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas, faHome, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, fab);

export default function Experience({ exp }) {
  return (
    <div className="bucket experience-bucket">
      <h3>
        <span className="title">{exp.position}</span> @ {exp.company}
      </h3>
      {/* <p>{exp.summary}</p> */}
      <p>{exp.durationDetail}</p>
      <p>
        {exp.technologiesUsed.map((tech) => (
          <span key={tech} className="styledButtonSecondary">
            {tech}
          </span>
        ))}
      </p>
      {false && (
        <ul>
          {exp.responsibilities.map((resp) => (
            <li key={resp}>{resp}</li>
          ))}
        </ul>
      )}
      {exp.url && (
        <a
          className="styledButtonTertiary"
          href={exp.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLink} />
        </a>
      )}
      {exp.github && (
        <a
          className="styledButtonTertiary"
          href={exp.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      )}
    </div>
  );
}
