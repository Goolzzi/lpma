import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import store from "store";
import {EntypoThumbsDown, EntypoThumbsUp} from "react-entypo";
import PostSubmitMessage from "../PostSubmitMessage";
import withSegmentTracking from "../../utils/withSegmentTracking";
import {v4} from "uuid";
import "./styles.scss";

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.helpfulEvent = "Article Marked 👍";
    this.notHelpfulEvent = "Article Marked 👎";
    this.state = {
      formClicked: false,
      emitted: false,
      userSumbmitted: store.get(`${this.props.feedbackParams.slug}`),
    };
  }

  getSegmentEvent = wasHelpful =>
    wasHelpful ? this.helpfulEvent : this.notHelpfulEvent;

  submitFeedback = (wasHelpful, params) => {
    const event = this.getSegmentEvent(wasHelpful);
    this.props.track(event, params);
    this.setState({formClicked: true});
  };

  componentDidMount() {
    this.props.trackOn(event => {
      if (event === this.helpfulEvent || event === this.notHelpfulEvent) {
        this.setState({emitted: true});
        store.set(`${this.props.feedbackParams.slug}`, true);
      }
    });
  }

  render() {
    const {feedbackParams} = this.props;
    if (userSumbmitted) {
      return null;
    }
    const {formClicked, emitted, userSumbmitted} = this.state;
    if (!emitted) {
      return (
        <div className="columns helpful is-gapless">
          <div className="column is-8">
            <span>Was this Helpful ?</span>
          </div>
          <div className="column">
            <button
              className={classNames({
                "feedback-btn-disabled": formClicked,
              })}
              onClick={() => {
                this.submitFeedback(true, feedbackParams);
              }}>
              <EntypoThumbsUp className="icon-style thumbs-up" />
              <span>Yes</span>
            </button>
          </div>
          <div className="column">
            <button
              className={classNames({
                "feedback-btn-disabled": formClicked,
              })}
              onClick={() => {
                this.submitFeedback(false, feedbackParams);
              }}>
              <EntypoThumbsDown className="icon-style thumbs-down" />
              <span>No</span>
            </button>
          </div>
        </div>
      );
    }
    return <PostSubmitMessage message="Thanks for your feedback!" />;
  }
}

FeedbackForm.propTypes = {
  feedbackParams: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  trackIdentify: PropTypes.func.isRequired,
  trackForm: PropTypes.func.isRequired,
  trackOn: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired,
};

export default withSegmentTracking(FeedbackForm);
