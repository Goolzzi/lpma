import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const BlogPost = ({data}) => {
  // TODO: use all data and styles
  const {title, category} = data.contentfulBlogPost;
  return (
    <div>
      <h2>{title}</h2>
      <h4>{category}</h4>
    </div>
  );
};

BlogPost.propTypes = propTypes;

export default BlogPost;

export const pageQuery = graphql`
  query BlogQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      slug
      date
      image {
        src
        srcSet
      }
      category
      content {
        id
        content
      }
      author
      authorImage {
        src
        srcSet
      }
    }
  }
`;
