import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  speaker: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    info: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
  }),
};

const YearlyEventSpeaker = ({
  speaker: {name, profession, info, image: {resolutions: {src, srcSet}}},
}) => (
  <div className="column is-4 speaker">
    <div className="columns">
      <div className="column is-6">
        <div className="has-text-centered-mobile">
          <img src={src} srcSet={srcSet} alt="" />
        </div>
      </div>
      <div className="column is-6">
        <div className="has-text-centered-mobile">
          <h4>{name}</h4>
          <h3>{profession}</h3>
          <div
            dangerouslySetInnerHTML={{__html: info.childMarkdownRemark.html}}
          />
        </div>
      </div>
    </div>
  </div>
);

YearlyEventSpeaker.propTypes = propTypes;

export default YearlyEventSpeaker;
