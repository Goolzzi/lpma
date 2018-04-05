import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  node: PropTypes.shape({
    gif: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
  }),
};

const YearlyEventAwardsGala = ({
  node: {gif: {resolutions: {src, srcSet}}, title, content},
}) => (
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
          <img src={src} srcSet={srcSet} alt="" />
        </div>
      </div>
    </div>
  </section>
);

YearlyEventAwardsGala.propTypes = propTypes;

export default YearlyEventAwardsGala;
