import React from "react";
import PropTypes from "prop-types";
import {Icon} from "react-fa";
import TopJumbotron from "../../components/TopJumbotron";
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
  const jumbotronData = generateBlogJumbotron(data.contentfulBlogPost);
  return (
    <React.Fragment>
      <TopJumbotron {...jumbotronData} />
      <section className="section blog-page-top">
        <div className="container narrow">
          <div className="wrapper">
            <div className="cont">
              <h2 className="title is-2">{title}</h2>
              <span className="category-and-date">
                <span>{category}</span>
                <span> | </span>
                <span>{date}</span>
              </span>

              <div className="author">
                <div className="image author-avatar is-64x64">
                  <img src="http://hanassets.nd.gov/images/product/test.png" />
                </div>
                <span className="author-name">{author.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="section blog-post-more">
        <div className="container narrow">
          <div className="has-text-centered">
            <h2 className="title is-2">More Blog Posts</h2>
            <div className="under-title" />
          </div>
          <div className="columns">
            <div className="column is-4">
              <div className="blog-post-card">
                <div className="image is-4by3">
                  <img src="https://ipfs.io/ipfs/QmZuXwCEy5A3vgqJZqf4dHntNzS656bpnJxFkD67vvwExQ" />
                </div>

                <span className="category-and-date">
                  <span>CATEGORY 1</span>
                  <span> | January 19, 2018</span>
                </span>

                <h4 className="title is-4">
                  The Top 5 Events Every PM MUST Attend This Year
                </h4>

                <div className="image avatar is-48x48">
                  <img src="http://hanassets.nd.gov/images/product/test.png" />
                </div>
                <span className="author-name">Adam Hooley</span>
              </div>
            </div>
            <div className="column is-4">
              <div className="blog-post-card">
                <div className="image is-4by3">
                  <img src="https://ipfs.io/ipfs/QmZuXwCEy5A3vgqJZqf4dHntNzS656bpnJxFkD67vvwExQ" />
                </div>

                <span className="category-and-date">
                  <span>CATEGORY 1</span>
                  <span> | January 19, 2018</span>
                </span>

                <h4 className="title is-4">
                  The Top 5 Events Every PM MUST Attend This Year
                </h4>

                <div className="image avatar is-48x48">
                  <img src="http://hanassets.nd.gov/images/product/test.png" />
                </div>
                <span className="author-name">Adam Hooley</span>
              </div>
            </div>
            <div className="column is-4">
              <div className="blog-post-card">
                <div className="image is-4by3">
                  <img src="https://ipfs.io/ipfs/QmZuXwCEy5A3vgqJZqf4dHntNzS656bpnJxFkD67vvwExQ" />
                </div>

                <span className="category-and-date">
                  <span>CATEGORY 1</span>
                  <span> | January 19, 2018</span>
                </span>

                <h4 className="title is-4">
                  The Top 5 Events Every PM MUST Attend This Year
                </h4>

                <div className="image avatar is-48x48">
                  <img src="http://hanassets.nd.gov/images/product/test.png" />
                </div>
                <span className="author-name">Adam Hooley</span>
              </div>
            </div>
          </div>
          <div className="has-text-centered">
            <button className="btn primary smaller-text">Load More</button>
          </div>
        </div>
      </section>
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
