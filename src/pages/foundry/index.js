import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";
import FeedbackForm from "../../components/FeedbackForm";
import {fisherYates} from "../../utils";
import auth from "../../Auth";

class MyFoundryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: null,
    };
  }

  componentDidMount() {
    if (auth.isAuthenticated()) {
      auth.getProfile((error, profile) => {
        if (error) {
          console.log("User Profile Error! ", error); //eslint-disable-line
        } else {
          this.setState({userProfile: profile});
        }
      });
    }
  }

  getNickName = () => {
    const {userProfile} = this.state;
    if (userProfile && userProfile.nickname) {
      return userProfile.nickname;
    }
    return "";
  };

  render() {
    const {
      data: {
        contentfulMyFoundryHeading: {title, greeting, background, cards},
        allContentfulFoundryGuide: {edges},
      },
    } = this.props;
    return (
      <div>
        <section className="section container foundry-heading" />
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
                    <p>{title}</p>
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: `${
                          greeting.childMarkdownRemark.html
                        } ${this.getNickName()}`,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="columns">
                {cards.map(({id, title, content}) => (
                  <div key={id} className="column is-6">
                    <div className="text">
                      <h3>{title}</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: content.childMarkdownRemark.html,
                        }}
                      />
                    </div>
                  </div>
                ))}
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
        resolutions(quality: 100) {
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
  }
`;
