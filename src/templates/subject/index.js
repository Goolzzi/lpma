import React from "react";
import PropTypes from "prop-types";
import FondryCard from "../components/FondryCard";
import BreadCrumb from "../components/BreadCrumb";
import _first from "lodash/first";

const propTypes = {
  data: PropTypes.object.isReqiered,
};

const FoundrySubject = ({
  data: {contentfulFoundrySubject: {title, content}},
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

        <div
          className="markdown"
          dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}
        />

        <div className="custom-tabs">
          <ul>
            <li>
              <span>Test Pictures</span>
            </li>
            <li className="active">
              <span>Music</span>
            </li>
            <li>
              <span>Videos</span>
            </li>
            <li>
              <span>Documents</span>
            </li>
          </ul>
        </div>

        <div className="columns is-multiline">
          <div className="column is-6">
            <a className="subject-card-item">
              <h3>asd</h3>
              <p>
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
              <p>
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
              <p>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

FoundrySubject.propTypes = propTypes;

export default FoundrySubject;

export const pageQuery = graphql`
  query FoundrySubjectPageQuery($slug: String) {
    contentfulFoundrySubject(slug: {eq: $slug}) {
      title
      slug
      id
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
