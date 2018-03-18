import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {
  crumbs: PropTypes.array.isRequired,
  parentPath: PropTypes.string.isRequired,
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
              <li key={path + title}>
                <span>{title}</span>
              </li>
            ) : (
              <li key={title + path}>
                <Link to={`${parentPath}${path}`}>{title}</Link>
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
