/* eslint-disable jsx-a11y/label-has-for */

import React from "react";
import PropTypes from "prop-types";

class BuildForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // analytics init snippet injected via Netlify Snippet Injection
    typeof analytics !== "undefined" &&
      analytics.trackForm(
        document.getElementById("buildLPMAEventPackageForm"), //eslint-disable-line
        "LPMA2018ConferenceSeriesBuildForm",
      );
  }

  render() {
    return (
      <form
        name="LPMA2018ConferenceSeriesBuildForm"
        id="buildLPMAEventPackageForm"
        data-netlify="true"
        method="post"
        data-netlify-honeypot="bot-field">
        <input
          type="hidden"
          name="form-name"
          value="LPMA2018ConferenceSeriesBuildForm"
        />

        <div className="field">
          <label className="label has-text-white">Your Name (required)</label>
          <div className="control">
            <input
              id="fullName"
              className="input"
              type="text"
              placeholder="Full Name"
              name="FullName"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label has-text-white">
            Your Work Number (required)
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="0000 000 00"
              name="WorkNumber"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label has-text-white">Your Email (required)</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Full Name"
              name="Email"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label has-text-white">
            Which events are you interested in?
          </label>
          <div className="checkboxes">
            {this.props.series &&
              this.props.series.map(({id, title}) => {
                return (
                  <div key={id}>
                    <label className="checkbox">
                      <input type="checkbox" name={title} />
                      {title}
                    </label>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="field">
          <label className="label has-text-white">Additional Comments</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Let's talk about LPMA events"
            />
          </div>
        </div>

        <div className="has-text-centered">
          <button
            type="submit"
            className="btn primary with-radius-5 smallest smaller-text">
            Send
          </button>
        </div>
      </form>
    );
  }
}

BuildForm.propTypes = {
  series: PropTypes.array.isRequired,
};

export default BuildForm;
