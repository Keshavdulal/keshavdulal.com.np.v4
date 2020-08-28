import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { portfolio } from "../portfolio";
import SocialMedia from "../components/social-media";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container">
      <div className="content">
        <h1>Contact_</h1>
        <p>
          If you wish to connect with me, drop me an email at
          keshav.dulal@gmail.com
          <br />
          I'm quick when it comes to responding to emails.
        </p>
        <br />
        <a
          className="styledButtonPrimary"
          href={`mailto:${portfolio.bio.email}`}
          rel="noopener noreferrer"
        >
          Get in Touch
        </a>

        <div>
          <p>You could also find me in these platforms.</p>
          <SocialMedia className="contact-page" style={{ display: "block" }} />
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
