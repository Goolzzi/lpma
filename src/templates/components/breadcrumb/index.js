import React from "react";
import PropTypes from "prop-types";
import LPMALnk from "../../../utils/LPMALink";
import "./styles.scss";

const propTypes = {
  crumbs: PropTypes.array.isRequred,
};

const BreadCrumb = ({crumbs}) => {
  if (!crumbs) {
    return null;
  }
  return (
    <div className="container breadcrumb-wrapper">
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          {crumbs.map(({path, title}) => (
            <li key={path}>
              <LPMALnk to={path}>{title}</LPMALnk>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

BreadCrumb.propTypes = propTypes;

export default BreadCrumb;
