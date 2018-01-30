import React from "react";
import PropTypes from "prop-types";

import Top from "../components/TopJumbotron";
import Bottom from "../components/BottomJumbotron";
import Join from "../components/Join";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const joinPage = ({data: {allContentfulJoinJumotron: {edges}}}) => (
  <div className="join-page">
    <Top {...edges[0].node} />
    <Join />
    <Bottom {...edges[1].node} />
  </div>
);

joinPage.propTypes = propTypes;

export default joinPage;

export const pageQuery = graphql`
  query joinPageQuery {
    allContentfulJoinJumotron(sort: {fields: [pageLocation], order: DESC}) {
      edges {
        node {
          jumbotron {
            joinLink {
              name
              to
            }
            title {
              title
            }
            background {
              id
              resolutions {
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
`;
