import React from "react";
import PropTypes from "prop-types";
import LPMALink from "../../utils/LPMALink";
import TopJumbotron from "../../components/TopJumbotron";
import BlogPostCard from "../../components/BlogPostCard";
import "./styles.scss";

//TEMP
const tempData = {
  jumbotron: [
    {
      background: {
        resolutions: {
          src:
            "https://ipfs.io/ipfs/QmZuXwCEy5A3vgqJZqf4dHntNzS656bpnJxFkD67vvwExQ",
          srcSet:
            "https://ipfs.io/ipfs/QmZuXwCEy5A3vgqJZqf4dHntNzS656bpnJxFkD67vvwExQ",
        },
      },
      title: {
        title: "The Leading Property Managers Association Blog",
      },
    },
  ],
};

const propTypes = {
  data: PropTypes.object.isRequired,
};

const BlogPage = ({data: {allContentfulBlogJumbotron: {edges}}}) => (
  <React.Fragment>
    <TopJumbotron {...edges[0].node} />
    <section className="section blog-featured">
      <div className="container">
        <div className="has-text-centered">
          <h2 className="title is-2">Featured Posts</h2>
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
      </div>
    </section>

    <section className="section blog-latest">
      <div className="container">
        <div className="has-text-centered">
          <h2 className="title is-2">Latest Posts</h2>
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
  }
`;
