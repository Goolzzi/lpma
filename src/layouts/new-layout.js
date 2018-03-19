import React from "react";
import "bulma";
import Header from "../NewComponent/Header";

import "../styles/landing_mode.scss";
const NewLayoutTemplate = props => {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>{children()}</div>
    </div>
  )
}
export default NewLayoutTemplate;