import React, {Component} from "react";
import PropTypes from "prop-types";
import ConferencesJumbotron from "../../components/ConferencesJumbotron";
import YearlyEventStats from "../../components/specific/lpma2018/YearlyEventStats";
import YearlyEventPurpose from "../../components/specific/lpma2018/YearlyEventPurpose";
import YearlyEventPlan from "../../components/specific/lpma2018/YearlyEventPlan";
import YearlyEventAgenda from "../../components/specific/lpma2018/YearlyEventAgenda";
import YearlyEventSpeakers from "../../components/specific/lpma2018/YearlyEventSpeakers";
import YearlyEventTickets from "../../components/specific/lpma2018/YearlyEventTickets";
import YearlyEventAwardsGala from "../../components/specific/lpma2018/YearlyEventAwardsGala";
import YearlyEventVenue from "../../components/specific/lpma2018/YearlyEventVenue";
import YearlyEventGallery from "../../components/specific/lpma2018/YearlyEventGallery";
import "./styles.scss";

class LPMA2018Page extends Component {
  render() {
    const {
      data: {
        contentfulYearlyEventJumbotron: {conferencesJumbotron},
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
        <ConferencesJumbotron isVideo node={conferencesJumbotron} />
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
      conferencesJumbotron {
        ...ConferencesJumbotronItem
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
        sizes(quality: 100, maxWidth: 800) {
          ...GatsbyContentfulSizes
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
          sizes(quality: 100, maxWidth: 300) {
            ...GatsbyContentfulSizes_noBase64
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
        sizes(quality: 100, maxWidth: 800) {
          ...GatsbyContentfulSizes
        }
      }
      learnMoreLink
    }
    contentfulYearlyEventAwardsGala {
      gif {
        sizes(quality: 100, maxWidth: 800) {
          ...GatsbyContentfulSizes_noBase64
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
        sizes(quality: 100, maxWidth: 800) {
          ...GatsbyContentfulSizes
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
