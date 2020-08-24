import React from "react";

export default function Experience({ exp }) {
  return (
    <div>
      <h3>
        {exp.position} @ {exp.company}
      </h3>
      {/* <p>{exp.summary}</p> */}
      <p>{exp.durationDetail}</p>
      <ul>
        {exp.technologiesUsed.map((tech) => (
          <li key={tech} className="styledButtonSecondary">
            {tech}
          </li>
        ))}
      </ul>
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
          Visit
        </a>
      )}
      {exp.github && (
        <a
          className="styledButtonTertiary"
          href={exp.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      )}
    </div>
  );
}
