import React from "react";
import PropTypes from "prop-types";
import {CountryDropdown} from "react-country-region-selector";
import {CSSTransition} from "react-transition-group";
const COUNTRY_WHITELIST = ["AU", "NZ", "US"];

export default class JoinUsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
    };
  }
  componentDidMount() {
    // analytics init snippet injected via Netlify Snippet Injection
    // eslint-disable-next-line no-undef
    typeof analytics !== "undefined" &&
      // eslint-disable-next-line no-undef
      analytics.trackForm(document.getElementById("joinLPMAForm"), "Join");
  }
  render() {
    const {country} = this.state;
    const {formIn} = this.props;
    return (
      <CSSTransition in={formIn} timeout={1000} classNames="form" unmountOnExit>
        <form
          id="joinLPMAForm"
          name="joinForm"
          data-netlify="true"
          method="post"
          data-netlify-honeypot="bot-field"
          className="join-form">
          <input type="hidden" name="form-name" value="joinForm" />
          <div className="overlay-image" />
          <h1>
            Join the property MANAGEMENT industry evolution.{" "}
            <span>Join LPMA</span>.
          </h1>
          <div className="field">
            <div className="control">
              <input
                className="input is-small"
                type="text"
                name="FullName"
                placeholder="Full name*"
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-small"
                type="email"
                name="Email"
                placeholder="Email Address*"
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-small"
                type="text"
                name="WorkPhone"
                placeholder="Your work phone*"
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-small"
                type="text"
                name="CompanyName"
                placeholder="Your company*"
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <div className="select is-small">
                <CountryDropdown
                  value={country}
                  name="CountryName"
                  form="joinLPMAForm"
                  onChange={val => this.setState({country: val})}
                  whitelist={COUNTRY_WHITELIST}
                  customOptions={["Other"]}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button">
                JOIN LPMA
              </button>
            </div>
          </div>
        </form>
      </CSSTransition>
    );
  }
}
JoinUsForm.propTypes = {
  formIn: PropTypes.bool,
};
JoinUsForm.defaultProps = {
  formIn: false,
};
