import React from "react";
import PropTypes from "prop-types";
import download from "downloadjs";

const getOnClickFunction = (isAuthenticated, onBookClick, book) =>
  isAuthenticated
    ? () => download(`https:${book.resourceFile.file.url}`)
    : () => onBookClick(book);

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  book: PropTypes.object.isRequired,
  onBookClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

const BookItemWrapper = ({isAuthenticated, book, onBookClick, children}) => (
  <div
    onClick={getOnClickFunction(isAuthenticated, onBookClick, book)}
    className="column is-3">
    {children}
  </div>
);

BookItemWrapper.propTypes = propTypes;

export default BookItemWrapper;
