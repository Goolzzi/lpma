import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {
  learnMoreLabel: PropTypes.string.isRequired,
  learnMoreLink: PropTypes.string.isRequired,
};

const BooksBottom = ({learnMoreLabel, learnMoreLink}) => (
  <section className="section building-blocks-bottom">
    <div className="container">
      <div className="has-text-centered">
        <h3 className="title is-3 has-text-white has-text-weight-normal is-italic">
          {learnMoreLabel}
        </h3>
        <Link to={learnMoreLink} className="btn primary">
          Learn More
        </Link>
      </div>
    </div>
  </section>
);

BooksBottom.propTypes = propTypes;

export default BooksBottom;
