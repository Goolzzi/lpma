import React from "react";
import PropTypes from "prop-types";
import LPMALink from "../../utils/LPMALink";
import TopJumbotron from "../../components/TopJumbotron";
import BlogPostSection from "../../components/BlogPostSection";
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
    <BlogPostSection heading="Featured Posts" blogs={blogEdges} />
    <BlogPostSection heading="Latest Posts" blogs={blogEdges} />
    <section className="section blog-subscribe">
      <div className="container">
        <div className="columns">
          <div className="column wrapper is-8 is-offset-2">
            <div className="cont">
              <h2 className="title is-2">
                Get the latest LPMA updates delivered straight to your inbox.
              </h2>
              <p>
                Each email will feature articles and advice on how to grow your
                business, improve your skills, tips & tricks and much, much
                more.
              </p>

              <input
                type="text"
                className="inp smaller bordered halfwidth"
                placeholder="Enter your email address to subscribe"
              />
              <button className="btn primary smaller">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    allContentfulBlogPost(sort: {fields: [date], order: DESC}, limit: 3) {
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
        }
      }
    }
  }
`;
