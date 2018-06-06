import React from "react";
import PropTypes from "prop-types";
import {Icon} from "react-fa";
import "./styles.scss";

const propTypes = {};

const LinkSent = () => (
  <section className="section expired-frame container">
    <div className="container has-text-centered">
      <div className="green-circle"><Icon name="check" /></div>
      <p className="first-message">
        We've sent a password reset link to the email address you submitted
        (provided it belongs an LPMA member)
      </p>
      <p className="second-message has-text-weight-bold">
        Click the link in the email to get started.
      </p>
    </div>
  </section>
);

LinkSent.propTypes = propTypes;

export default LinkSent;
