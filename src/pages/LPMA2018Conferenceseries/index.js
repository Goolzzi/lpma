/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";
import {Icon} from "react-fa";
import FeedbackForm from "../../components/FeedbackForm";
import ConferencesJumbotron from "../../components/ConferencesJumbotron";
import "./styles.scss";

const jumbotronNode = {
  background: {
    resolutions: {
      src: require("../../assets/images/Optimised-Audience-143.jpg"),
      srcSet: require("../../assets/images/Optimised-Audience-143.jpg"),
    },
  },
  heading: "Leading Property Managers Association Presents:",
  image: {
    resolutions: {
      src: require("../../assets/images/LPMA2018_Conference_Logo_white-600x200.png"),
      srcSet: require("../../assets/images/LPMA2018_Conference_Logo_white-600x200.png"),
    },
  },
  content: {
    childMarkdownRemark: {
      html:
        "The Ultimate Collection of Transformational Property Management Events",
    },
  },
};

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
              placeholder="0412 345 678"
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
              placeholder="Work@emailaddress.com"
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
            {this.props.series.map(({id, title}) => {
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
              name="AdditionalComments"
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

const LPMA2018Conferenceseries = ({
  data: {
    contentfulConferenceserieEventSeries: {title, series},
    contentfulConferenceSeriesIntro,
    contentfulConferenceSeriesBuildForm,
  },
}) => {
  return (
    <React.Fragment>
      <ConferencesJumbotron node={jumbotronNode} isVideo={false} />

      <section className="section lpma2018-conferences-elevate">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="has-text-centered">
                <h3 className="title is-3">
                  {contentfulConferenceSeriesIntro.title}
                </h3>
              </div>
              <div className="has-text-centered">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      contentfulConferenceSeriesIntro.description
                        .childMarkdownRemark.html,
                  }}
                />
                <a
                  href="#buildLPMAEventPackageForm"
                  className="btn secondary with-radius-5 smaller-text">
                  {contentfulConferenceSeriesIntro.buildPackageLink.label}
                  <Icon
                    name={
                      contentfulConferenceSeriesIntro.buildPackageLink.iconName
                    }
                  />
                </a>
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
                  {contentfulConferenceSeriesBuildForm.title}
                </h2>
              </div>
              <div className="has-text-centered">
                <h4
                  className="subtitle is-6 has-text-white has-text-weight-semibold"
                  dangerouslySetInnerHTML={{
                    __html: contentfulConferenceSeriesBuildForm.description,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-4 is-offset-4">
              <BuildForm series={series} />
            </div>
          </div>
        </div>
      </section>

      <section className="section lpma2018-conferences-feedback">
        <div className="container">
          <FeedbackForm
            feedbackParams={{
              type: "lpma2018conferenceseries",
              title: "lpma2018Conference",
              slug: "lpma2018-conference-series",
            }}
          />
        </div>
      </section>
    </React.Fragment>
  );
};

LPMA2018Conferenceseries.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LPMA2018Conferenceseries;

export const pageQuery = graphql`
  query LPMA2018ConfPageQuery {
    contentfulConferenceSeriesIntro {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      buildPackageLink {
        iconName
        label
      }
    }
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
    contentfulConferenceSeriesBuildForm {
      title
      description
    }
  }
`;
