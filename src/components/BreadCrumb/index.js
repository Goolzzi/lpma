import React from "react";
import PropTypes from "prop-types";
import LPMALnk from "../../utils/LPMALink";
import "./styles.scss";

const propTypes = {
  crumbs: PropTypes.array.isRequred,
  parentPath: PropTypes.string.isRequred,
};

const BreadCrumb = ({crumbs, parentPath}) => {
  if (!crumbs) {
    return null;
  }
  return (
    <div className="container breadcrumb-wrapper">
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          {crumbs.map(({path, title}, index) => {
            return index === crumbs.length - 1 ? (
              <li key={path}>
                <span>{title}</span>
              </li>
            ) : (
              <li key={path}>
                <LPMALnk to={`${parentPath}${path}`}>{title}</LPMALnk>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

BreadCrumb.propTypes = propTypes;

export default BreadCrumb;
