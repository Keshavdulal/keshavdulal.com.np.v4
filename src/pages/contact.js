import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { portfolio } from "../portfolio";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container">
      <div className="content">
        <h1>Contact_</h1>
        <span>
          If you wish to connect with me, drop me an email - I'm quick when it
          comes to responding to emails.
        </span>
        <br />
        <a
          className="styledButtonPrimary"
          href={`mailto:${portfolio.bio.email}`}
          rel="noopener noreferrer"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </Layout>
);

export default Contact;
