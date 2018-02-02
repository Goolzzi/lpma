import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import LPMALink from "../../utils/LPMALink";

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
      <img src={src} srcSet={srcSet} alt="acquisition bootom Jumbotron" />
      <section className="section wrapper">
        <div className="columns is-gapless">
          <div className="column is-6 is-12-mobile">
            {title ? <p>{title.title}</p> : <React.Fragment />}
          </div>
          <div className="column is-6 is-12-mobile">
            <div className="has-text-right">
              {joinLink ? (
                <LPMALink {...joinLink}>
                  <button className="btn primary halfwidth">
                    {joinLink.name}
                  </button>
                </LPMALink>
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
