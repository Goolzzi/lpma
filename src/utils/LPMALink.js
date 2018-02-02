/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const propTypes = {
  force: PropTypes.bool,
  cssClass: PropTypes.string,
  to: PropTypes.string,
};

const LPMALink = props => {
  if (props.force) {
    return (
      <a
        className={props.cssClass}
        onClick={() => {
          window.location = window.location.origin + props.to;
        }}>
        {props.children}
      </a>
    );
  }
  return (
    <Link className={props.cssClass} to={props.to}>
      {props.children}
    </Link>
  );
};

LPMALink.propTypes = propTypes;

export default LPMALink;
