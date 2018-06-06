import React, {Component} from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {};

class LinkExpired extends Component {
  render() {
    return (
      <section className="section expired-frame container">
        <div className="container has-text-centered">
          <h3 className="title">Your set password link has expired</h3>
          <p className="first-message">
            To keep your account secure the set password link you received in
            your email can only be used once and expires after ten days.
          </p>
          <p className="second-message has-text-weight-bold">
            Enter in your email address below to get a new set password link.
          </p>
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
