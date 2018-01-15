import React from "react";
import PropTypes from "prop-types";
import TopJumbotron from "../components/TopJumbotron";
import BottomJumbotron from "../components/BottomJumbotron";
import Events from "../components/Events";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const EventsPage = ({
  data: {contentfulUpcomingEvents, allContentfulEventsJumbotron: {edges}},
}) => (
  <div>
    <TopJumbotron {...edges[1].node} />
    <Events {...contentfulUpcomingEvents} />
    <BottomJumbotron {...edges[0].node} />
  </div>
);

EventsPage.propTypes = propTypes;

export default EventsPage;

export const pageQuery = graphql`
  query EventsPageQuery {
    contentfulUpcomingEvents {
      title
      events {
        id
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
    allContentfulEventsJumbotron {
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
              resolutions {
                src
                srcSet
              }
            }
            title {
              title
            }
            titleVisible
          }
        }
      }
    }
  }
`;
