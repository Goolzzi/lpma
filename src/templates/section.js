import React from "react";
import PropTypes from "prop-types";

const propTypes = {};

const Section = props => (
  <div>
    <h1>{props.location.pathname}</h1>
    <code>{JSON.stringify(props)}</code>
  </div>
);

Section.propTypes = propTypes;

export default Section;
