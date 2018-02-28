import React from "react";
import PropTypes from "prop-types";
import LPMALink from "../../utils/LPMALink";
import {EntypoTools, EntypoUser} from "react-entypo";
import FeedbackForm from "../../components/FeedbackForm";
import auth from "../../Auth/Auth";
import "./styles.scss";

const FoundryPage = props => {
  const {
    data: {
      contentfulFoundryHeading: {title, login, joinLink, content},
      contentfulFoundryPageConetnt: {
        instructionsTitle,
        instructionsContent,
        instructionsImage,
        cards,
        messageToJoin,
      },
    },
  } = props;

  return (
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
              {/* <LPMALink
                to={login.to}
                force={login.force}
                cssClass="btn secondary with-radius-5 smaller smaller-text">
                {login.name}
              </LPMALink> */}

              <a style={{cursor: "pointer"}} onClick={props.auth.login}>
                login
              </a>

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
                  <h3>{instructionsTitle}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: instructionsContent.childMarkdownRemark.html,
                    }}
                  />
                </div>
                <div className="level-item has-text-centered is-block right-item">
                  <img
                    src={instructionsImage.resolutions.src}
                    srcSet={instructionsImage.resolutions.srcSet}
                    alt="instructionsImage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="columns cont-columns">
          <div className="column is-6 cont-columns-item">
            <EntypoTools className="icon-style" />
            <h3>{cards[0].title}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: cards[0].content.childMarkdownRemark.html,
              }}
            />
          </div>
          <div className="column is-6 cont-columns-item">
            <EntypoUser className="icon-style" />
            <h3>{cards[1].title}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: cards[1].content.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>

        <div className="columns cont-columns">
          <div className="column is-12 cont-columns-item">
            <h3>{messageToJoin}</h3>
            <LPMALink
              to={joinLink.to}
              force={joinLink.force}
              cssClass="btn secondary with-radius-5 smaller smaller-text">
              {joinLink.name}
            </LPMALink>
          </div>
        </div>
        <FeedbackForm
          feedbackParams={{
            type: "fondry",
            title: "Foundry",
            slug: "fondry",
          }}
        />
      </div>
    </React.Fragment>
  );
};

FoundryPage.propTypes = {
  data: PropTypes.object.isRequered,
};

const FoundryPagePageWithAuth = props => <FoundryPage auth={auth} {...props} />;

export default FoundryPagePageWithAuth;

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
    contentfulFoundryPageConetnt {
      instructionsTitle
      instructionsContent {
        childMarkdownRemark {
          html
        }
      }
      instructionsImage {
        resolutions(quality: 100) {
          src
          srcSet
        }
      }
      messageToJoin
      cards {
        id
        title
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
