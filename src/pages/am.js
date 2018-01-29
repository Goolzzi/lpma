import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const IndexPage = () => (
  <div>
    <h1>Geo Ip Am</h1>
  </div>
);

IndexPage.propTypes = propTypes;

export default IndexPage;
