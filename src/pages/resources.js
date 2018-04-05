import React from "react";
import PropTypes from "prop-types";
import TopJumbotron from "../components/TopJumbotron";
import BottomJumbotron from "../components/BottomJumbotron";
import Resources from "../components/Resources";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const ResourcesPage = props => {
  const {
    data: {
      headerImage,
      allContentfulResoursesJumbotron: {edges},
      contentfulEventsTopInfoRemark,
      allContentfulLpmaResource,
    },
  } = props;
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

export default ResourcesPage;

export const pageQuery = graphql`
  query ResourcesPageQuery {
    allContentfulResoursesJumbotron(
      sort: {fields: [pageLocation], order: DESC}
    ) {
      edges {
        node {
          pageLocation
          jumbotron {
            joinLink {
              name
              to
            }
            background {
              id
              resolutions(quality: 100) {
                ...GatsbyContentfulResolutions
              }
              sizes(quality: 100, maxWidth: 1280, toFormat: JPG) {
                ...GatsbyContentfulSizes
              }
            }
            title {
              title
            }
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
          downloadLink {
            name
            resourseHref
          }
          orderLink {
            to
            name
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          image {
            resolutions(width: 1245, quality: 100) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
