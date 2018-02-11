import React from "react";
import "./styles.scss";
import LPMALink from "../../utils/LPMALink";

const Guides = () => (
  <section className="section guides">
    <div className="container">
      <div className="columns">
        <div className="column is-3 steps-menu-wrapper">
          <h3>Steps:</h3>
          <ul className="steps-menu">
            <li>
              <span>asd</span>
            </li>
            <li className="active">
              <span>sdf</span>
            </li>
            <li>
              <span>dfg</span>
            </li>
          </ul>
        </div>
        <div className="column is-9 guide-content">
          <h1>Asd dfg fgh ghj</h1>
          <div className="markdown">Markdown here</div>
        </div>
      </div>
    </div>
  </section>
);

export default Guides;
