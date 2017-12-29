import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const IndexPage = ({data}) => (
  <div>
    <h1>index page</h1>
  </div>
);

IndexPage.propTypes = propTypes;

export default IndexPage;

export const pageQuery = graphql`
  query PageQuery {
    allContentfulBook(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`;
