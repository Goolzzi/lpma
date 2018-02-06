import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.object.isReqiered,
};

const FoundrySection = ({
  data: {
    contentfulFoundrySection: {title, slug, contentPartOne, contentPartTwo},
  },
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: contentPartOne.childMarkdownRemark.html,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: contentPartTwo.childMarkdownRemark.html,
        }}
      />
    </div>
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
