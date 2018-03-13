import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import LPMALink from "../../utils/LPMALink";

const propTypes = {
  jumbotron: PropTypes.array.isRequired,
};

const TopJumbotron = ({jumbotron}) => {
  console.log(jumbotron);
  const {
    background: {resolutions: {src, srcSet}},
    title,
    joinLink,
  } = jumbotron[0];
  return (
    <section className="hero top">
      <div className="image-wrapper">
        <img src={src} srcSet={srcSet} alt="acquisition Jumbotron" />
      </div>
      {title || joinLink ? (
        <div className="cont-wrapper">
          <div className="cont">
            {title ? <p>{title.title}</p> : <React.Fragment />}
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
      ) : (
        <React.Fragment />
      )}
    </section>
  );
};

TopJumbotron.propTypes = propTypes;

export default TopJumbotron;
