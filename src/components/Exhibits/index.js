import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

const Exhibits = ({copyrightHTML}) => (
  <section className="hero exhibits">
    <div className="columns is-gapless">
      <div className="column is-4 is-12-mobile exhibit-item">
        <div className="image is-16by9">
          <img src={require("./../../assets/images/Exhibits (8).png")} />
        </div>
        <p>
          “The industry is changing so quickly, and it’s great to be part of a group of people who can support my career growth, and who’s careers I can also support.”
          <br />
          — Judy Smith, Ray White Collingwood
        </p>
      </div>
      <div className="column is-4 is-12-mobile exhibit-item">
        <div className="image is-16by9">
          <img src={require("./../../assets/images/Exhibits (15).png")} />
        </div>
        <p>
          “I was introduced to the LPMA by my colleague. She was raving about the sense of community and the things she has learned.”
          <br />
          – John Brown, Ray White Kew
        </p>
      </div>
      <div className="column is-4 is-12-mobile exhibit-item">
        <div className="image is-16by9">
          <img src={require("./../../assets/images/Exhibits (48).png")} />
        </div>
        <p>
          “I am ambitious and committed to my profession. I also love innovation. The LPMA supports and encourages this. I know it’s got my back.”
          <br />
          — Michelle Tonsley, Jellis Craig Fitzroy
        </p>
      </div>
    </div>
  </section>
);

export default Exhibits;