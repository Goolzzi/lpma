import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  edges: PropTypes.array.isRequired,
};

const Audience = ({edges}) => (
  <React.Fragment>
    {edges.map(({node: {id, image: {resolutions}}}) => (
      <section key={id} className="hero audience">
        <div className="image">
          <img
            src={resolutions.src}
            srcSet={resolutions.srcSet}
            alt="audience"
          />
        </div>
      </section>
    ))}
  </React.Fragment>
);

Audience.protoTypes = propTypes;

export default Audience;
