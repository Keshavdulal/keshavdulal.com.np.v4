import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

import { navConfig, portfolio } from "../portfolio";

const Navbar = ({ siteTitle }) => (
  <nav className="navbar">
    <div className="logo">
      <FontAwesomeIcon icon={faSun} />
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

    <div className="nav-item social-items">
      <span className="media-links">
        {portfolio.socialMedia.map((media) => (
          <a
            className="nav-media-link"
            href={media.url}
            target="_blank"
            key={media.faName}
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={media.faName} />
          </a>
        ))}
      </span>
    </div>
  </nav>
);

export default Navbar;
