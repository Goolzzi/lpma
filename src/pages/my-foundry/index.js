import React from "react";
import {Icon} from "react-fa";
import "./styles.scss";
import FeedbackForm from "../../components/FeedbackForm";

const MyFoundryPage = () => (
  <div>
    <section className="section container foundry-heading" />
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
        <div className="column is-4">
          <div className="column-item">
            <h3>Title asd sdf</h3>
            <p>
              Paragraph sdkjf skd fksdnf sjdfj sjd fjs dfsdf s djbfsbd fbs
              dfsdfjsdfbsdb sdbf sdjff jj ssdf sj jj sjdf js djjs fjs dsf s sj
              df
            </p>
          </div>
        </div>
        <div className="column is-4">
          <div className="column-item">
            <h3>Title asd sdf</h3>
            <p>
              Paragraph sdkjf skd fksdnf sjdfj sjd fjs dfsdf s djbfsbd fbs
              dfsdfjsdfbsdb sdbf sdjff jj ssdf sj jj sjdf js djjs fjs dsf s sj
              df
            </p>
          </div>
        </div>
        <div className="column is-4">
          <div className="column-item">
            <h3>Title asd sdf</h3>
            <p>
              Paragraph sdkjf skd fksdnf sjdfj sjd fjs dfsdf s djbfsbd fbs
              dfsdfjsdfbsdb sdbf sdjff jj ssdf sj jj sjdf js djjs fjs dsf s sj
              df
            </p>
          </div>
        </div>
      </div>

      <FeedbackForm
        feedbackParams={{
          type: "fondry",
          title: "My Foundry",
          slug: "foundry",
        }}
      />
    </section>
  </div>
);

export default MyFoundryPage;
