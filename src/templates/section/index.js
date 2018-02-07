import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  data: PropTypes.object.isReqiered,
};

const FoundrySection = ({
  data: {contentfulFoundrySection: {title, contentPartOne, contentPartTwo}},
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
          <div className="column is-6">
            <a className="subject-card-item">
              <h3>asd</h3>
              <p className="truncate-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </a>
          </div>
          <div className="column is-6">
            <a className="subject-card-item">
              <h3>asd</h3>
              <p className="truncate-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </a>
          </div>
          <div className="column is-6">
            <a className="subject-card-item">
              <h3>asd</h3>
              <p className="truncate-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </a>
          </div>
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
                տեռ
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
    }
  }
`;
