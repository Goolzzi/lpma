import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import "./styles.scss";

const propTypes = {
  node: PropTypes.shape({
    gif: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
  }),
};

const YearlyEventAwardsGala = ({node: {gif: {sizes}, title, content}}) => (
  <section className="section lpma2018-awards">
    <div className="container">
      <div className="columns">
        <div className="column is-12">
          <div className="has-text-centered">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-6">
          <div
            dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}
          />
        </div>
        <div className="column is-6">
          <Img sizes={sizes} />
        </div>
      </div>
    </div>
  </section>
);

YearlyEventAwardsGala.propTypes = propTypes;

export default YearlyEventAwardsGala;
