import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const Event = ({name, date, location, description, buyTicketsLink}) => (
  <div className="columns event-item">
    <div className="column is-6 event-name">
      <h3>{name}</h3>
      <p
        dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html}}
      />
    </div>
    <div className="column is-3 event-date">
      <h4>{date}</h4>
      <p>{location}</p>
    </div>
    <div className="column is-3 event-button">
      <Link to={buyTicketsLink.to}>
        <button className="btn primary outlined">{buyTicketsLink.name}</button>
      </Link>
    </div>
  </div>
);

const propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.array,
};

const Events = ({title, events}) => (
  <section className="section upcoming-events">
    <h3>{title}</h3>
    {events.map(item => <Event key={item.id} {...item} />)}
  </section>
);

Events.propTypes = propTypes;

export default Events;
