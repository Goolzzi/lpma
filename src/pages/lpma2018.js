import React from "react";
import PropTypes from "prop-types";
import LPMA2018 from "../components/LPMA2018";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const LPMA2018Page = () => (
  <div>
    <LPMA2018 />
  </div>
);

LPMA2018Page.propTypes = propTypes;

export default LPMA2018Page;
