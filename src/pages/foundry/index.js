import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Img from "gatsby-image";
import JWTDecode from "jwt-decode";
import YouTube from "react-youtube";
import Auth from "../../Auth";
import "./styles.scss";

const videoOptions = {};
const fbLikeIcon = require("../../assets/images/icons/fblike.png");

class MyFoundryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      tokenData: {},
    };
  }

  componentDidMount() {
    const {isAuthenticated, getUserData, getAccessToken} = this.auth;
    if (isAuthenticated()) {
      const user = getUserData();
      const tokenData = JWTDecode(getAccessToken());
      this.setState({
        username: user.nickname ? user.nickname : user.username,
        tokenData,
      });
    }
  }

  render() {
    const {
      data: {
        contentfulMyFoundryHeading: {greeting, background},
        allContentfulFoundrySection,
        contentfulFoundryVideo: {
          title: videoTitle,
          description: {childMarkdownRemark: {html: videoDescription}},
          archiveLink,
          archiveDescription: {childMarkdownRemark: {html: archiveDescription}},
          signupLink,
          videoLink,
        },
      },
    } = this.props;
    const newButton = {
      node: {
        title: "Growth Model",
        slug: "growth-model",
        link: "https://gm.lpma.com",
        scope: "lpma_growth_planning_au",
        excerpt: {
          childMarkdownRemark: {
            html:
              "<p>Understand your growth potential & develop your growth plan</p>",
          },
        },
      },
    };

    return (
      <Auth
        render={auth => {
          this.auth = auth;
          return (
            <div>
              <section className="section foundry">
                <div className="image-wrapper">
                  <Img sizes={background.sizes} />
                </div>
                <section className="section cont">
                  <div className="container">
                    <div className="columns">
                      <div className="column is-12">
                        <div className="top-text">
                          <h2
                            dangerouslySetInnerHTML={{
                              __html: `${
                                greeting.childMarkdownRemark.html
                              } <p class='name'>${this.state.username}</p>`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="columns is-multiline">
                      {[...allContentfulFoundrySection.edges, newButton].map(
                        ({node: {title, slug, link, scope, excerpt}}) => {
                          if (
                            scope &&
                            (!this.state.tokenData ||
                              !new RegExp(scope).test(
                                this.state.tokenData.scope,
                              ))
                          ) {
                            return null;
                          }
                          return (
                            <div key={slug} className="column is-6">
                              {link ? (
                                <a href={link}>
                                  <div className="text">
                                    <h3>{title}</h3>
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          excerpt.childMarkdownRemark.html,
                                      }}
                                    />
                                  </div>
                                </a>
                              ) : (
                                <Link to={`/foundry/${slug}`}>
                                  <div className="text">
                                    <h3>{title}</h3>
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          excerpt.childMarkdownRemark.html,
                                      }}
                                    />
                                  </div>
                                </Link>
                              )}
                            </div>
                          );
                        },
                      )}
                    </div>
                  </div>
                </section>
              </section>
              <section className="section container foundry-video">
                <div className="columns">
                  <div className="column is-4">
                    <h3 className="title is-3">{videoTitle}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: videoDescription,
                      }}
                    />
                    <div className="has-text-centered-mobile signup">
                      <a
                        href={signupLink}
                        className="btn secondary with-radius-half-rem half-width smaller threequarterwidth">
                        Sign Up
                      </a>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: archiveDescription,
                      }}
                    />
                    <a href={archiveLink}>View our archive.</a>
                  </div>
                  <div className="column is-7 is-offset-1">
                    <div className="video-cont">
                      <YouTube videoId={videoLink} opts={videoOptions} />
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-4" />
                  <div className="column is-4 has-text-centered feedback">
                    <Link to="/contact" className="contact">
                      Looking for something? Get in touch.
                    </Link>
                  </div>
                  <div className="column is-4 has-text-right fb-like">
                    <a href="https://www.facebook.com/LPMAssoc/">
                      <img src={fbLikeIcon} alt="" />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          );
        }}
      />
    );
  }
}

MyFoundryPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MyFoundryPage;

export const pageQuery = graphql`
  query MyFoundryPageQuery {
    contentfulMyFoundryHeading {
      title
      greeting {
        id
        childMarkdownRemark {
          html
        }
      }
      background {
        id
        sizes(quality: 100, maxWidth: 900) {
          ...GatsbyContentfulSizes
        }
      }
      cards {
        id
        title
        content {
          id
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulFoundryGuide(filter: {type: {eq: "guide"}}) {
      edges {
        node {
          title
          slug
          foundrystep {
            slug
          }
          excerpt {
            id
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
    allContentfulFoundrySection(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          title
          slug
          excerpt {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    contentfulFoundryVideo {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      signupLink
      videoLink
      archiveLink
      archiveDescription {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
