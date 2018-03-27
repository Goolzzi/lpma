/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import FeedbackForm from "../../components/FeedbackForm";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // analytics init snippet injected via Netlify Snippet Injection
    typeof analytics !== "undefined" &&
      analytics.trackForm(
        document.getElementById("conatctLPMAForm"), //eslint-disable-line
        "Contact LPMA",
      );
  }

  render() {
    const {contentfulContactLpma} = this.props.data;
    return (
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
                      contentfulContactLpma.description.childMarkdownRemark
                        .html,
                  }}
                />
              </div>
            </div>

            <div className="columns">
              <div className="column is-4">
                <form
                  name="ContactLPMA"
                  id="conatctLPMAForm"
                  data-netlify="true"
                  method="post"
                  data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="ContactLPMA" />
                  <div className="field">
                    <label className="label has-text-white has-text-weight-normal">
                      Your Name (required)
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Full Name"
                        name="FullName"
                        required
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
                        type="email"
                        placeholder="Work@emailaddress.com"
                        name="Email"
                        required
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
                        placeholder="0412 345 678"
                        name="WorkNumber"
                        required
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
                        name="Company"
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label has-text-white has-text-weight-normal">
                      Subject
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Hey LPMA"
                        name="Subject"
                      />
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
                        name="Message"
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
  }
}

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
