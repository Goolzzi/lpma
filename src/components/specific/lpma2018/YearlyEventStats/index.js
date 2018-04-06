import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  node: PropTypes.shape({
    stellarAttendees: PropTypes.string.isRequired,
    latestExhibitors: PropTypes.string.isRequired,
    leadingSpeakers: PropTypes.string.isRequired,
    galaDinner: PropTypes.string.isRequired,
  }),
};

const YearlyEventStats = ({
  node: {stellarAttendees, latestExhibitors, leadingSpeakers, galaDinner},
}) => (
  <section className="section lpma2018-graph">
    <div className="container">
      <div className="columns">
        <div className="column is-3">
          <div className="has-text-centered">
            <h1>{stellarAttendees}</h1>
            <p>Stellar Attendees</p>
          </div>
        </div>
        <div className="column is-3">
          <div className="has-text-centered">
            <h1>{latestExhibitors}</h1>
            <p>Latest PM Product Exhibitors</p>
          </div>
        </div>
        <div className="column is-3">
          <div className="has-text-centered">
            <h1>{leadingSpeakers}</h1>
            <p>Industry Leading Speakers</p>
          </div>
        </div>
        <div className="column is-3">
          <div className="has-text-centered">
            <h1>{galaDinner}</h1>
            <p>Epic Awards Night Gala Dinner</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

YearlyEventStats.propTypes = propTypes;

export default YearlyEventStats;
