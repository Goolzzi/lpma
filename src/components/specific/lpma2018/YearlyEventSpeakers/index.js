import React from "react";
import PropTypes from "prop-types";
import YearlyEventSpeaker from "../YearlyEventSpeaker";
import "./styles.scss";

const renderSpeakers = speakers =>
  speakers.map(speaker => (
    <YearlyEventSpeaker key={speaker.id} speaker={speaker} />
  ));

const propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    speakers: PropTypes.array.isRequired,
    seeMoreButton: PropTypes.object.isRequired,
    heading: PropTypes.object.isRequired,
  }),
};

const YearlyEventSpeakers = ({
  node: {title, speakers, seeMoreButton, heading},
}) => (
  <section className="section lpma2018-our-speakers">
    <div className="container is-fluid">
      <div className="columns">
        <div className="column is-12">
          <div className="has-text-centered">
            <h2>{title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: heading.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </div>
      <div className="columns is-multiline">{renderSpeakers(speakers)}</div>
      <div className="columns">
        <div className="column is-12">
          <div className="has-text-centered">
            <button className="btn secondary with-radius-5 smaller-text">
              {seeMoreButton.label}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

YearlyEventSpeakers.propTypes = propTypes;

export default YearlyEventSpeakers;
