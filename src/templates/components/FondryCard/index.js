import React from "react";
import LPMALink from "../../../utils/LPMALink";

const FoundryCard = ({title, content, href}) => {
  return (
    <div className="column is-6">
      <LPMALink cssClass={"foundry-card-item"} to={href}>
        <h3>{title}</h3>
        <p className="truncate-5">{content}</p>
      </LPMALink>
    </div>
  );
};

export default FoundryCard;
