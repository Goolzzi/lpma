import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import store from "store";
import {EntypoThumbsDown, EntypoThumbsUp} from "react-entypo";
import IRISAuth from "../../Auth/IRISAuth";
import PostSubmitMessage from "../PostSubmitMessage";
import {v4} from "uuid";
import "./styles.scss";

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.segemetEevent = "Feedback Form";
    this.state = {
      formClicked: false,
      emitted: false,
      userSumbmitted: store.get(`${this.props.feedbackParams.slug}`),
    };
  }

  submitFeedback = (submitType, params) => {
    if (typeof analytics !== "undefined") {
      analytics.track(this.segemetEevent, {
        WasThisHelpful: submitType,
        params,
      });
      if (this.auth.isAuthenticated()) {
        const user = this.auth.getUserData();
        analytics.identify(user.username, {
          from: "Was this helpful",
          params,
          isAuthenticated: true,
          ...user,
        });
      } else {
        analytics.identify(v4(), {
          from: "Was this helpful",
          params,
          isAuthenticated: false,
        });
      }
    }

    this.setState({formClicked: true});
  };

  componentDidMount() {
    typeof analytics !== "undefined" &&
      analytics.on("track", event => {
        if (event === this.segemetEevent) {
          this.setState({emitted: true});
          store.set(`${this.props.feedbackParams.slug}`, true);
        }
      });
  }

  render() {
    const {feedbackParams} = this.props;
    const {formClicked, emitted, userSumbmitted} = this.state;

    if (userSumbmitted) {
      return null;
    }

    if (!emitted) {
      return (
        <IRISAuth
          render={auth => {
            this.auth = auth;
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
                      this.submitFeedback("Yes", feedbackParams);
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
                      this.submitFeedback("No", feedbackParams);
                    }}>
                    <EntypoThumbsDown className="icon-style thumbs-down" />
                    <span>No</span>
                  </button>
                </div>
              </div>
            );
          }}
        />
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
};

export default FeedbackForm;
