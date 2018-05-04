import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";

const propTypes = {
  link: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
};

const BackToButton = ({link, prefix}) => (
  <Link
    to={link}
    className="btn default with-radius-5 larger thirdwidth shadow">
    <span>Back to&nbsp;</span>
    <span className="has-text-weight-bold">{prefix}</span>
  </Link>
);

BackToButton.propTypes = propTypes;

export default BackToButton;
