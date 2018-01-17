import React from "react";
import PropTypes from "prop-types";
import TopJumbotron from "../components/TopJumbotron";
import BottomJumbotron from "../components/BottomJumbotron";
import Resources from "../components/Resources";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const ResourcesPage = ({
  data: {
    allContentfulResoursesJumbotron: {edges},
    contentfulEventsTopInfoRemark,
    allContentfulLpmaResource,
  },
}) => (
  <div>
    <TopJumbotron {...edges[0].node} />
    <Resources
      {...contentfulEventsTopInfoRemark}
      {...allContentfulLpmaResource}
    />
    <BottomJumbotron {...edges[1].node} />
  </div>
);

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
              resolutions {
                src
                srcSet
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
            resolutions {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
