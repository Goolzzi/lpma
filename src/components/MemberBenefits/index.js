import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

const MemberBenefits = ({copyrightHTML}) => (
  <section className="section member-benefits">
    <h3>MEMBER BENEFITS</h3>

    <div className="columns is-multiline">
      <div className="column is-6 is-12-mobile benefit-item">
        <img src={require("./../../assets/images/check.svg")} />
        <div className="cont">
          <h4 className="text-title">Events</h4>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
      <div className="column is-6 is-12-mobile benefit-item">
        <img src={require("./../../assets/images/check.svg")} />
        <div className="cont">
          <h4 className="text-title">Events</h4>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
      <div className="column is-6 is-12-mobile benefit-item">
        <img src={require("./../../assets/images/check.svg")} />
        <div className="cont">
          <h4 className="text-title">Events</h4>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
      <div className="column is-6 is-12-mobile benefit-item">
        <img src={require("./../../assets/images/check.svg")} />
        <div className="cont">
          <h4 className="text-title">Events</h4>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MemberBenefits;
