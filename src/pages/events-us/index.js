import React from "react";
import PropTypes from "prop-types";
import TopJumbotron from "../../components/TopJumbotron";
import BottomJumbotron from "../../components/BottomJumbotron";
import Events from "../../components/Events";

const propTypes = {
  data: PropTypes.object.isRequired,
};

//todo FIXME: need to improve with events page
const EventsUSPage = ({
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

EventsUSPage.propTypes = propTypes;

export default EventsUSPage;

export const pageQuery = graphql`
  query EventsUSPageQuery {
    contentfulUpcomingEvents {
      title
    }
    allContentfulEvent(filter: {country: {eq: "us"}}) {
      edges {
        node {
          id
          name
          date
          location
          name
          date
          location
          description {
            childMarkdownRemark {
              html
            }
          }
          buyTicketsLink {
            to
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
              force
            }
            background {
              id
              resolutions {
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
