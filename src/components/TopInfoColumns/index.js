import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  info: PropTypes.array.isRequired,
};
const TopInfoColumns = ({info}) => (
  <React.Fragment>
    <section className="section top-columns">
      <div className="columns is-multiline is-gapless">
        {info.map(
          ({
            id,
            childContentfulColumnTextRemarkContentTextNode: {
              childMarkdownRemark,
            },
          }) => (
            <div
              className="column is-6 is-12-mobile top-column"
              key={id}
              dangerouslySetInnerHTML={{__html: childMarkdownRemark.html}}
            />
          ),
        )}
      </div>
    </section>

    <section className="section top-columns-us">
      <div className="columns is-multiline is-gapless">
        {info.map(
          ({
            id,
            childContentfulColumnTextRemarkContentTextNode: {
              childMarkdownRemark,
            },
          }) => (
            <div
              className="column is-12 top-column"
              key={id}
              dangerouslySetInnerHTML={{__html: childMarkdownRemark.html}}
            />
          ),
        )}
      </div>
    </section>
  </React.Fragment>
);

TopInfoColumns.propTypes = propTypes;

export default TopInfoColumns;
