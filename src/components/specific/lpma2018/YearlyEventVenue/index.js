import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
    learnMoreLink: PropTypes.string.isRequired,
  }),
};

const YearlyEventVenue = ({
  node: {title, content, image: {sizes}, learnMoreLink},
}) => (
  <section className="section lpma2018-venue">
    <div className="container">
      <div className="columns">
        <div className="column is-12">
          <div className="has-text-centered">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container venue-cont">
      <div className="columns">
        <div className="column is-6">
          <div className="has-text-centered">
            <Img sizes={sizes} />
          </div>
        </div>
        <div className="column is-6">
          <div
            dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}
          />
          <div className="has-text-centered">
            <a href={learnMoreLink}>
              <button className="btn centered with-radius-5 smaller-text">
                LEARN MORE
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

YearlyEventVenue.propTypes = propTypes;

export default YearlyEventVenue;
