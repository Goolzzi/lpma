import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {};

const Event = () => (
  <div className="columns event-item">
    <div className="column is-6 event-name">
      <h3>Event or conference name</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beat.
      </p>
    </div>
    <div className="column is-3 event-date">
      <h4>July 1–4, 2018</h4>
      <p>Sydney Opera House Sydney, Australia</p>
    </div>
    <div className="column is-3 event-button">
      <button className="btn primary outlined">Buy Tickets</button>
    </div>
  </div>
);

const Events = () => (
  <section className="section upcoming-events">
    <h3>UPCOMING EVENTS</h3>
    <Event />
    <Event />
    <Event />
    <Event />
  </section>
);

Events.propTypes = propTypes;

export default Events;
