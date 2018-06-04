import React from "react";
import Link from "gatsby-link";
import BreadCrumb from "../../components/BreadCrumb";
import "./styles.scss";

const LeaderBoard = () => (
  <section className="section level-cards liderboard">
    <BreadCrumb parentPath="/foundry" />
    <div className="container">
      <div className="columns titles-wrapper">
        <div className="column">
          <h2 className="title is-4">Foundry - Title</h2>
        </div>
        <div className="column">
          <Link to="/contact" className="is-size-5">
            Feedback
          </Link>
        </div>
      </div>

      <p>List goes here</p>

      <hr />

      <div className="list-heading">
        <img src="data:image/png;base64,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" />
        <h5 className="title is-5">asd</h5>
        <span>asdasdasdasd</span>
      </div>

      <div className="liderboard-gird">
        <div className="columns">
          <div className="column is-1">
            <span className="liderboard-place">1st</span>
          </div>
          <div className="column is-3">
            <span className="liderboard-agency">Agency 1</span>
          </div>
          <div className="column is-2">
            <span>Suburb</span>
          </div>
          <div className="column is-2">
            <span className="liderboard-percents">15%</span>
          </div>
          <div className="column is-4">
            <span>+50 properties</span>
          </div>
        </div>
        <div className="columns">
          <div className="column is-1">
            <span className="liderboard-place">1st</span>
          </div>
          <div className="column is-3">
            <span className="liderboard-agency">Agency 1</span>
          </div>
          <div className="column is-2">
            <span>Suburb</span>
          </div>
          <div className="column is-2">
            <span className="liderboard-percents">15%</span>
          </div>
          <div className="column is-4">
            <span>+50 properties</span>
          </div>
        </div>
        <div className="columns">
          <div className="column is-1">
            <span className="liderboard-place">1st</span>
          </div>
          <div className="column is-3">
            <span className="liderboard-agency">Agency 1</span>
          </div>
          <div className="column is-2">
            <span>Suburb</span>
          </div>
          <div className="column is-2">
            <span className="liderboard-percents">15%</span>
          </div>
          <div className="column is-4">
            <span>+50 properties</span>
          </div>
        </div>
        <div className="columns">
          <div className="column is-1">
            <span className="liderboard-place">1st</span>
          </div>
          <div className="column is-3">
            <span className="liderboard-agency">Agency 1</span>
          </div>
          <div className="column is-2">
            <span>Suburb</span>
          </div>
          <div className="column is-2">
            <span className="liderboard-percents">15%</span>
          </div>
          <div className="column is-4">
            <span>+50 properties</span>
          </div>
        </div>
        <div className="columns">
          <div className="column is-1">
            <span className="liderboard-place">1st</span>
          </div>
          <div className="column is-3">
            <span className="liderboard-agency">Agency 1</span>
          </div>
          <div className="column is-2">
            <span>Suburb</span>
          </div>
          <div className="column is-2">
            <span className="liderboard-percents">15%</span>
          </div>
          <div className="column is-4">
            <span>+50 properties</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LeaderBoard;
