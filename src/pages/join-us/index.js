import React from "react";
import PropTypes from "prop-types";

import Top from "../../components/TopJumbotron";
import Bottom from "../../components/BottomJumbotron";
import Join from "../../components/Join";

const propTypes = {
  data: PropTypes.object.isRequired,
};

//FIXME: make one join page for all counteries.
const JoinUSPage = ({data: {allContentfulJoinJumotron: {edges}}}) => (
  <div className="join-page">
    <Top {...edges[0].node} />
    <Join />
    <Bottom {...edges[1].node} />
  </div>
);

JoinUSPage.propTypes = propTypes;

export default JoinUSPage;

export const pageQuery = graphql`
  query joinUSPage {
    allContentfulJoinJumotron(sort: {fields: [pageLocation], order: DESC}) {
      edges {
        node {
          jumbotron {
            joinLink {
              name
              to
              force
            }
            title {
              title
            }
            background {
              id
              resolutions(quality: 100) {
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
