import React from "react";
import PropTypes from "prop-types";
import FondryCard from "../components/FondryCard";
import BreadCrumb from "../../components/BreadCrumb";
import FeedbackForm from "../../components/FeedbackForm";
import "./styles.scss";

const propTypes = {
  data: PropTypes.object.isReqiered,
  pathContext: PropTypes.object.isReqiered,
};

const FoundrySection = ({
  pathContext: {parentPath, breadCrumbs},
  data: {
    contentfulFoundrySection: {
      title,
      slug,
      feedbackForm,
      contentPartOne,
      contentPartTwo,
      subjects,
    },
  },
}) => {
  return (
    <section className="section template-page">
      <BreadCrumb parentPath={parentPath} crumbs={breadCrumbs} />
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
                title={title}
                href={`${parentPath}${slug}`}
                content={content.childMarkdownRemark.excerpt}
              />
            ))}
        </div>
      </div>
      <div className="container">
        {feedbackForm !== false && (
          <FeedbackForm
            feedbackParams={{
              type: "section",
              title,
              slug,
            }}
          />
        )}
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
      feedbackForm
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
