import React from "react";
import PropTypes from "prop-types";
import withSegmentTracking from "../utils/withSegmentTracking";
import TopJumbotron from "../components/TopJumbotron";
import BottomJumbotron from "../components/BottomJumbotron";
import Resources from "../components/Resources";

const propTypes = {
  data: PropTypes.object.isRequired,
  trackIdentify: PropTypes.func,
};

const ResourcesPage = props => {
  const {
    trackIdentify,
    data: {
      headerImage,
      allContentfulResoursesJumbotron: {edges},
      contentfulEventsTopInfoRemark,
      allContentfulLpmaResource,
    },
  } = props;
  trackIdentify();
  return (
    <div>
      <TopJumbotron {...edges[0].node} headerImage={headerImage} />
      <Resources
        {...contentfulEventsTopInfoRemark}
        {...allContentfulLpmaResource}
      />
      <BottomJumbotron {...edges[1].node} />
    </div>
  );
};

ResourcesPage.propTypes = propTypes;

export default withSegmentTracking(ResourcesPage);

export const pageQuery = graphql`
  query ResourcesPageQuery {
    allContentfulResoursesJumbotron(
      sort: {fields: [pageLocation], order: DESC}
    ) {
      edges {
        node {
          pageLocation
          jumbotron {
            ...JumbotronItem
          }
        }
      }
    }
    contentfulEventsTopInfoRemark {
      info {
        id
        childContentfulColumnTextRemarkContentTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulLpmaResource(sort: {fields: [orderid], order: ASC}) {
      edges {
        node {
          id
          title
          orderLink {
            to
            name
          }
          downloadableResources {
            id
            file {
              url
              fileName
              contentType
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          image {
            sizes(quality: 100, maxWidth: 600) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`;
