import React from "react";
import PropTypes from "prop-types";
import TopJumbotron from "../components/TopJumbotron";
import BottomJumbotron from "../components/BottomJumbotron";
import Resources from "../components/Resources";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const ResourcesPage = ({data: {allContentfulResoursesJumbotron: {edges}}}) => (
  <div>
    <TopJumbotron {...edges[1].node} />
    <Resources />
    <BottomJumbotron {...edges[0].node} />
  </div>
);

ResourcesPage.propTypes = propTypes;

export default ResourcesPage;

export const pageQuery = graphql`
  query ResourcesPageQuery {
    allContentfulResoursesJumbotron {
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
            titleVisible
          }
        }
      }
    }
  }
`;
