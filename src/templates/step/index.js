import React from "react";
import LPMALink from "../../utils/LPMALink";
import BreadCrumb from "../components/BreadCrumb";
import classNames from "classnames";
import "./styles.scss";

const Step = props => {
  const {
    pathContext: {parentSlug},
    data: {contentfulFoundryGude, contentfulFoundryStep},
  } = props;

  return (
    <section className="section guides">
      <BreadCrumb />
      <div className="container guides-wrapper">
        <div className="columns">
          <div className="column is-3 steps-menu-wrapper">
            <h3>Steps:</h3>
            <ul className="steps-menu">
              {contentfulFoundryGude.steps.map(({title, slug}) => (
                <li
                  className={classNames({
                    active: slug === contentfulFoundryStep.slug,
                  })}
                  key={slug}>
                  <LPMALink to={"foundry/" + parentSlug + "/" + slug}>
                    <span>{title}</span>
                  </LPMALink>
                </li>
              ))}
            </ul>
          </div>
          <div className="column is-9 guide-content">
            <h1>{contentfulFoundryStep.title}</h1>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{
                __html: contentfulFoundryStep.content.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </div>

      <div className="container steps-navigation">
        <div className="columns">
          <div className="column is-9 is-offset-3">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <LPMALink>
                    <span>Previous</span>
                    <br />
                    <span>Step name</span>
                  </LPMALink>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <LPMALink>
                    <span>Next</span>
                    <br />
                    <span>Step name</span>
                  </LPMALink>
                </div>
              </div>
            </div>
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
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
