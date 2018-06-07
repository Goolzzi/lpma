import React from "react";
import PropTypes from "prop-types";
import FondryCard from "../components/FondryCard";
import BreadCrumb from "../../components/BreadCrumb";
import FeedbackForm from "../../components/FeedbackForm";
import "./styles.scss";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://lpma.com"
    : "https://qa.lpma.com";

const propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const FoundrySection = ({
  pathContext: {id, parentPath, breadCrumbs},
  data: {
    contentfulFoundrySection: {
      title,
      feedbackForm,
      contentPartOne,
      contentPartTwo,
      subjects,
    },
  },
  history: {location: {pathname}},
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
              "Content ID": id,
              url: `${BASE_URL}${pathname}`,
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
