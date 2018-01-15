import React from "react";
import PropTypes from "prop-types";
import TopJumbotron from "../components/TopJumbotron";
import BottomJumbotron from "../components/BottomJumbotron";
import Events from "../components/Events";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const EventsPage = ({data: {contentfulUpcomingEvents}}) => (
  <div>
    {/* <TopJumbotron /> */}
    <Events {...contentfulUpcomingEvents} />
    {/* <BottomJumbotron /> */}
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
  }
`;
