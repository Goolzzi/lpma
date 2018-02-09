import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

const Foundry = () => (
  <React.Fragment>
    <section className="section container foundry-heading">
      <div className="columns is-gapless">
        <div className="column is-12">
          <h4>
            LPMA Foundry
          </h4>
        </div>
      </div>
    </section>
    <section className="section foundry">
      <img src={require('../../assets/images/home-bg-v3.png')} alt="acquisition Jumbotron" />

      <section className="section cont">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
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
                <p>asd sdf dfg df asd sdf dfg df asd sdf dfg df asd sdf dfg dfasd sdf dfg df asd sdf dfg df asd sdf dfg df asd sdf dfg df</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section className="section container foundry-columns">
      <div className="columns">
        <div className="column is-12">
          <h2>Pick up where you left off:</h2>
        </div>
      </div>
      <div className="columns">
        <div className="column is-4">
          <div className="column-item">
            <h3>asdasd</h3>
            <p>asd sdf dfg df askd bas bsdjfsjd fjsdjbf sjd fsdf jsdf sjbdf</p>
          </div>
        </div>
        <div className="column is-4">
          <div className="column-item">
            <h3>asdasd</h3>
            <p>asd sdf dfg df askd bas bsdjfsjd fjsdjbf sjd fsdf jsdf sjbdf</p>
          </div>
        </div>
        <div className="column is-4">
          <div className="column-item">
            <h3>asdasd</h3>
            <p>asd sdf dfg df askd bas bsdjfsjd fjsdjbf sjd fsdf jsdf sjbdf</p>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Foundry;
