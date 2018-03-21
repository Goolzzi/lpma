// @flow
import React from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import {Icon} from "react-fa";
import "./styles.scss";

const videoOptions = {
  height: "10000",
  width: "100%",
  playerVars: {
    autoplay: 1,
    controls: 0,
    disablekb: 0,
    fs: 0,
    iv_load_policy: 3,
    loop: 1,
    playlist: "pZ_tHrWzdT4",
    modestbranding: 1,
    showinfo: 0,
    enablejsapi: 1,
  },
};

const propTypes = {
  node: PropTypes.shape({
    videoLink: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    firstRow: PropTypes.string.isRequired,
    secondRow: PropTypes.string.isRequired,
    purchaseButton: PropTypes.object.isRequired,
  }),
};

const Lpma2018Jumbotron = ({
  node: {
    videoLink,
    heading,
    image: {resolutions: {src, srcSet}},
    firstRow,
    secondRow,
    purchaseButton: {label, iconName},
  },
}) => (
  <section className="section lpma2018-top-jumbotron">
    <div className="video-cont is-hidden-mobile">
      <YouTube
        videoId={videoLink}
        opts={videoOptions}
        className="video-frame"
      />
    </div>
    <div
      className="video-cont-cover is-hidden-mobile"
      onClick={event => event.stopPropagation()}
    />
    <div className="container">
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <div className="has-text-centered video-cont-data">
            <h2>{heading}</h2>

            <img src={src} srcSet={srcSet} />

            <strong>{firstRow}</strong>
            <strong>{secondRow}</strong>

            <button className="btn secondary with-radius-5 smaller-text">
              {label} &nbsp;
              <Icon name={iconName} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Lpma2018Jumbotron.propTypes = propTypes;

export default Lpma2018Jumbotron;
