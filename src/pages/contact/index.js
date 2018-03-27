/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import FeedbackForm from "../../components/FeedbackForm";

const ContactPage = ({data: {contentfulContactLpma}}) => (
  <React.Fragment>
    <section className="section contact-cont">
      <div className="container">
        <div className="columns">
          <div className="column is-10">
            <div>
              <h1 className="title top-title is-1 has-text-white">
                {contentfulContactLpma.title}
              </h1>
            </div>
            <div
              className="has-text-white"
              dangerouslySetInnerHTML={{
                __html:
                  contentfulContactLpma.description.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>

        <div className="columns">
          <div className="column is-4">
            <form>
              <div className="field">
                <label className="label has-text-white has-text-weight-normal">
                  Your Name (required)
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white has-text-weight-normal">
                  Your Email (required)
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Work@emailaddress.com"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white has-text-weight-normal">
                  Your Work Number (required)
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="0000-000-000"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white has-text-weight-normal">
                  Your Company (required)
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Ultimate Property Management"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white has-text-weight-normal">
                  Subject
                </label>
                <div className="control">
                  <input className="input" type="text" placeholder="Hey LPMA" />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white has-text-weight-normal">
                  Your Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="I have a question"
                  />
                </div>
              </div>

              <div className="has-text-centered-mobile">
                <button className="btn secondary with-radius-5 smallest smaller-text">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <FeedbackForm
              feedbackParams={{
                type: "contact",
                title: "Contact",
                slug: "contact-lpma",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactLPMAPAgeQuery {
    contentfulContactLpma {
      id
      title
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
