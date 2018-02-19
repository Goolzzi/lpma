import React from "react";
import PropTypes from "prop-types";
import LPMALink from "../../utils/LPMALink";
import BreadCrumb from "../components/BreadCrumb";
import classNames from "classnames";
import "./styles.scss";

const StepLink = ({wrapperClassName, stepType, dispalyName, href}) => {
  return (
    <div className={wrapperClassName}>
      <div className="level-item">
        <LPMALink to={href}>
          <span>{stepType}</span>
          <br />
          <span>{dispalyName}</span>
        </LPMALink>
      </div>
    </div>
  );
};

StepLink.propTypes = {
  wrapperClassName: PropTypes.string.isRequired,
  stepType: PropTypes.oneOf(["Previous", "Next"]).isRequired,
  dispalyName: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const Step = props => {
  const {
    pathContext: {parentSlug, stepIndex},
    data: {contentfulFoundryGude: {steps}, contentfulFoundryStep},
  } = props;

  const basePathName = `foundry/${parentSlug}/`;

  return (
    <section className="section guides">
      <BreadCrumb />
      <div className="container guides-wrapper">
        <div className="columns">
          <div className="column is-3 steps-menu-wrapper">
            <h3>Steps:</h3>
            <ul className="steps-menu">
              {steps.map(({title, slug}) => (
                <li
                  className={classNames({
                    active: slug === contentfulFoundryStep.slug,
                  })}
                  key={slug}>
                  <LPMALink to={basePathName + slug}>
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
              {typeof steps[stepIndex - 1] !== "undefined" ? (
                <StepLink
                  wrapperClassName="level-left"
                  stepType="Previous"
                  href={basePathName + steps[stepIndex - 1].slug}
                  dispalyName={steps[stepIndex - 1].title}
                />
              ) : (
                <div className="level-left" />
              )}

              {typeof steps[stepIndex + 1] !== "undefined" ? (
                <StepLink
                  wrapperClassName="level-right"
                  stepType="Next"
                  href={basePathName + steps[stepIndex + 1].slug}
                  dispalyName={steps[stepIndex + 1].title}
                />
              ) : (
                <div>test test to subject</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Step.propTypes = {
  pathContext: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
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
