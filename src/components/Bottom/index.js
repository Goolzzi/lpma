import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

const Bottom = ({copyrightHTML}) => (
  <section className="hero bottom">
    <img src={require("./../../assets/images/Audience (43).png")} />

    <section className="section wrapper">
      <div className="columns">
        <div className="column is-6 is-12-mobile">
          <p>The leading community for leading property professionals</p>
        </div>
        <div className="column is-6 is-12-mobile">
          <div className="has-text-right">
            <button className="btn primary">Join the LPMA</button>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default Bottom;