import React from "react";

import { portfolio } from "../portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMedia() {
  return (
    <div className="social-items">
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
  );
}
