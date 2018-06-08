import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import fetchUtils from "../../utils/fetchUtils";
import {authConfig} from "../../Auth/ailoAuth/authVariables";
import withFormValidations from "../../utils/withFormValidations";
import "./styles.scss";

const propTypes = {
  data: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isEmailValid: PropTypes.func.isRequired,
};

class LinkExpired extends Component {
  state = {email: "", errorMessage: ""};

  getSubmitUrl = () =>
    `https://${authConfig.domain}/dbconnections/change_password`;

  getSubmitBody = () => ({
    client_id: authConfig.clientID,
    email: this.state.email,
    connection: "Username-Password-Authentication",
  });

  getSubmitParams = () => ({
    method: "POST",
    bodyObject: this.getSubmitBody(),
  });

  emailInputChangedHandler = ({target: {value: email}}) =>
    this.setState({email});

  redirectToSent = () => this.props.history.push("/password-link-sent");

  isInvalid = () => this.state.errorMessage.length !== 0;

  submitSuccessHandler = () => {
    this.setState({errorMessage: ""});
    const redirectToSent = this.redirectToSent;
    const url = this.getSubmitUrl();
    const params = this.getSubmitParams();
    fetchUtils.request(url, params).then(redirectToSent);
  };

  submitFailHandler = () =>
    this.setState({errorMessage: "Email address invalid."});

  sendButtonClickedHandler = () => {
    const {isEmailValid} = this.props;
    const {email} = this.state;
    isEmailValid(email)
      .then(this.submitSuccessHandler)
      .catch(this.submitFailHandler);
  };

  render() {
    const {
      data: {
        contentfulExpiredPasswordPagesContent: {
          expiredTitle,
          firstMessage,
          secondMessage,
        },
      },
    } = this.props;
    const {email} = this.state;
    const isInvalid = this.isInvalid();

    return (
      <section className="section expired-frame container">
        <div className="container has-text-centered">
          <h3 className="title">{expiredTitle}</h3>
          <p
            className="first-message"
            dangerouslySetInnerHTML={{__html: firstMessage}}
          />
          <p
            className="second-message has-text-weight-bold"
            dangerouslySetInnerHTML={{__html: secondMessage}}
          />
          <input
            value={email}
            onChange={this.emailInputChangedHandler}
            className={classNames({
              "expired-email-input": true,
              warning: isInvalid,
            })}
            placeholder="Email address"
          />
          <br />
          <button
            onClick={this.sendButtonClickedHandler}
            className="expired-send-button">
            Send reset link
          </button>
        </div>
      </section>
    );
  }
}

LinkExpired.propTypes = propTypes;

export default withFormValidations(LinkExpired);

export const pageQuery = graphql`
  query LinkExpiredQuery {
    contentfulExpiredPasswordPagesContent {
      expiredTitle
      firstMessage
      secondMessage
    }
  }
`;
