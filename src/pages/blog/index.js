import React from "react";
import PropTypes from "prop-types";
import TopJumbotron from "../../components/TopJumbotron";
import BottomJumbotron from "../../components/BottomJumbotron";
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
    <BlogPostSection
      heading="Featured Posts"
      blogs={blogEdges}
      featured={true}
    />
    <BlogPostSection heading="Latest Posts" blogs={blogEdges} latest={true} />
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
                business, improve your skills, tips &amp; tricks and much, much
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
