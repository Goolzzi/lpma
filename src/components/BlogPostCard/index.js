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
  node: {title, image, authorImage, category, date, author, slug},
}) => (
  <LinkToBlog slug={slug}>
    <div className="blog-post-card">
      <div className="image is-4by3">
        <img src={image.src} srcSet={image.srcSet} />
      </div>

      <span className="category-and-date">
        <span>{category}</span>
        <span>{date}</span>
      </span>

      <h4 className="title is-4">{title}</h4>

      <div className="image avatar is-48x48">
        <img src={authorImage.src} srcSet={authorImage.srcSet} />
      </div>
      <span className="author-name">{author}</span>
    </div>
  </LinkToBlog>
);

BlogPostCard.propTypes = propTypes;

export default BlogPostCard;
