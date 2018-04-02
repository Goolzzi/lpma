import React from "react";
import PropTypes from "prop-types";
import {Icon} from "react-fa";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareCount,
  LinkedinShareCount,
} from "react-share";
import TopJumbotron from "../../components/TopJumbotron";
import BottomJumbotron from "../../components/BottomJumbotron";
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

const shareCount = count => <div className="text">{count || ""}</div>;

const propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const BlogPost = ({data, location}) => {
  const baseUrl = "https://lpma.netlify.com";
  const {pathname} = location;
  const {title, category, date, author, content} = data.contentfulBlogPost;
  const {edges} = data.allContentfulBlogPost;
  const {contentfulBlogJumbotron: bottomJumbotron} = data;
  const topJumbotron = generateBlogJumbotron(data.contentfulBlogPost);
  const otherBlogs = fisherYates(edges, 3);
  const blogUrl = `${baseUrl}${pathname}`;
  return (
    <React.Fragment>
      <TopJumbotron {...topJumbotron} />
      <BlogPageHeading blog={data.contentfulBlogPost} />
      <section className="section blog-social-icons">
        <div className="container narrow">
          <div className="wrapper">
            <div className="blog-social-icon twitter">
              <TwitterShareButton url={blogUrl}>
                <Icon name="twitter" />
              </TwitterShareButton>
            </div>
            <div className="blog-social-icon facebook">
              <FacebookShareButton url={blogUrl}>
                <Icon name="facebook" />
                <FacebookShareCount url={blogUrl}>
                  {shareCount}
                </FacebookShareCount>
              </FacebookShareButton>
            </div>
            <div className="blog-social-icon linkedin">
              <LinkedinShareButton url={blogUrl}>
                <Icon name="linkedin" />
                <LinkedinShareCount url={blogUrl}>
                  {shareCount}
                </LinkedinShareCount>
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-content">
        <div className="container narrow">
          <div
            className="wrapper markdown"
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
        </div>
      </section>
      <BlogPostSection
        heading="More Blog Posts"
        blogs={otherBlogs}
        hasLoadMore={true}
      />
      <BottomJumbotron {...bottomJumbotron} />
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
        childMarkdownRemark {
          html
        }
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
    contentfulBlogJumbotron(pageLocation: {eq: "bottom"}) {
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
`;
