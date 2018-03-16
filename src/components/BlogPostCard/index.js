import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import "./styles.scss";

const LinkToBlog = ({slug, children}) => <Link to={slug}>{children}</Link>;

const propTypes = {
  node: PropTypes.object.isRequired,
};

// NODE: THIS HAS NOT BEEN TESTED!
const BlogPostCard = ({
  node: {
    title,
    image: {resolutions: imageResolutions},
    author: {image: {resolutions}, name},
    category,
    date,
    slug,
  },
}) => (
  <LinkToBlog slug={slug}>
    <div className="blog-post-card">
      <div className="image is-4by3">
        <img src={imageResolutions.src} srcSet={imageResolutions.srcSet} />
      </div>

      <span className="category-and-date">
        <span>{category}</span>
        <span>{date}</span>
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
