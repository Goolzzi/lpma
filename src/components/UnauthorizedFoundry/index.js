import React from "react";
import EntypoTools from "react-entypo/lib/entypo/Tools";
import EntypoUser from "react-entypo/lib/entypo/User";
import EntypoThumbsUp from "react-entypo/lib/entypo/ThumbsUp";
import EntypoThumbsDown from "react-entypo/lib/entypo/ThumbsDown";
import Link from "gatsby-link";
import Breadcrumb from "../../templates/components/breadcrumb"; // Imported for styles yet
import "./styles.scss";

const UnauthorizedFoundry = () => (
  <React.Fragment>
    <div className="container breadcrumb-wrapper">
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li className="is-active">
            <a href="#" aria-current="page">
              Foundry
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <section className="section unauthorized-foundry-heading">
      <div className="container">
        <div className="columns">
          <div className="column is-7">
            <h1>Foundry</h1>

            <p>
              LPMA Foundry is a self-directed, online learning tool with guides,
              case studies and blogs covering a broad range of topics from
              strategy and growth, to profitability and high performing teams.
            </p>

            <button className="btn secondary with-radius-5 smaller smaller-text">
              Login
            </button>
            <button className="btn secondary with-radius-5 smaller smaller-text outlined transparent">
              Signup to LPMA
            </button>
          </div>
        </div>
      </div>
    </section>

    <div className="container unauthorized-foundry-content">
      <div className="columns">
        <div className="column is-12">
          <div className="home-feature">
            <div className="level">
              <div className="level-item has-text-centered is-block left-item">
                <h3>How does Foundry work?</h3>
                <p>
                  LPMA Foundry is divided into two key sections; Building Your
                  Business and Building your career.
                </p>
              </div>
              <div className="level-item has-text-centered is-block right-item">
                <img src={require("../../assets/images/foundry.png")} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns cont-columns">
        <div className="column is-6 cont-columns-item">
          <EntypoTools className="icon-style" />
          <h3>Building your Business</h3>
          <p>
            It’s clear that effective strategy is at the heart of any successful
            business. Building your Business is a strategic resource drawn on
            years of research and case studies.
          </p>
        </div>
        <div className="column is-6 cont-columns-item">
          <EntypoUser className="icon-style" />
          <h3>Building your Career</h3>
          <p>
            Every person has a set of ambitions for their own career. Building
            your Career offers step-by-step guides to help you in every stage of
            your Property Management career.
          </p>
        </div>
      </div>

      <div className="columns cont-columns">
        <div className="column is-12 cont-columns-item">
          <h3>
            Join LPMA today to unlock access to this comprehensive resource.
          </h3>
          <button className="btn secondary with-radius-5 smaller-text">
            Join LPMA
          </button>
        </div>
      </div>

      <div className="columns helpful is-gapless">
        <div className="column is-9">
          <span>Was this Helpful ?</span>
        </div>
        <div className="column">
          <button>
            <EntypoThumbsUp className="icon-style thumbs-up" />
            <span>Yes</span>
          </button>
        </div>
        <div className="column">
          <button>
            <EntypoThumbsDown className="icon-style thumbs-down" />
            <span>No</span>
          </button>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default UnauthorizedFoundry;
