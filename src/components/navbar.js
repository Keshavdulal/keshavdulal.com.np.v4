import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faChess,
  faIdCard,
  faPaperPlane,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

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
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faPaperPlane} />
          <span> Resume</span>
        </Link>
      </li>

      <li className="nav-item">
        <ul className="media-links">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
        </ul>
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
