import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired,
  }),
};

const YearlyEventGallery = ({node: {title, description, images}}) => (
  <section className="section lpma2018-gallery">
    <div className="container">
      <div className="columns">
        <div className="column is-12">
          <div className="has-text-centered">
            <h2>{title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: description.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </div>
      <div className="columns is-multiline">
        {images.map(({id, resolutions}) => (
          <div key={id} className="column is-4">
            <img src={resolutions.src} srcSet={resolutions.srcSet} alt="" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

YearlyEventGallery.propTypes = propTypes;

export default YearlyEventGallery;
