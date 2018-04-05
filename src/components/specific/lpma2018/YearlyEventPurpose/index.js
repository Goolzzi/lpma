import React from "react";
import PropTypes from "prop-types";
import {Icon} from "react-fa";
import "./styles.scss";

const propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    purchaseButton: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
  }),
};

const YearlyEventPurpose = ({
  node: {
    title,
    content: {content},
    purchaseButton: {label, iconName},
    image: {resolutions: {src, srcSet}},
  },
}) => (
  <section className="section lpma2018-info">
    <div className="container">
      <div className="columns">
        <div className="column is-6 left-side">
          <p className="header">{title}</p>
          <p className="text">{content}</p>
          <button className="btn secondary with-radius-5 smaller-text">
            {label} &nbsp;
            <Icon name={iconName} />
          </button>
        </div>
        <div className="column is-6 right-side">
          <img className="left-side-image" src={src} srcSet={srcSet} />
        </div>
      </div>
    </div>
  </section>
);

YearlyEventPurpose.propTypes = propTypes;

export default YearlyEventPurpose;
