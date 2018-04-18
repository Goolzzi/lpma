import React, {Component} from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Book from "../Book";

const propTypes = {
  books: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onBookClick: PropTypes.func.isRequired,
};

class BooksList extends Component {
  renderLearnMore = () => {
    const {isAuthenticated} = this.props;
    return (
      <div className="container title-cont">
        <div className="columns">
          <div className="column is-9">
            <h2 className="title is-3 has-text-weight-bold">Included Tools</h2>
            {!isAuthenticated ? (
              <span className="is-size-5 has-text-weight-bold">
                Not an LPMA Member? Learn more:
              </span>
            ) : null}
          </div>
          {!isAuthenticated ? (
            <div className="column is-3">
              <Link
                to="/"
                className="btn primary smaller-text smaller fullwidth">
                Learn more
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  renderBooksList = () => {
    const {books, onBookClick, isAuthenticated} = this.props;
    return books.map(book => (
      <Book
        key={book.id}
        book={book}
        onBookClick={onBookClick}
        isAuthenticated={isAuthenticated}
      />
    ));
  };

  render() {
    return (
      <section className="section building-blocks">
        {this.renderLearnMore()}
        <div className="container">
          <div className="columns is-multiline">{this.renderBooksList()}</div>
        </div>
      </section>
    );
  }
}

BooksList.propTypes = propTypes;

export default BooksList;
