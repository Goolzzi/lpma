import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  message: PropTypes.string.isRequired,
};

const PostSubmitMessage = ({message}) => (
  <div className="columns helpful is-gapless">
    <div className="column is-9">
      <span className="feedback-received">{message}</span>
    </div>
  </div>
);

PostSubmitMessage.propTypes = propTypes;

export default PostSubmitMessage;
