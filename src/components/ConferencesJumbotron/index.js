import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
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

const Video = ({videoId, show}) => (
  <div className="video-cont is-hidden-mobile">
    {show ? (
      <YouTube videoId={videoId} opts={videoOptions} className="video-frame" />
    ) : (
      <React.Fragment />
    )}
  </div>
);

const getSectionStyles = background => {
  return background ? {backgroundImage: `url(${background.sizes.src})`} : {};
};

const propTypes = {
  node: PropTypes.shape({
    videoLink: PropTypes.string,
    heading: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    cover: PropTypes.object,
    content: PropTypes.object.isRequired,
    purchaseButton: PropTypes.object,
  }),
  isVideo: PropTypes.bool.isRequired,
};

const ConferencesJumbotron = ({
  node: {videoLink, heading, image: {sizes}, cover, content, purchaseButton},
  isVideo,
}) => (
  <section
    className="section lpma2018-top-jumbotron"
    style={getSectionStyles(cover)}>
    <Video show={isVideo} videoId={videoLink} />
    <div
      className="video-cont-cover is-hidden-mobile"
      onClick={event => event.stopPropagation()}
    />
    <div className="container">
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <div className="has-text-centered video-cont-data">
            <h2>{heading}</h2>
            <Img sizes={sizes} />
            <strong
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />

            {purchaseButton ? (
              <button className="btn secondary with-radius-5 smaller-text">
                {purchaseButton.label} &nbsp;
                <Icon name={purchaseButton.iconName} />
              </button>
            ) : (
              <React.Fragment />
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

ConferencesJumbotron.propTypes = propTypes;

export default ConferencesJumbotron;
