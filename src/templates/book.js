import React from "react";
import PropTypes from "prop-types";

const propTypes = {};

const Book = props => (
  <div>
    <code>{JSON.stringify(props)}</code>
  </div>
);

Book.propTypes = propTypes;

export default Book;

export const pageQuery = graphql`
  query BookQuery($id: String!) {
    contentfulBook(id: {eq: $id}) {
      id
      title
    }
  }
`;
