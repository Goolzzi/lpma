import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {
  node: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    slug: PropTypes.string.isRequired,
  }),
};

const BCCard = ({node: {name, icon: {resolutions: {src, srcSet}}, slug}}) => (
  <div className="column is-4 level-card-wrapper">
    <div className="level-card-item smaller has-text-centered">
      <img className="icon" src={src} srcSet={srcSet} alt="" />
      <Link className="is-size-5 has-icon" to={`/foundry/${slug}`}>
        {name}
      </Link>
    </div>
  </div>
);

BCCard.propTypes = propTypes;

export default BCCard;
