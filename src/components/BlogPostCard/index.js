import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import moment from "moment";
import "./styles.scss";

const LinkToBlog = ({slug, children}) => (
  <Link to={`/blog/${slug}`}>{children}</Link>
);

const propTypes = {
  node: PropTypes.object.isRequired,
};

const BlogPostCard = ({
  node: {title, author: {image: {sizes}, name}, category, date, slug, image},
}) => (
  <LinkToBlog slug={slug}>
    <div className="blog-post-card">
      <div className="image is-1.7by1">
        <Img className="gatsbyImage" sizes={image.sizes} />
      </div>

      <span className="category-and-date">
        <span>{category}</span>
        <span> | </span>
        <span>{moment(date).format("MMMM D, YYYY")}</span>
      </span>

      <h4 className="title is-4">{title}</h4>

      <div className="image avatar is-48x48">
        <Img sizes={sizes} />
      </div>
      <span className="author-name">{name}</span>
    </div>
  </LinkToBlog>
);

BlogPostCard.propTypes = propTypes;

export default BlogPostCard;
