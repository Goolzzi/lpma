import React from "react";
import "./styles.scss";

//className="active"

const Step = ({data: {contentfulFoundryGude, contentfulFoundryStep}}) => {
  return (
    <section className="section guides">
      <div className="container">
        <div className="columns">
          <div className="column is-3 steps-menu-wrapper">
            <h3>Steps:</h3>
            <ul className="steps-menu">
              {contentfulFoundryGude.steps.map(({title, slug}) => (
                <li key={slug}>
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="column is-9 guide-content">
            <h1>Asd dfg fgh ghj</h1>
            <div className="markdown">Markdown here</div>
          </div>
        </div>
      </div>
    </section>
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
