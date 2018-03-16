import React from "react";
import PropTypes from "prop-types";
import {Icon} from "react-fa";
import TopJumbotron from "../../components/TopJumbotron";
import BlogPostSection from "../../components/BlogPostSection";
import BlogPageHeading from "../../components/BlogPageHeading";
import {fisherYates} from "../../utils/index";
import "./styles.scss";

const generateBlogJumbotron = node => ({
  jumbotron: [
    {
      background: {
        resolutions: {
          src: node.image.resolutions.src,
          srcSet: node.image.resolutions.srcSet,
        },
      },
    },
  ],
});

const propTypes = {
  data: PropTypes.object.isRequired,
};

const BlogPost = ({data}) => {
  const {title, category, date, author, content} = data.contentfulBlogPost;
  const {edges} = data.allContentfulBlogPost;
  const jumbotronData = generateBlogJumbotron(data.contentfulBlogPost);
  const otherBlogs = fisherYates(edges, 3);
  return (
    <React.Fragment>
      <TopJumbotron {...jumbotronData} />
      <BlogPageHeading blog={data.contentfulBlogPost} />
      <section className="section blog-social-icons">
        <div className="container narrow">
          <div className="wrapper">
            <div className="blog-social-icon twitter">
              <Icon name="twitter" />
              <div className="text">123</div>
            </div>
            <div className="blog-social-icon facebook">
              <Icon name="facebook" />
              <div className="text">456</div>
            </div>
            <div className="blog-social-icon linkedin">
              <Icon name="linkedin" />
            </div>
            <div className="blog-social-icon envelope">
              <Icon name="envelope" />
            </div>
            <span className="shares-count">668 Shares</span>
          </div>
        </div>
      </section>

      <section className="section blog-content">
        <div className="container narrow">
          <div className="wrapper">{content.content}</div>
        </div>
      </section>
      <BlogPostSection heading="More Blog Posts" blogs={otherBlogs} />
    </React.Fragment>
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
        resolutions(quality: 100) {
          src
          srcSet
        }
      }
      category
      content {
        id
        content
      }
      author {
        name
        image {
          resolutions(quality: 100) {
            src
            srcSet
          }
        }
      }
    }
    allContentfulBlogPost(limit: 3) {
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
          featured
        }
      }
    }
  }
`;
