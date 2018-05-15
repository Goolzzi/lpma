import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import "./styles.scss";

const propTypes = {
  edges: PropTypes.array.isRequired,
};

const Audience = ({edges}) => (
  <React.Fragment>
    {edges.map(({node: {id, image: {sizes}}}) => (
      <section key={id} className="hero audience">
        <div className="image-wrapper">
          <Img sizes={sizes} />
        </div>
      </section>
    ))}
  </React.Fragment>
);

Audience.propTypes = propTypes;

export default Audience;
