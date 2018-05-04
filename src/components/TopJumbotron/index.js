import React from "react";
import PropTypes from "prop-types";
import JoinLpmaButton from "../JoinLpmaButton";
import Img from "gatsby-image";
import "./styles.scss";

const propTypes = {
  jumbotron: PropTypes.array.isRequired,
};

const TopJumbotron = ({jumbotron}) => {
  const {background: {sizes}, title, joinLink} = jumbotron[0];
  return (
    <section className="hero top">
      <div className="image-wrapper">
        <Img sizes={sizes} />
      </div>

      <div className="cont-wrapper">
        <div className="cont">
          {title ? <p>{title.title}</p> : null}
          <JoinLpmaButton
            joinLink={joinLink}
            btnClassName={"btn primary halfwidth"}
          />
        </div>
      </div>
    </section>
  );
};

TopJumbotron.propTypes = propTypes;

export default TopJumbotron;
