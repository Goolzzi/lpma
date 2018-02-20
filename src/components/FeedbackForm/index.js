import React from "react";
import "./styles.scss";
import {EntypoThumbsDown, EntypoThumbsUp} from "react-entypo";

const FeedbackForm = () => (
  <div className="columns helpful is-gapless">
    <div className="column is-9">
      <span>Was this Helpful ?</span>
    </div>
    <div className="column">
      <button>
        <EntypoThumbsUp className="icon-style thumbs-up" />
        <span>Yes</span>
      </button>
    </div>
    <div className="column">
      <button>
        <EntypoThumbsDown className="icon-style thumbs-down" />
        <span>No</span>
      </button>
    </div>
  </div>
);

export default FeedbackForm;
