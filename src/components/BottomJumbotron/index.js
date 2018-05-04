import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import JoinLpmaButton from "../JoinLpmaButton";
import "./styles.scss";

const propTypes = {
  jumbotron: PropTypes.array.isRequired,
};

const BottomJumbotron = ({jumbotron}) => {
  const {background: {sizes}, title, joinLink} = jumbotron[0];
  return (
    <section className="hero bottom">
      <div className="image-wrapper">
        <Img sizes={sizes} />
      </div>
      <section className="section wrapper">
        <div className="columns is-gapless">
          <div className="column is-6 is-12-mobile">
            {title ? <p>{title.title}</p> : null}
          </div>
          <div className="column is-6 is-12-mobile">
            <div className="has-text-right">
              <JoinLpmaButton
                joinLink={joinLink}
                btnClassName={"btn primary halfwidth"}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

BottomJumbotron.propTypes = propTypes;

export default BottomJumbotron;
