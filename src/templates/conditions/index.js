import React from "react";
import PropTypes from "prop-types";
import FeedbackForm from "../../components/FeedbackForm";
import "./styles.scss";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const Conditions = ({data: {contentfulConditions: {title, content, slug}}}) => (
  <React.Fragment>
    <section className="section conditions">
      <div className="container">
        <div className="columns">
          <div className="column is-10">
            <div>
              <h2 className="title top-title is-2">{title}</h2>
            </div>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <FeedbackForm
              feedbackParams={{
                type: "conditions",
                title: title,
                slug: slug,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

Conditions.propTypes = propTypes;

export default Conditions;

export const pageQuery = graphql`
  query ConditionsQuery($slug: String!) {
    contentfulConditions(slug: {eq: $slug}) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
