import React from "react";
import PropTypes from "prop-types";
import withSegmentTracking from "../../utils/withSegmentTracking";
import {CountryDropdown} from "react-country-region-selector";
import {CSSTransition} from "react-transition-group";
const COUNTRY_WHITELIST = ["AU", "NZ", "US"];

class JoinUsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FullName: "",
      Email: "",
      WorkPhone: "",
      CompanyName: "",
      CountryName: "",
    };
  }
  componentDidMount() {
    this.props.trackForm("joinusForm", "JoinUs");
  }

  handleSubmit = () => {
    this.props.trackIdentify("JoinUs", this.state, this.state.Email);
    this.props.trackGroup("JoinUs", this.state.Company, this.state);
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  render() {
    const {formIn} = this.props;
    return (
      <CSSTransition in={formIn} timeout={1000} classNames="form" unmountOnExit>
        <form
          onSubmit={this.handleSubmit}
          id="joinusForm"
          name="joinusForm"
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
                value={this.state.FullName}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                value={this.state.Email}
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
                onChange={this.handleChange}
                placeholder="Your work phone*"
                value={this.state.WorkPhone}
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
                onChange={this.handleChange}
                placeholder="Your company*"
                value={this.state.CompanyName}
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <div className="select is-small">
                <CountryDropdown
                  value={this.state.CountryName}
                  name="CountryName"
                  form="joinLPMAForm"
                  onChange={val => this.setState({CountryName: val})}
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
  trackIdentify: PropTypes.func.isRequired,
  trackForm: PropTypes.func.isRequired,
  trackGroup: PropTypes.func.isRequired,
};
JoinUsForm.defaultProps = {
  formIn: false,
};
export default withSegmentTracking(JoinUsForm);
