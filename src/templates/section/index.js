import React from "react";
import PropTypes from "prop-types";
// import BreadCrumb from "../components/BreadCrumb";
import FondryCard from "../components/FondryCard";
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
      {/* <BreadCrumb /> */}
      <div className="container breadcrumb-wrapper">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Bulma Test</a>
            </li>
            <li>
              <a href="#">Documentation test</a>
            </li>
            <li>
              <a href="#">Components test</a>
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
          {subjects &&
            subjects.map(({id, title, slug, content}) => (
              <FondryCard
                key={id}
                title={title}
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
