import React from "react";
import Link from "gatsby-link";

const LPMALink = props => {
  if (props.force) {
    return (
      <a
        className={props.cssClass}
        onClick={() => {
          window.location = window.location.origin + props.to;
        }}>
        {props.children}
      </a>
    );
  }
  return (
    <Link className={props.cssClass} to={props.to}>
      {props.children}
    </Link>
  );
};

export default LPMALink;
