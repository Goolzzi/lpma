import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

const FoundryCard = ({title, content, href}) => {
  return (
    <div className="column is-6">
      <Link className={"foundry-card-item"} to={href}>
        <h3>{title}</h3>
        <p className="truncate-5">{content}</p>
      </Link>
    </div>
  );
};

export default FoundryCard;
