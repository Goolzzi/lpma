import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";
import {EntypoThumbsDown, EntypoThumbsUp} from "react-entypo";

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.segemetEevent = "Feedback Form";
    this.state = {
      formClicked: false,
      emitted: false,
    };
  }

  submitFeedback = (submitType, params) => {
    typeof analytics !== "undefined" &&
      analytics.track(this.segemetEevent, {
        WasThisHelpful: submitType,
        params,
      });
    this.setState({formClicked: true});
  };

  componentDidMount() {
    typeof analytics !== "undefined" &&
      analytics.on("track", event => {
        if (event === this.segemetEevent) {
          this.setState({emitted: true});
        }
      });
  }

  render() {
    const {feedbackParams} = this.props;
    const {formClicked, emitted} = this.state;
    if (!emitted) {
      return (
        <div className="columns helpful is-gapless">
          <div className="column is-8">
            <span>Was this Helpful ?</span>
          </div>
          <div className="column">
            <button
              className={classNames({"feedback-btn-disabled": formClicked})}
              disabled={formClicked}
              onClick={() => {
                this.submitFeedback("Yes", feedbackParams);
              }}>
              <EntypoThumbsUp className="icon-style thumbs-up" />
              <span>Yes</span>
            </button>
          </div>
          <div className="column">
            <button
              className={classNames({"feedback-btn-disabled": formClicked})}
              disabled={formClicked}
              onClick={() => {
                this.submitFeedback("No", feedbackParams);
              }}>
              <EntypoThumbsDown className="icon-style thumbs-down" />
              <span>No</span>
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="columns helpful is-gapless">
        <div className="column is-9">
          <span className="feedback-received">Thanks for your feedback.</span>
        </div>
      </div>
    );
  }
}

FeedbackForm.propTypes = {
  feedbackParams: PropTypes.object,
};

export default FeedbackForm;
