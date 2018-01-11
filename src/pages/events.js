import React from "react";

import Top from "../components/Top";
import Bottom from "../components/Bottom";
import UpcomingEvents from "../components/UpcomingEvents";

const eventsPage = () => (
  <div>
    <Top />
    <UpcomingEvents />
    <Bottom />
  </div>
);

export default eventsPage;