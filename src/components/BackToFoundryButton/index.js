import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";

const propTypes = {};

const BackToFoundryButton = () => (
  <Link
    to="/foundry"
    className="btn default with-radius-5 larger thirdwidth shadow">
    <span>Back to&nbsp;</span>
    <span className="has-text-weight-bold">Foundry</span>
  </Link>
);

BackToFoundryButton.propTypes = propTypes;

export default BackToFoundryButton;
