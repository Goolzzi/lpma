import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

const TopLinks = () => (
  <div className="columns top-links">
    <div className="column">
      <Link to="/contact" className="is-size-5">
        Looking for something?
      </Link>
      <Link to="/contact" className="is-size-5">
        Feedback
      </Link>
    </div>
  </div>
);

export default TopLinks;
