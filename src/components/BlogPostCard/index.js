import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import moment from "moment";
import "./styles.scss";

const LinkToBlog = ({slug, children}) => (
  <Link to={`/blog/${slug}`}>{children}</Link>
);

const propTypes = {
  node: PropTypes.object.isRequired,
};

// NODE: THIS HAS NOT BEEN TESTED!
const BlogPostCard = ({
  node: {
    title,
    author: {image: {resolutions}, name},
    category,
    date,
    slug,
    image: {resolutions: imageResolutions},
  },
}) => (
  <LinkToBlog slug={slug}>
    <div className="blog-post-card">
      <div className="image is-1.7by1">
        <img src={imageResolutions.src} srcSet={imageResolutions.srcSet} />
      </div>

      <span className="category-and-date">
        <span>{category}</span>
        <span> | </span>
        <span>{moment(date).format("MMMM D, YYYY")}</span>
      </span>

      <h4 className="title is-4">{title}</h4>

      <div className="image avatar is-48x48">
        <img src={resolutions.src} srcSet={resolutions.srcSet} />
      </div>
      <span className="author-name">{name}</span>
    </div>
  </LinkToBlog>
);

BlogPostCard.propTypes = propTypes;

export default BlogPostCard;
