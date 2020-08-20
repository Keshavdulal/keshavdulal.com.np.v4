import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { socialMedia } from "../variables";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  fas,
  faHome,
  faCode,
  faChess,
  faIdCard,
  faPaperPlane,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(fas, fab);

const Navbar = ({ siteTitle }) => (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faArrowRight} />
          <span className="link-text logo-text">Keshav</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faHome} />
          <span> Home</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/experience" className="nav-link">
          <FontAwesomeIcon icon={faCode} />
          <span> Experience</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/projects" className="nav-link">
          <FontAwesomeIcon icon={faChess} />
          <span> Projects</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link">
          <FontAwesomeIcon icon={faIdCard} />
          <span> Contact</span>
        </Link>
      </li>
      <li className="nav-item">
        {/* todo make it downloadable in one click */}
        <Link target="_blank" to="https://bit.ly/3iKDOql" className="nav-link">
          <FontAwesomeIcon icon={faPaperPlane} />
          <span> Resume</span>
        </Link>
      </li>

      <li className="nav-item">
        <span className="media-links">
          <Link
            target="_blank"
            to={socialMedia.github}
            className="nav-media-link"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </Link>
          <Link
            target="_blank"
            to={socialMedia.twitter}
            className="nav-media-link"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </Link>
          <Link
            target="_blank"
            to={socialMedia.linkedIn}
            className="nav-media-link"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </Link>
          <Link
            target="_blank"
            to={socialMedia.stackOverFlow}
            className="nav-media-link"
          >
            <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
          </Link>
        </span>
      </li>
    </ul>
  </nav>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
