import React from "react";
import PropTypes from "prop-types";
import FondryCard from "../components/FondryCard";
import BreadCrumb from "../components/BreadCrumb";
import _first from "lodash/first";
import "./styles.scss";

const propTypes = {
  data: PropTypes.object.isReqiered,
  pathContext: PropTypes.object.isReqiered,
};

const FoundrySection = ({
  pathContext,
  data: {
    contentfulFoundrySection: {title, contentPartOne, contentPartTwo, subjects},
  },
}) => {
  return (
    <section className="section template-page">
      <BreadCrumb />
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
          {subjects &&
            subjects.map(({id, title, slug, content}) => (
              <FondryCard
                key={id}
                title={_first(title.split(" "))}
                href={`${pathContext.subjectPath}${slug}`}
                content={content.childMarkdownRemark.excerpt}
              />
            ))}
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
