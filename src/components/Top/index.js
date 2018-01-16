import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

const Top = ({copyrightHTML}) => (
  <section className="hero top">
    <img src={require("./../../assets/images/Ben White.png")} />
    <div className="cont-wrapper">
      <div className="cont">
        <p>Calling all leading property professionals. You are invited.</p>
        <button className="btn primary halfwidth">Join Today</button>
      </div>
    </div>
  </section>
);

export default Top;