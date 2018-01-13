import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {
  acquisitionJumbotron: PropTypes.array.isRequired,
};

const BottomJumbotron = ({acquisitionJumbotron}) => {
  const jumbotron = acquisitionJumbotron[0];
  const {
    background: {resolutions: {src, srcSet}},
    title: {title},
    joinLink,
  } = jumbotron;
  return (
    <section className="hero bottom">
      <dev className="image is-16by9">
        <img src={src} srcSet={srcSet} alt="acquisition bootom Jumbotron" />
      </dev>
      <section className="section wrapper">
        <div className="columns">
          <div className="column is-6 is-12-mobile">
            <p>{title}</p>
          </div>
          <div className="column is-6 is-12-mobile">
            <div className="has-text-right">
              <Link to={joinLink.to}>
                <button className="btn primary">{joinLink.name}</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

BottomJumbotron.propTypes = propTypes;

export default BottomJumbotron;
