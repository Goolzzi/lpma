import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import IRISAuth from "../../Auth/IRISAuth";
import {fisherYates} from "../../utils";
import YouTube from "react-youtube";
import "./styles.scss";

const videoOptions = {};
const fbLikeIcon = require("../../assets/images/icons/fblike.png");

class MyFoundryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  componentDidMount() {
    const {isAuthenticated, getUserData} = this.auth;
    if (isAuthenticated()) {
      const user = getUserData();
      this.setState({username: user.username});
    }
  }

  render() {
    const {
      data: {
        contentfulMyFoundryHeading: {greeting, background},
        allContentfulFoundryGuide: {edges},
        allContentfulFoundrySection,
        contentfulFoundryVideo: {
          title: videoTitle,
          description: {childMarkdownRemark: {html: videoDescription}},
          signupLink,
          videoLink,
        },
      },
    } = this.props;
    return (
      <IRISAuth
        render={auth => {
          this.auth = auth;
          return (
            <div>
              <section className="section foundry">
                <div className="image-wrapper">
                  <img
                    src={background.resolutions.src}
                    srcSet={background.resolutions.srcSet}
                    alt="my foundry heading"
                  />
                </div>
                <section className="section cont">
                  <div className="container">
                    <div className="columns">
                      <div className="column is-4">
                        <div className="top-text">
                          <h2
                            dangerouslySetInnerHTML={{
                              __html: `${greeting.childMarkdownRemark.html} ${
                                this.state.username
                              }`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="columns is-multiline">
                      {allContentfulFoundrySection.edges.map(
                        ({node: {title, slug, excerpt}}) => (
                          <div key={slug} className="column is-6">
                            <Link to={`/foundry/${slug}`}>
                              <div className="text">
                                <h3>{title}</h3>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: excerpt.childMarkdownRemark.html,
                                  }}
                                />
                              </div>
                            </Link>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </section>
              </section>
              <section className="section container foundry-columns">
                <div className="columns">
                  {fisherYates(edges, 3).map(
                    ({node: {id, title, slug, excerpt, foundrystep}}) => {
                      return (
                        <div key={id + slug} className="column is-4">
                          <Link
                            to={`/foundry/${slug}/${
                              fisherYates(foundrystep, 1)[0].slug
                            }`}>
                            <div className="column-item">
                              <h3>{title}</h3>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: excerpt.childMarkdownRemark.excerpt,
                                }}
                              />
                            </div>
                          </Link>
                        </div>
                      );
                    },
                  )}
                </div>
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
                    <div className="has-text-centered-mobile">
                      <Link
                        to={signupLink}
                        className="btn secondary with-radius-half-rem half-width smaller threequarterwidth">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                  <div className="column is-7 is-offset-1">
                    <YouTube videoId={videoLink} opts={videoOptions} />
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
        resolutions(quality: 100, width: 1100) {
          src
          srcSet
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
    }
  }
`;
