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
    centerCont,
  } = jumbotron[0];
  return (
    <section className="hero top">
      <div className="image-wrapper">
        <img src={src} srcSet={srcSet} alt="acquisition Jumbotron" />
      </div>
      <div className={`cont-wrapper ${centerCont ? "center-cont" : ""}`}>
        <div className="cont">
          {title ? <p>{title.title}</p> : <React.Fragment />}
          {joinLink ? (
            <LPMALink {...joinLink}>
              <button className="btn primary halfwidth">{joinLink.name}</button>
            </LPMALink>
          ) : (
            <React.Fragment />
          )}
          {centerCont && centerCont.category && centerCont.date ? (
            <span className="category-and-date">
              <span>{centerCont.category}</span>
              <span> | </span>
              <span>{centerCont.date}</span>
            </span>
          ) : (
            <React.Fragment />
          )}

          {centerCont && centerCont.authorName && centerCont.authorAvatarSrc ? (
            <div className="author">
              <div className="image author-avatar is-48x48">
                <img src={centerCont.authorAvatarSrc} />
              </div>
              <span className="author-name">{centerCont.authorName}</span>
            </div>
          ) : (
            <React.Fragment />
          )}
        </div>
      </div>
    </section>
  );
};

TopJumbotron.propTypes = propTypes;

export default TopJumbotron;
