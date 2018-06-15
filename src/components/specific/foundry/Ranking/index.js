import React from "react";
import PropTypes from "prop-types";
import ordinal from "ordinal-js";
import {Icon} from "react-fa";
import "./styles.scss";

const order = ordinal.toOrdinal;

const RankingItem = ({
  item: {agencyName, location, percentage, properties},
  rank,
}) => (
  <div className="columns">
    <div className="column is-2">
      <span className="liderboard-place">{order(rank)}</span>
    </div>
    <div className="column is-3">
      <span className="liderboard-agency">{agencyName}</span>
    </div>
    <div className="column is-2">
      <span>{location}</span>
    </div>
    <div className="column is-2">
      <span className="liderboard-percents">
        <Icon name="arrow-up" /> {percentage}%
      </span>
    </div>
    <div className="column is-4">
      <span>+{properties} properties</span>
    </div>
  </div>
);

const Ranking = ({
  title,
  description,
  image: {resolutions: {src, srcSet}},
  items,
}) => (
  <React.Fragment>
    <div className="list-heading">
      <img src={src} srcSet={srcSet} alt="" />
      <h5 className="title is-5">{title}</h5>
      <span>{description}</span>
    </div>
    <div className="liderboard-gird">
      {items.map((item, index) => (
        <RankingItem key={item.id} item={item} rank={index + 1} />
      ))}
    </div>
    <hr className="ranking-border" />
  </React.Fragment>
);

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

Ranking.propTypes = propTypes;

export default Ranking;
