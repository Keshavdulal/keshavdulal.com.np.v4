import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { navConfig, portfolio } from "../portfolio";

const Navbar = ({ siteTitle }) => (
  <nav className="navbar">
    <div className="logo">
      <span className="nav-link">
        {/* <FontAwesomeIcon icon={faSun} /> */}
        <span className="link-text logo-text">Dark Mode</span>
      </span>
    </div>

    <ul className="navbar-nav">
      {navConfig.map((conf) => (
        <li className="nav-item">
          <Link
            to={conf.to}
            className={
              conf.name == "Resume" ? "styledButton nav-link" : "nav-link"
            }
          >
            <FontAwesomeIcon icon={conf.faName} />
            <span> {conf.name}</span>
          </Link>
        </li>
      ))}
    </ul>

    <div className="nav-item social-items">
      <span className="media-links">
        {portfolio.socialMedia.map((media) => (
          <Link target="_blank" to={media.url} className="nav-media-link">
            <FontAwesomeIcon icon={media.faName} />
          </Link>
        ))}
      </span>
    </div>
  </nav>
);

export default Navbar;
