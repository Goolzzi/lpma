import React from "react";
import PropTypes from "prop-types";

import Top from "../components/TopJumbotron";
import Bottom from "../components/BottomJumbotron";
import Join from "../components/Join";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const joinPage = ({
  data: {
    allContentfulAcquisitionJumbotron: {edges},
  },
}) => (
  <div>
    <Top {...edges[1].node} />
    <Join />
    <Bottom {...edges[0].node} />
  </div>
);

joinPage.propTypes = propTypes;

export default joinPage;

export const pageQuery = graphql`
  query joinPageQuery {
    allContentfulAcquisitionJumbotron {
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
