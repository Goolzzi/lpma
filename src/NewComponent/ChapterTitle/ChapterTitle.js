import React from "react";
import PropTypes from "prop-types";

const ChapterTitle = ({order, title}) => (
  <div className="chapter-text-view">
    <h3>Chapter {order}:</h3>
    <h1>{title}</h1>
  </div>
);

ChapterTitle.propTypes = {
  order: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ChapterTitle;
