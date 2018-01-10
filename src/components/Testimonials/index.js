import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

const Testimonials = ({copyrightHTML}) => (
  <section className="section testimonials">
    <h3>TESTIMONIALS</h3>

    <div className="columns is-multiline">
      <div className="column is-6 is-12-mobile testimonial-item">
        <div className="text-cont">
          <p className="text-p">
            “Change effects every industry. You need to embrace it, and use it to your advantage. That’s what the LPMA helps its members to do.”
          </p>
          <p className="name-p">
            – Ewan Morton
          </p>
        </div>
        <div className="img-cont">
          <img src={require("./../../assets/images/testimonial1.png")} />
        </div>
      </div>
      <div className="column is-6 is-12-mobile testimonial-item">
        <div className="text-cont">
          <p className="text-p">
            “Leaders are those who can think creatively, decisively and quickly put their vision into action. This is what the LPMA is all about.”
          </p>
          <p className="name-p">
            – Andrew Coronis
          </p>
        </div>
        <div className="img-cont">
          <img src={require("./../../assets/images/testimonial2.png")} />
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;