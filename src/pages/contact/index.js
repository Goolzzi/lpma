/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";
import withSegmentTracking from "../../utils/withSegmentTracking";
import "./styles.scss";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      Email: "",
      WorkNumber: "",
      Company: "",
      Subject: "",
      Message: "",
    };
  }

  componentDidMount() {
    this.props.trackForm("conatctLPMAForm", "Contact LPMA");
  }

  handleSubmit = () => {
    this.props.trackIdentify("Contact", this.state, this.state.Email);
    this.props.trackGroup("Contact", this.state.Company, this.state);
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

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
                  onSubmit={this.handleSubmit}
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
                        onChange={this.handleChange}
                        value={this.state.FullName}
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
                        onChange={this.handleChange}
                        value={this.state.Email}
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
                        onChange={this.handleChange}
                        value={this.state.WorkNumber}
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
                        onChange={this.handleChange}
                        value={this.state.Company}
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
                        onChange={this.handleChange}
                        value={this.state.Subject}
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
                        onChange={this.handleChange}
                        value={this.state.Message}
                      />
                    </div>
                  </div>

                  <div className="has-text-centered-mobile">
                    <button
                      type="submit"
                      className="btn secondary with-radius-5 smallest smaller-text">
                      Send
                    </button>
                  </div>
                </form>
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
  trackIdentify: PropTypes.func.isRequired,
  trackForm: PropTypes.func.isRequired,
  trackGroup: PropTypes.func.isRequired,
};

export default withSegmentTracking(ContactPage);

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
