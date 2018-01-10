import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

const Audience = ({copyrightHTML}) => (
  <section className="hero audience">
	<img src={require("./../../assets/images/audience.png")} />
  </section>
);

export default Audience;
