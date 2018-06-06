import React, {Component} from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  data: PropTypes.object.isRequired,
};

class LinkExpired extends Component {
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
          <input className="expired-email-input" placeholder="Email address" />
          <br />
          <button className="expired-send-button">Send reset link</button>
        </div>
      </section>
    );
  }
}

LinkExpired.propTypes = propTypes;

export default LinkExpired;

export const pageQuery = graphql`
  query LinkExpiredQuery {
    contentfulExpiredPasswordPagesContent {
      expiredTitle
      firstMessage
      secondMessage
    }
  }
`;
