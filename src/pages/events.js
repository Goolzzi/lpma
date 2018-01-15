import React from "react";
import PropTypes from "prop-types";
import TopJumbotron from "../components/TopJumbotron";
import BottomJumbotron from "../components/BottomJumbotron";
import Events from "../components/Events";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const EventsPage = () => (
  <div>
    {/* <TopJumbotron /> */}
    <Events />
    {/* <BottomJumbotron /> */}
  </div>
);

EventsPage.propTypes = propTypes;

export default EventsPage;

// export const pageQuery = graphql`
//   query EventsPageQuery {
//   }
// `;
