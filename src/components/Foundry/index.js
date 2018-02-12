import React from "react";
import Link from "gatsby-link";
import {Icon} from "react-fa";
import EntypoThumbsUp from "react-entypo/lib/entypo/ThumbsUp";
import EntypoThumbsDown from "react-entypo/lib/entypo/ThumbsDown";
import "./styles.scss";

const Foundry = () => (
  <React.Fragment>
    <section className="section container foundry-heading">
      <div className="columns is-gapless">
        <div className="column is-12">
          <h4>LPMA Foundry</h4>
        </div>
      </div>
    </section>
    <section className="section foundry">
      <img
        src={require("../../assets/images/home-bg-v3.png")}
        alt="acquisition Jumbotron"
      />

      <section className="section cont">
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <div className="top-text">
                <p>foundry</p>
                <h2>Wellcome back, pat.</h2>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6">
              <div className="text">
                <h3>asdasd</h3>
                <p>asd sdf dfg df</p>
              </div>
            </div>
            <div className="column is-6">
              <div className="text">
                <h3>asdasd</h3>
                <p>
                  asd sdf dfg df asd sdf dfg df asd sdf dfg df asd sdf dfg dfasd
                  sdf dfg df asd sdf dfg df asd sdf dfg df asd sdf dfg df
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section className="section container foundry-columns">
      <div className="columns">
        <div className="column is-4 column-item">
          <Icon name="lightbulb-o" className="icon-style" />
          <h3>LPMA Foundry</h3>
          <p>
            From strategy and growth, to profitability and high performing
            teams, LPMA Foundry is a self-directed, online learning tool with
            guides, case studies and blogs across a broad range of topics.
          </p>
          <button className="btn secondary with-radius-5 smaller smaller-text">
            Login to Foundry
          </button>
          <button className="btn secondary with-radius-5 smaller smaller-text outlined transparent">
            Learn more
          </button>
        </div>
        <div className="column is-4 column-item">
          <Icon name="comments-o" className="icon-style" />
          <h3>Member Forums</h3>
          <p>
            Discuss topics relevant to business leadership using LPMA’s private,
            Apmasphere online forums for Agency principals.
          </p>
          <button className="btn secondary with-radius-5 smaller smaller-text">
            Login to Forums
          </button>
        </div>
        <div className="column is-4 column-item">
          <Icon name="list-ol" className="icon-style" />
          <h3>Procedures, Letters & Checklists</h3>
          <p>
            Enable your team to deliver high quality and consistent customer
            communications using LPMA’s huge database of letters and forms, all
            inside Apmasphere.
          </p>
          <button className="btn secondary with-radius-5 smaller smaller-text">
            Login to Database
          </button>
        </div>
      </div>

      <div className="columns">
        <div className="column is-12">
          <div className="thinking-of-joining">
            <h3>Thinking of Joining LPMA?</h3>
            <p>
              LPMA membership connects you to a network of real estate
              professionals and influential thought leaders and access to
              industry leading events, resources and people.
            </p>
            <button className="btn secondary with-radius-5 smaller smaller-text">
              Join LPMA
            </button>
            <button className="btn secondary with-radius-5 smaller smaller-text outlined transparent">
              Learn more
            </button>
          </div>
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
    </section>
  </React.Fragment>
);

export default Foundry;
