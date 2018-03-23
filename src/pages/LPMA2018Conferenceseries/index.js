import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import {Icon} from "react-fa";
import "./styles.scss";
import FeedbackForm from "../../components/FeedbackForm";

import jumbotronBg from "../../assets/images/Optimised-Audience-143.jpg";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const LPMA2018Conferenceseries = ({
  data: {contentfulConferenceserieEventSeries: {title, series}},
}) => {
  return (
    <React.Fragment>
      <section
        className="section lpma2018-conferences-top-jumbotron"
        style={{"background-image": `url(${jumbotronBg})`}}>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="appear-cont">
                <div className="has-text-centered">
                  <h2 className="title is-5 has-text-white">
                    Leading Property Managers Association Presents:
                  </h2>
                </div>

                <div className="has-text-centered">
                  <img
                    src={require("../../assets/images/LPMA2018_Conference_Logo_white-600x200.png")}
                    alt=""
                  />
                </div>

                <div className="has-text-centered">
                  <strong className="is-size-6 has-text-white">
                    The Ultimate Collection of Transformational Property
                    Management Events
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section lpma2018-conferences-elevate">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="has-text-centered">
                <h3 className="title is-3">
                  Elevate your career, your business, your team and most
                  importantly yourself.
                </h3>
              </div>
              <div className="has-text-centered">
                <p>
                  LPMA has set out to create a unique and exciting series of
                  transformative events to help champion property professionals.
                  Whether you’re a 20-year veteran or have only a few months
                  under your belt, we have the events and resources that cater
                  to every property professional.
                </p>

                <p>
                  Our series covers the entire 2018 calendar, providing one
                  central place for the industry’s leading events. The best
                  part? We can offer unbeatable pricing (up to 15% off our
                  Pre-Release pricing!) and provide attendees with the
                  opportunity to hand select which events to attend.
                </p>

                <p>
                  2018 is going to be a fantastic year and we hope that you join
                  us on this journey. Click below to craft your event package
                  today!
                </p>

                <button className="btn secondary with-radius-5 smaller-text">
                  Build your package
                  <Icon name={"list-alt"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section lpma2018-conferences-series-events">
        <div className="container">
          <div className="has-text-centered">
            <h2 className="title is-2 section-title">{title}</h2>
          </div>
          {series.map(
            ({
              title,
              id,
              date,
              location,
              description,
              image: {resolutions: {src, srcSet}},
            }) => {
              return (
                <div key={id} className="columns">
                  <div className="column is-6">
                    <div className="image">
                      <img src={src} srcSet={srcSet} alt={title} />
                    </div>
                  </div>
                  <div className="column is-6">
                    <div>
                      <h3 className="title is-3">{title}</h3>
                    </div>
                    <div>
                      <h4 className="subtitle is-5">
                        {date} <span>|</span> {location}
                      </h4>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: description.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                </div>
              );
            },
          )}
        </div>
      </section>

      <section className="section lpma2018-conferences-craft">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="has-text-centered">
                <h2 className="title is-2 has-text-white">
                  CRAFT YOUR LPMA EVENT PACKAGE NOW
                </h2>
              </div>
              <div className="has-text-centered">
                <h4 className="subtitle is-6 has-text-white has-text-weight-semibold">
                  Select your preferences below and one of our friendly team
                  members will be in touch to give you<br />the very best deal
                  on your personalised package.
                </h4>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <form>
                <div className="field">
                  <label className="label has-text-white">
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
                  <label className="label has-text-white">
                    Your Work Number (required)
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="0000 000 00"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label has-text-white">
                    Your Email (required)
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
                  <label className="label has-text-white">
                    Your Email (required)
                  </label>
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
                  <label className="label has-text-white">
                    Additional Comments
                  </label>
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
            </div>
          </div>
        </div>
      </section>

      <section className="section lpma2018-conferences-feedback">
        <div className="container">
          <FeedbackForm
            feedbackParams={{
              type: "fondry",
              title: "My Foundry",
              slug: "foundry",
            }}
          />
        </div>
      </section>
    </React.Fragment>
  );
};

LPMA2018Conferenceseries.propTypes = propTypes;

export default LPMA2018Conferenceseries;

export const pageQuery = graphql`
  query LPMA2018ConfPageQuery {
    contentfulConferenceserieEventSeries {
      title
      name
      series {
        id
        title
        date
        location
        image {
          resolutions {
            src
            srcSet
          }
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
