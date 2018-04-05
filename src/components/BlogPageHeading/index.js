import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import moment from "moment";
import "./styles.scss";

const propTypes = {
  blog: PropTypes.object.isRequired,
};

const BlogPageHeading = ({
  blog: {title, category, date, author: {name, image: {sizes}}},
}) => (
  <section className="section blog-page-top">
    <div className="container narrow">
      <div className="wrapper">
        <div className="cont">
          <h2 className="title is-2">{title}</h2>
          <span className="category-and-date">
            <span>{category}</span>
            <span> | </span>
            <span>{moment(date).format("MMMM D, YYYY")}</span>
          </span>

          <div className="author">
            <div className="image author-avatar is-64x64">
              <Img sizes={sizes} />
            </div>
            <span className="author-name">{name}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

BlogPageHeading.propTypes = propTypes;

export default BlogPageHeading;
