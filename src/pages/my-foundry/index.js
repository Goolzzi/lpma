import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import FeedbackForm from "../../components/FeedbackForm";
import {fisherYates} from "../../utils";
import LPMALink from "../../utils/LPMALink";

const MyFoundryPage = ({
  data: {
    contentfulMyFoundryHeading: {title, greeting, background, cards},
    allContentfulFoundryGuide: {edges},
  },
}) => (
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
                    __html: `${greeting.childMarkdownRemark.html} username`,
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
              <div key={id} className="column is-4">
                <LPMALink
                  to={`foundry/${slug}/${fisherYates(foundrystep, 1)[0].slug}`}>
                  <div className="column-item">
                    <h3>{title}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: excerpt.childMarkdownRemark.excerpt,
                      }}
                    />
                  </div>
                </LPMALink>
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

MyFoundryPage.propTypes = {
  data: PropTypes.object.isRquiered,
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
