import React from "react";
import PropTypes from "prop-types";
import TopJumbotron from "../../components/TopJumbotron";
import BottomJumbotron from "../../components/BottomJumbotron";
import BlogPostSection from "../../components/BlogPostSection";
import GetUpdatesForm from "../../components/GetUpdatesForm";
import "./styles.scss";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const BlogPage = ({
  data: {
    allContentfulBlogPost: {edges: blogEdges},
    allContentfulBlogJumbotron: {edges},
  },
}) => (
  <React.Fragment>
    <TopJumbotron {...edges[0].node} />
    <BlogPostSection
      heading="Featured Posts"
      blogs={blogEdges}
      featured={true}
    />
    <BlogPostSection heading="Latest Posts" blogs={blogEdges} latest={true} />
    <GetUpdatesForm />
    <BottomJumbotron {...edges[1].node} />
  </React.Fragment>
);

BlogPage.propTypes = propTypes;

export default BlogPage;

export const pageQuery = graphql`
  query BlogPageQuery {
    allContentfulBlogJumbotron(sort: {fields: [pageLocation], order: DESC}) {
      edges {
        node {
          pageLocation
          jumbotron {
            joinLink {
              name
              to
            }
            background {
              id
              resolutions(quality: 100) {
                src
                srcSet
              }
            }
            title {
              title
            }
          }
        }
      }
    }
    allContentfulBlogPost(sort: {fields: [date], order: ASC}) {
      edges {
        node {
          image {
            resolutions(quality: 100) {
              src
              srcSet
            }
          }
          category
          date
          title
          author {
            name
            image {
              resolutions(quality: 100) {
                src
                srcSet
              }
            }
          }
          slug
          content {
            content
          }
          featured
        }
      }
    }
  }
`;
