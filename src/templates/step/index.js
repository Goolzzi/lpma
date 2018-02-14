import React from "react";
import "./styles.scss";

const Step = ({data: {contentfulFoundryGude, contentfulFoundryStep}}) => {
  return (
    <div>
      <code>{JSON.stringify(contentfulFoundryStep)}</code>
      <hr />
      <code>{JSON.stringify(contentfulFoundryGude)}</code>
    </div>
  );
};

export default Step;

export const pageQuery = graphql`
  query StepsPageQuery($slug: String, $parentSlug: String) {
    contentfulFoundryGude(slug: {eq: $parentSlug}) {
      steps {
        title
        slug
      }
    }
    contentfulFoundryStep(slug: {eq: $slug}) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
