import React, {Component} from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import LPMALogo from "../../../../assets/images/NewDesign/Header/logo.svg";
import "./styles.scss";

const propTypes = {
  currentSectionId: PropTypes.string.isRequired,
  resourceTitle: PropTypes.string.isRequired,
  sections: PropTypes.array.isRequired,
};

class BooksHeading extends Component {
  renderBooksSectionLinks = () => {
    const {currentSectionId, sections} = this.props;

    return (
      <div className="column is-6">
        <div className="has-text-right-tablet">
          <div className="is-inline-block has-text-left">
            <span>Other books in the series:</span>
            <br />
            {sections
              .filter(({node: section}) => section.id !== currentSectionId)
              .map(({node: section}, index) => {
                const isNotLast = index !== sections.length - 2;
                return (
                  <React.Fragment key={section.id}>
                    <Link
                      to={`/tools/${section.slug}`}
                      className="has-text-white">
                      {section.title}
                    </Link>
                    {isNotLast ? <span> | </span> : null}
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <section className="section building-blocks-top">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-6">
              <img src={LPMALogo} alt="this is logo" width="80" />
            </div>
            {this.renderBooksSectionLinks()}
            <div className="column is-12">
              <h1 className="title is-1 has-text-white has-text-weight-normal">
                {`${this.props.resourceTitle} resources`}
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

BooksHeading.propTypes = propTypes;

export default BooksHeading;
