/* eslint-disable jsx-a11y/label-has-for */

import React from "react";

const BuildForm = ({formData}) => {
  return (
    <form id="buildLPMAEventPackageForm">
      <div className="field">
        <label className="label has-text-white">Your Name (required)</label>
        <div className="control">
          <input
            id="fullName"
            className="input"
            type="text"
            placeholder="Full Name"
          />
        </div>
      </div>

      <div className="field">
        <label className="label has-text-white">
          Your Work Number (required)
        </label>
        <div className="control">
          <input className="input" type="text" placeholder="0000 000 00" />
        </div>
      </div>

      <div className="field">
        <label className="label has-text-white">Your Email (required)</label>
        <div className="control">
          <input className="input" type="text" placeholder="Full Name" />
        </div>
      </div>

      <div className="field">
        <label className="label has-text-white">Your Email (required)</label>
        <div className="checkboxes">
          <div>
            <label className="checkbox">
              <input type="checkbox" />
              LPMNZ Round Table
            </label>
          </div>
          <div>
            <label className="checkbox">
              <input type="checkbox" />
              LPMA Premium Connection Day
            </label>
          </div>
          <div>
            <label className="checkbox">
              <input type="checkbox" />
              LPMA 2018
            </label>
          </div>
          <div>
            <label className="checkbox">
              <input type="checkbox" />
              LPMNZ Premium Connection Day
            </label>
          </div>
          <div>
            <label className="checkbox">
              <input type="checkbox" />
              LPMNZ 2018
            </label>
          </div>
          <div>
            <label className="checkbox">
              <input type="checkbox" />
              PMC 2018
            </label>
          </div>
          <div>
            <label className="checkbox">
              <input type="checkbox" />
              LPMA Round Table
            </label>
          </div>
          <div>
            <label className="checkbox">
              <input type="checkbox" />
              LPMA Meetups
            </label>
          </div>
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
        <button className="btn primary with-radius-5 smallest smaller-text">
          Send
        </button>
      </div>
    </form>
  );
};

export default BuildForm;
