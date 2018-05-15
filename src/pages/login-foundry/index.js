import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Auth from "../../Auth";
import Link from "gatsby-link";
import {EntypoTools, EntypoUser} from "react-entypo";
import "./styles.scss";

const FoundryLogInPage = props => {
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
    <Auth
      render={auth => {
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
                    <button
                      onClick={() => {
                        auth.login();
                      }}
                      className="btn secondary with-radius-5 smaller smaller-text outlined transparent">
                      {login.name}
                    </button>
                    <Link
                      to={joinLink.to}
                      className="btn secondary with-radius-5 smaller smaller-text outlined transparent">
                      {joinLink.name}
                    </Link>
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
                            __html:
                              instructionsContent.childMarkdownRemark.html,
                          }}
                        />
                      </div>
                      <div className="level-item has-text-centered is-block right-item">
                        <Img sizes={instructionsImage.sizes} />
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
                  <Link
                    to={joinLink.to}
                    className="btn secondary with-radius-5 smaller smaller-text">
                    {joinLink.name}
                  </Link>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }}
    />
  );
};

FoundryLogInPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FoundryLogInPage;

export const pageQuery = graphql`
  query foundryPageQuery {
    contentfulFoundryHeading {
      title
      login {
        to
        name
      }
      joinLink {
        to
        name
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
        sizes(quality: 100, maxWidth: 600) {
          ...GatsbyContentfulSizes
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
