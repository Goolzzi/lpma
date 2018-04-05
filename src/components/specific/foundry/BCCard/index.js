import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import {Icon} from "react-fa";

const propTypes = {
  node: PropTypes.shape({
    name: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
};

const BCCard = ({node: {name, iconName, slug}}) => (
  <div className="column is-4 level-card-wrapper">
    <div className="level-card-item smaller has-text-centered">
      <Link className="is-size-5 has-icon" to={`/foundry/${slug}`}>
        <Icon name={iconName} />
        {name}
      </Link>
    </div>
  </div>
);

BCCard.propTypes = propTypes;

export default BCCard;
