/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import {parseHash} from "../../utils";
import withSegmentTracking from "../../utils/withSegmentTracking";
import withIntercom from "../../utils/withIntercom";
import "./styles.scss";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    const params = parseHash(this.props.location.hash.substring(1));
    this.state = {
      showModal: params && params.isNotMember == "1" ? true : false,
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
    this.props.trackGroup("Contact", this.state.Company, this.state);
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  render() {
    const {showNewMessage, data: {contentfulContactLpma}} = this.props;
    return (
      <React.Fragment>
        <Modal
          isOpen={this.state.showModal}
          className="custom-modal"
          overlayClassName="custom-modal-wrapper"
          ariaHideApp={false}
          contentLabel="Modal">
          <div className="custom-modal-top has-text-centered">
            <h2 className="title is-4">Warning!</h2>
          </div>
          <div className="custom-modal-content">
            We&apos;ve detected a problem with your account. It might be that
            you aren&apos; t a current LPMA member, or it may be an error on our
            end. If you need some help resolving this get in touch with us using
            the speech bubble at the bottom right of the page.
          </div>
          <div className="custom-modal-bottom has-text-centered">
            <button
              className="btn primary smaller onequarterwidth"
              onClick={() => {
                window.location.hash = "";
                this.setState({showModal: false});
              }}>
              OK
            </button>
          </div>
        </Modal>
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
                  <button
                    onClick={showNewMessage}
                    type="submit"
                    className="btn secondary with-radius-5 smallest smaller-text">
                    Talk to us
                  </button>
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
  convertVisitorToLead: PropTypes.func.isRequired,
  showNewMessage: PropTypes.func.isRequired,
};

export default withIntercom(withSegmentTracking(ContactPage));

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
