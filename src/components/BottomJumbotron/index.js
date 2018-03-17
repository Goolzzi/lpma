import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Link from "gatsby-link";

const propTypes = {
  jumbotron: PropTypes.array.isRequired,
};

const BottomJumbotron = ({jumbotron}) => {
  const {
    background: {resolutions: {src, srcSet}},
    title,
    joinLink,
  } = jumbotron[0];
  return (
    <section className="hero bottom">
      <div className="image-wrapper">
        <img src={src} srcSet={srcSet} alt="acquisition bootom Jumbotron" />
      </div>
      <section className="section wrapper">
        <div className="columns is-gapless">
          <div className="column is-6 is-12-mobile">
            {title ? <p>{title.title}</p> : <React.Fragment />}
          </div>
          <div className="column is-6 is-12-mobile">
            <div className="has-text-right">
              {joinLink ? (
                <Link {...joinLink}>
                  <button className="btn primary halfwidth">
                    {joinLink.name}
                  </button>
                </Link>
              ) : (
                <React.Fragment />
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

BottomJumbotron.propTypes = propTypes;

export default BottomJumbotron;
