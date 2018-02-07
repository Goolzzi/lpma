import React from "react";
import PropTypes from "prop-types";
import FondryCard from "../components/FondryCard";
import _first from "lodash/first";
import "./styles.scss";

const propTypes = {
  data: PropTypes.object.isReqiered,
};

const FoundrySection = ({
  data: {
    contentfulFoundrySection: {title, contentPartOne, contentPartTwo, subjects},
  },
}) => {
  return (
    <section className="section template-page">
      <div className="container breadcrumb-wrapper">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Bulma</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Components</a>
            </li>
            <li className="is-active">
              <a href="#" aria-current="page">
                Breadcrumb
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container wrapper-cont">
        <div className="columns">
          <div className="column">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="markdown">
          <div className="columns">
            <div
              className="column is-6"
              dangerouslySetInnerHTML={{
                __html: contentPartOne.childMarkdownRemark.html,
              }}
            />
            <div
              className="column is-6"
              dangerouslySetInnerHTML={{
                __html: contentPartTwo.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>

        <div className="columns is-multiline">
          {subjects.map(({id, title, slug, content}) => (
            <FondryCard
              key={id}
              title={_first(title.split(" "))}
              href={`/subjects/${slug}`}
              content={content.childMarkdownRemark.excerpt}
            />
          ))}
        </div>
        <div className="tabs is-boxed">
          <ul>
            <li>
              <a>
                <span>Pictures</span>
              </a>
            </li>
            <li className="is-active">
              <a>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

FoundrySection.propTypes = propTypes;

export default FoundrySection;

export const pageQuery = graphql`
  query FoundrySectionPageQuery($slug: String) {
    contentfulFoundrySection(slug: {eq: $slug}) {
      title
      slug
      contentPartOne {
        childMarkdownRemark {
          html
        }
      }
      contentPartTwo {
        childMarkdownRemark {
          html
        }
      }
      subjects {
        id
        title
        slug
        content {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`;
