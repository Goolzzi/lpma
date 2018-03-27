/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import "./styles.scss";
import FeedbackForm from "../../components/FeedbackForm";

const ContactPage = () => (
  <React.Fragment>
    <section className="section contact-cont">
      <div className="container">
        <div className="columns">
          <div className="column is-10">
            <div>
              <h1 className="title top-title is-1 has-text-white">
                Contact LPMA
              </h1>
            </div>
            <p className="has-text-white">
              Have a question about LPMA, how to join, or how to make the most
              of the member benefits?
              <br />
              Send us a message below and a member of our team will reach out
              shortly.
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="column is-4">
            <form>
              <div className="field">
                <label className="label has-text-white has-text-weight-normal">
                  Your Name (required)
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white has-text-weight-normal">
                  Your Email (required)
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Work@emailaddress.com"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white has-text-weight-normal">
                  Your Work Number (required)
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="0000-000-000"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white has-text-weight-normal">
                  Your Company (required)
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Ultimate Property Management"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white has-text-weight-normal">
                  Subject
                </label>
                <div className="control">
                  <input className="input" type="text" placeholder="Hey LPMA" />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white has-text-weight-normal">
                  Your Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="I have a question"
                  />
                </div>
              </div>

              <div className="has-text-centered-mobile">
                <button className="btn secondary with-radius-5 smallest smaller-text">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <FeedbackForm
              feedbackParams={{
                type: "contact",
                title: "Contact",
                slug: "contact-us",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default ContactPage;
