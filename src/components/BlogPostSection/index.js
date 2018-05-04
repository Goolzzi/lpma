import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import BlogPostCard from "../BlogPostCard";
import "./styles.scss";

const LoadMoreLink = () => (
  <div className="has-text-centered">
    <Link to="/blog">
      <button className="btn primary smaller-text">Load More</button>
    </Link>
  </div>
);

const propTypes = {
  heading: PropTypes.string.isRequired,
  blogs: PropTypes.array.isRequired,
  featured: PropTypes.bool,
  latest: PropTypes.bool,
  hasLoadMore: PropTypes.bool,
};

const BlogPostSection = ({heading, blogs, featured, latest, hasLoadMore}) => (
  <section className="section blog-featured">
    <div className="container">
      <div className="has-text-centered">
        <h2 className="title is-2">{heading}</h2>
        <div className="under-title" />
      </div>
      <div className="columns is-multiline">
        {blogs
          .filter(({node}) => (featured ? node.featured : true))
          .filter((_, index) => (latest ? index < 3 : true))
          .map(({node}) => (
            <div key={node.id} className="column is-4">
              <BlogPostCard node={node} />
            </div>
          ))}
      </div>
      {hasLoadMore ? <LoadMoreLink /> : null}
    </div>
  </section>
);

BlogPostSection.propTypes = propTypes;

export default BlogPostSection;
