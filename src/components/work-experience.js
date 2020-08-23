import React from "react";

export default function WorkExperience({ exp }) {
  return (
    <div>
      <span>
        <h1>{exp.position}</h1>
        <h2>@{exp.company}</h2>
      </span>
      <p>{exp.summary}</p>
      <ul>
        {exp.technologiesUsed.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
      <ul>
        {exp.responsibilities.map((resp) => (
          <li>{resp}</li>
        ))}
      </ul>
    </div>
  );
}
