import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  info: PropTypes.array.isRequired,
};
const TopInfoColumns = ({info}) => (
  <section className="section top-columns">
    <div className="columns is-multiline is-gapless">
      {info.map(
        ({
          id,
          childContentfulColumnTextRemarkContentTextNode: {childMarkdownRemark},
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
);

TopInfoColumns.propTypes = propTypes;

export default TopInfoColumns;
