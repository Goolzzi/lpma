import React, {Component} from "react";
import PropTypes from "prop-types";
import ConferencesJumbotron from "../../components/ConferencesJumbotron";
import YearlyEventStats from "../../components/specific/YearlyEventStats";
import YearlyEventPurpose from "../../components/specific/YearlyEventPurpose";
import YearlyEventPlan from "../../components/specific/YearlyEventPlan";
import YearlyEventAgenda from "../../components/specific/YearlyEventAgenda";
import YearlyEventSpeakers from "../../components/specific/YearlyEventSpeakers";
import YearlyEventTickets from "../../components/specific/YearlyEventTickets";
import YearlyEventAwardsGala from "../../components/specific/YearlyEventAwardsGala";
import YearlyEventVenue from "../../components/specific/YearlyEventVenue";
import YearlyEventGallery from "../../components/specific/YearlyEventGallery";
import "./styles.scss";

class LPMA2018Page extends Component {
  render() {
    const {
      data: {
        contentfulYearlyEventJumbotron,
        contentfulYearlyEventStats,
        contentfulYearlyEventPurpose,
        contentfulYearlyEventPlan,
        contentfulYearlyEventAgenda,
        contentfulYearlyEventSpeakers,
        contentfulYearlyEventTickets,
        contentfulYearlyEventAwardsGala,
        contentfulYearlyEventGallery,
        contentfulYearlyEventVenue,
      },
    } = this.props;
    return (
      <React.Fragment>
        <ConferencesJumbotron isVideo node={contentfulYearlyEventJumbotron} />
        <YearlyEventStats node={contentfulYearlyEventStats} />
        <YearlyEventPurpose node={contentfulYearlyEventPurpose} />
        <YearlyEventPlan node={contentfulYearlyEventPlan} />
        <YearlyEventAgenda node={contentfulYearlyEventAgenda} />
        <YearlyEventSpeakers node={contentfulYearlyEventSpeakers} />
        <YearlyEventTickets node={contentfulYearlyEventTickets} />
        <YearlyEventAwardsGala node={contentfulYearlyEventAwardsGala} />
        <YearlyEventVenue node={contentfulYearlyEventVenue} />
        <YearlyEventGallery node={contentfulYearlyEventGallery} />
      </React.Fragment>
    );
  }
}

LPMA2018Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LPMA2018Page;

export const pageQuery = graphql`
  query LPMA2018PageQuery {
    contentfulYearlyEventJumbotron {
      videoLink
      heading
      image {
        resolutions(width: 600, quality: 100) {
          src
          srcSet
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      purchaseButton {
        label
        iconName
      }
    }
    contentfulYearlyEventStats {
      stellarAttendees
      latestExhibitors
      leadingSpeakers
      galaDinner
    }
    contentfulYearlyEventPurpose {
      title
      content {
        id
        content
      }
      purchaseButton {
        label
        iconName
      }
      image {
        resolutions(width: 2100, quality: 100) {
          src
          srcSet
        }
      }
    }
    contentfulYearlyEventPlan {
      days {
        id
        title
        date
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    contentfulYearlyEventSpeakers {
      title
      speakers {
        id
        name
        profession
        info {
          childMarkdownRemark {
            html
          }
        }
        image {
          resolutions(width: 250, quality: 100) {
            src
            srcSet
          }
        }
      }
      seeMoreButton {
        id
        label
      }
      heading {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulYearlyEventTickets {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      tickets {
        id
        title
        purchaseLink
        status {
          childMarkdownRemark {
            html
          }
        }
        endDate
        iconName
        priceMember
        priceNonMember
        sold
      }
    }
    contentfulYearlyEventVenue {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        resolutions(width: 800, quality: 100) {
          src
          srcSet
        }
      }
      learnMoreLink
    }
    contentfulYearlyEventAwardsGala {
      gif {
        resolutions(width: 1000, quality: 100) {
          src
          srcSet
        }
      }
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulYearlyEventGallery {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      images {
        id
        resolutions(width: 800, quality: 100) {
          src
          srcSet
        }
      }
    }
    contentfulYearlyEventAgenda {
      title
      heading {
        childMarkdownRemark {
          html
        }
      }
      events {
        id
        title
        startDate
        endDate
        speaker {
          id
          name
          profession
          info {
            childMarkdownRemark {
              html
            }
          }
        }
        type {
          id
          name
          filterAppearance
        }
      }
    }
  }
`;
