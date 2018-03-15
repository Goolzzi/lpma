import React from "react";
import PropTypes from "prop-types";
import BlogPostCard from "../BlogPostCard";
import "./styles.scss";

const propTypes = {
  heading: PropTypes.string.isRequired,
  blogs: PropTypes.array.isRequired,
};

const BlogPostSection = ({heading, blogs}) => (
  <section className="section blog-featured">
    <div className="container">
      <div className="has-text-centered">
        <h2 className="title is-2">{heading}</h2>
        <div className="under-title" />
      </div>
      <div className="columns is-multiline">
        {blogs.map(node => (
          <div key={node.id} className="column is-4">
            <BlogPostCard node={node} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

BlogPostSection.propTypes = propTypes;

export default BlogPostSection;
