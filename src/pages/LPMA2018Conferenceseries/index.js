import React from "react";
import PropTypes from "prop-types";
import {Icon} from "react-fa";
import FeedbackForm from "../../components/FeedbackForm";
import BuildForm from "./BuildForm";
import "./styles.scss";

import jumbotronBg from "../../assets/images/Optimised-Audience-143.jpg";

const propTypes = {
  data: PropTypes.object.isRequired,
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

LPMA2018Conferenceseries.propTypes = propTypes;

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
