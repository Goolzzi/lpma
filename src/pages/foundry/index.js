import React from "react";
import PropTypes from "prop-types";
import LPMALink from "../../utils/LPMALink";
import {EntypoTools, EntypoUser} from "react-entypo";
import EntypoThumbsUp from "react-entypo/lib/entypo/ThumbsUp";
import EntypoThumbsDown from "react-entypo/lib/entypo/ThumbsDown";
import "./styles.scss";

const FoundryPage = ({
  data: {contentfulFoundryHeading: {title, login, joinLink, content}},
}) => (
  <React.Fragment>
    <section className="section unauthorized-foundry-heading">
      <div className="container">
        <div className="columns">
          <div className="column is-7">
            <h1>{title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />
            <LPMALink
              to={login.to}
              force={login.force}
              cssClass="btn secondary with-radius-5 smaller smaller-text">
              {login.name}
            </LPMALink>
            <LPMALink
              to={joinLink.to}
              force={joinLink.force}
              cssClass="btn secondary with-radius-5 smaller smaller-text outlined transparent">
              {joinLink.name}
            </LPMALink>
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
          <LPMALink
            to={"login.to"}
            force={true}
            cssClass="btn secondary with-radius-5 smaller smaller-text">
            {"Join LPMA"}
          </LPMALink>
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

FoundryPage.propTypes = {
  data: PropTypes.object.isRequered,
};

export default FoundryPage;

export const pageQuery = graphql`
  query foundryPageQuery {
    contentfulFoundryHeading {
      title
      login {
        to
        name
        force
      }
      joinLink {
        to
        name
        force
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
