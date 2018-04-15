import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
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
    content: {childMarkdownRemark: {html: content}},
    purchaseButton: {label, iconName, href},
    image: {sizes},
  },
}) => (
  <section className="section lpma2018-info">
    <div className="container">
      <div className="columns">
        <div className="column is-6 left-side">
          <p className="header">{title}</p>
          <div className="text" dangerouslySetInnerHTML={{__html: content}} />
          <a href={href === null ? "#" : href}>
            <button className="btn secondary with-radius-5 smaller-text">
              {label} &nbsp;
              <Icon name={iconName} />
            </button>
          </a>
        </div>
        <div className="column is-6 right-side">
          <Img className="left-side-image purpose-image" sizes={sizes} />
        </div>
      </div>
    </div>
  </section>
);

YearlyEventPurpose.propTypes = propTypes;

export default YearlyEventPurpose;
