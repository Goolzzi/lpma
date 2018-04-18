import React from "react";
import PropTypes from "prop-types";
import BookItemWrapper from "../BookItemWrapper";

const propTypes = {
  book: PropTypes.object.isRequired,
  onBookClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const Book = ({onBookClick, book, isAuthenticated}) => (
  <BookItemWrapper
    isAuthenticated={isAuthenticated}
    onBookClick={onBookClick}
    book={book}>
    <div className="tool-item">
      <span
        dangerouslySetInnerHTML={{
          __html: book.icon.svg.childMarkdownRemark.html,
        }}
      />
      <p>{book.name}</p>
    </div>
  </BookItemWrapper>
);

Book.propTypes = propTypes;

export default Book;
