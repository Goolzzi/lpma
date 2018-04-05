import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const DocumentTitle = ({title, subtitle}) => (
  <div className="columns titles-wrapper">
    <div className="column">
      <h2 className="title is-4">{title}</h2>
      <h4 className="subtitle is-6">{subtitle}</h4>
    </div>
    <div className="column" />
  </div>
);

DocumentTitle.propTypes = propTypes;

export default DocumentTitle;
