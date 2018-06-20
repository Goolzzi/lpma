import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import store from "store";
import PostSubmitMessage from "../PostSubmitMessage";
import withSegmentTracking from "../../utils/withSegmentTracking";
import withFormValidations from "../../utils/withFormValidations";
import "./styles.scss";

const propTypes = {
  isEmailValid: PropTypes.func.isRequired,
  trackIdentify: PropTypes.func.isRequired,
  trackForm: PropTypes.func.isRequired,
  trackOn: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired,
};

class GetUpdatesForm extends Component {
  constructor(props) {
    super(props);
    this.trackingEventName = "Get blog updates";
    this.state = {
      email: "",
      errorMessage: "",
      formClicked: false,
      emitted: false,
      userSumbmitted: store.get(this.trackingEventName),
    };
  }

  submitSuccessHandler = () => {
    const {track} = this.props;
    const {email} = this.state;
    track(this.trackingEventName, {email});
    this.setState({formClicked: true, errorMessage: ""});
  };

  submitFailHandler = () => {
    this.setState({errorMessage: "Please provide a valid email address."});
  };

  submitSubscription = () => {
    const {isEmailValid} = this.props;
    const {email} = this.state;
    isEmailValid(email)
      .then(this.submitSuccessHandler)
      .catch(this.submitFailHandler);
  };

  emailInputChangedHandler = ({target}) => {
    this.setState({email: target.value});
  };

  componentDidMount() {
    this.props.trackOn(event => {
      if (event === this.trackingEventName) {
        this.setState({emitted: true});
        store.set(this.trackingEventName, true);
      }
    });
  }

  render() {
    const {
      email,
      errorMessage,
      formClicked,
      emitted,
      userSumbmitted,
    } = this.state;
    if (userSumbmitted) {
      return null;
    }
    if (!emitted) {
      return (
        <section className="section container form-columns">
          <section className="section blog-subscribe">
            <div className="container">
              <div className="columns">
                <div className="column wrapper is-8 is-offset-2">
                  <div className="cont">
                    <h2 className="title is-2">
                      Get the latest LPMA updates delivered straight to your
                      inbox.
                    </h2>
                    <p>
                      Each email will feature articles and advice on how to grow
                      your business, improve your skills, tips &amp; tricks and
                      much, much more.
                    </p>

                    <input
                      className={classNames({
                        inp: true,
                        smaller: true,
                        bordered: true,
                        halfwidth: true,
                        warning: errorMessage.length !== 0,
                      })}
                      onChange={this.emailInputChangedHandler}
                      value={email}
                      type="email"
                      placeholder="Enter your email address to subscribe"
                    />
                    <button
                      className={classNames({
                        "signup-btn-disabled": formClicked,
                        btn: true,
                        primary: true,
                        smaller: true,
                      })}
                      onClick={this.submitSubscription}>
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      );
    }

    return <PostSubmitMessage message="Sign-up went successful." />;
  }
}

GetUpdatesForm.propTypes = propTypes;

export default withFormValidations(withSegmentTracking(GetUpdatesForm));
