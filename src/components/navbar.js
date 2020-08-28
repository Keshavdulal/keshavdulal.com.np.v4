import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { navConfig, portfolio } from "../portfolio";
import SocialMedia from "./social-media";

const Navbar = ({ siteTitle }) => {
  const displayPicture = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "jpg" } }) {
        edges {
          node {
            publicURL
            name
            id
          }
        }
      }
    }
  `);

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          className="displayPicture"
          src={displayPicture.allFile.edges[0].node.publicURL}
          alt="Keshav Dulal"
        />
      </div>

      <ul className="navbar-nav">
        {navConfig.map((conf) => (
          <li key={conf.name} className="nav-item">
            <Link to={conf.to} className="nav-link">
              <FontAwesomeIcon icon={conf.faName} />
              <span> {conf.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <SocialMedia />
    </nav>
  );
};

export default Navbar;
