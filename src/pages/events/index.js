import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import TopJumbotron from "../../components/TopJumbotron";
import BottomJumbotron from "../../components/BottomJumbotron";
import "./styles.scss";

const Event = ({
  name,
  date,
  location,
  description,
  additionalInfo,
  buttonLink,
}) => (
  <div className="columns is-gapless event-item">
    <div className="column is-7 event-name">
      <h3>{name}</h3>
      <div
        dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html}}
      />
    </div>
    <div className="column is-2 event-date">
      <h4>{date}</h4>
      <p>{location}</p>
    </div>
    <div className="column is-3 event-button">
      {buttonLink &&
        buttonLink.href && (
          <a href={buttonLink.href}>
            <button className="btn primary outlined">{buttonLink.name}</button>
          </a>
        )}
      {buttonLink &&
        buttonLink.link && (
          <Link href={buttonLink.link}>
            <button className="btn primary outlined">{buttonLink.name}</button>
          </Link>
        )}
      {additionalInfo && (
        <div
          className="add-info"
          dangerouslySetInnerHTML={{
            __html: additionalInfo.childMarkdownRemark.html,
          }}
        />
      )}
    </div>
  </div>
);

const Events = ({title, events}) => (
  <section className="section upcoming-events">
    <h3>{title}</h3>
    {events.map(({node}) => <Event key={node.id} {...node} />)}
  </section>
);

Events.propTypes = {
  title: PropTypes.string.isRequired,
  events: PropTypes.array,
};

const EventsPage = ({
  data: {
    contentfulUpcomingEvents,
    allContentfulEventsJumbotron: {edges},
    allContentfulEvent: {edges: eventEdges},
  },
}) => (
  <div>
    <TopJumbotron {...edges[0].node} />
    <Events {...contentfulUpcomingEvents} events={eventEdges} />
    <BottomJumbotron {...edges[1].node} />
  </div>
);

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EventsPage;

export const pageQuery = graphql`
  query EventsPageQuery {
    contentfulUpcomingEvents {
      title
    }
    allContentfulEvent(
      filter: {country: {eq: "au"}}
      sort: {fields: [orderId], order: ASC}
    ) {
      edges {
        node {
          id
          name
          date
          orderId
          location
          name
          date
          location
          description {
            childMarkdownRemark {
              html
            }
          }
          additionalInfo {
            childMarkdownRemark {
              html
            }
          }
          buttonLink {
            href
            link
            name
          }
        }
      }
    }
    allContentfulEventsJumbotron(sort: {fields: [pageLocation], order: DESC}) {
      edges {
        node {
          pageLocation
          jumbotron {
            joinLink {
              name
              to
            }
            background {
              id
              resolutions(quality: 100) {
                src
                srcSet
              }
            }
            title {
              title
            }
          }
        }
      }
    }
  }
`;
