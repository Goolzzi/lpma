import React, {Component} from "react";
import PropTypes from "prop-types";
import BooksHeading from "../../components/specific/booksSeries/BooksHeading";
import BooksLoginMessage from "../../components/specific/booksSeries/BooksLoginMessage";
import BooksList from "../../components/specific/booksSeries/BooksList";
import BooksBottom from "../../components/specific/booksSeries/BooksBottom";
import BookDownload from "../../components/modals/BookDownload";
import IRISAuth from "../../Auth/IRISAuth";
import "./styles.scss";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const initialState = {isModalOpen: false, modalBook: null};

class BooksSeries extends Component {
  state = initialState;

  openBookModal = book => this.setState({currentBook: book, isModalOpen: true});

  closeBookModal = () => this.setState(initialState);

  renderIrisAuth = auth => {
    const {
      data: {
        contentfulBooksSeriesSection: {
          id,
          title,
          learnMoreLabel,
          learnMoreLink,
          books,
          resourcesZip,
        },
        allContentfulBooksSeriesSection: {edges},
      },
    } = this.props;
    const {isModalOpen, currentBook} = this.state;
    const login = auth.login;
    const isAuthenticated = auth.isAuthenticated();
    return (
      <React.Fragment>
        <BooksHeading
          currentSectionId={id}
          sections={edges}
          resourceTitle={title}
        />
        {!isAuthenticated ? <BooksLoginMessage login={login} /> : null}
        <BooksList
          isAuthenticated={isAuthenticated}
          books={books}
          onBookClick={this.openBookModal}
        />
        <BooksBottom
          learnMoreLabel={learnMoreLabel}
          learnMoreLink={learnMoreLink}
        />
        <BookDownload
          book={currentBook}
          resourcesZip={resourcesZip}
          isOpen={isModalOpen}
          onRequestClose={this.closeBookModal}
          closeModal={this.closeBookModal}
        />
      </React.Fragment>
    );
  };

  render() {
    return <IRISAuth render={this.renderIrisAuth} />;
  }
}

BooksSeries.propTypes = propTypes;

export default BooksSeries;

export const PageQuery = graphql`
  query BooksSeriesQuery($slug: String!) {
    contentfulBooksSeriesSection(slug: {eq: $slug}) {
      id
      title
      learnMoreLink
      learnMoreLabel
      resourcesZip {
        id
        file {
          url
          fileName
          contentType
        }
      }
      books {
        id
        name
        link
        resourceFile {
          id
          file {
            url
            fileName
            contentType
          }
        }
        icon {
          svg {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulBooksSeriesSection {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;
