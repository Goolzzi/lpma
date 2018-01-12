import React from "react";

import TopJumbotron from "../components/TopJumbotron";
import BottomJumbotron from "../components/BottomJumbotron";
import UpcomingEvents from "../components/UpcomingEvents";

const eventsPage = () => (
  <div>
    <TopJumbotron />
    <UpcomingEvents />
    <BottomJumbotron />
  </div>
);

export default eventsPage;
