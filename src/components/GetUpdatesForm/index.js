import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import store from "store";
import PostSubmitMessage from "../PostSubmitMessage";
import withSegmentTracking from "../../utils/withSegmentTracking";
import "./styles.scss";

class GetUpdatesForm extends Component {
  constructor(props) {
    super(props);
    this.trackingEventName = "Get blog updates";
    //eslint-disable-next-line
    this.emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.state = {
      email: "",
      formClicked: false,
      emitted: false,
      userSumbmitted: store.get(this.trackingEventName),
    };
  }

  submitSubscription = () => {
    const {email} = this.state;
    const isValid = this.emailRegexp.test(String(email).toLowerCase());
    if (!isValid) {
      return;
    }
    this.props.trackIdentify("Get Blog Update form", email, email);
    this.props.track(this.trackingEventName, {email});
    this.setState({formClicked: true});
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
    const {email, formClicked, emitted, userSumbmitted} = this.state;
    if (userSumbmitted) {
      return null;
    }
    if (!emitted) {
      return (
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
                    className="inp smaller bordered halfwidth"
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
      );
    }

    return <PostSubmitMessage message="Sign-up went successful." />;
  }
}

GetUpdatesForm.propTypes = {
  trackIdentify: PropTypes.func.isRequired,
  trackForm: PropTypes.func.isRequired,
  trackOn: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired,
};

export default withSegmentTracking(GetUpdatesForm);
