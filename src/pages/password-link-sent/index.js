import React from "react";
import PropTypes from "prop-types";
import {Icon} from "react-fa";
import "./styles.scss";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const LinkSent = ({
  data: {
    contentfulExpiredPasswordPagesContent: {
      sentFirstMessage,
      sentSecondMessage,
    },
  },
}) => (
  <section className="section expired-frame container">
    <div className="container has-text-centered">
      <div className="green-circle">
        <Icon name="check" />
      </div>
      <p
        className="first-message"
        dangerouslySetInnerHTML={{__html: sentFirstMessage}}
      />
      <p
        className="second-message has-text-weight-bold"
        dangerouslySetInnerHTML={{__html: sentSecondMessage}}
      />
    </div>
  </section>
);

LinkSent.propTypes = propTypes;

export default LinkSent;

export const pageQuery = graphql`
  query LinkSentQuery {
    contentfulExpiredPasswordPagesContent {
      sentFirstMessage
      sentSecondMessage
    }
  }
`;
