import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {
  acquisitionJumbotron: PropTypes.array.isRequired,
};

const TopJumbotron = ({acquisitionJumbotron}) => {
  const jumbotron = acquisitionJumbotron[0];
  const {
    background: {resolutions: {src, srcSet}},
    title: {title},
    joinLink,
  } = jumbotron;
  return (
    <section className="hero top">
      <div className="image is-16by9">
        <img src={src} srcSet={srcSet} alt="acquisition Jumbotron" />
      </div>
      <div className="cont-wrapper">
        <div className="cont">
          <p>{title}</p>
          <Link to={joinLink.to}>
            <button className="btn primary halfwidth">{joinLink.name}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

TopJumbotron.propTypes = propTypes;

export default TopJumbotron;
