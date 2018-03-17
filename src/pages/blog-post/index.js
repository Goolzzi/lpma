import React from "react";
import Link from "gatsby-link";
import TopJumbotron from "../../components/TopJumbotron";
import "./styles.scss";
import {Icon} from "react-fa";

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
    },
  ],
};

const BlogPostPage = () => (
  <React.Fragment>
    <TopJumbotron {...tempData} />

    <section className="section blog-page-top">
      <div className="container narrow">
        <div className="wrapper">
          <div className="cont">
            <h2 className="title is-2">
              The Top 5 Events Every PM MUST Attend This Year
            </h2>
            <span className="category-and-date">
              <span>CATEGORY 1</span>
              <span> | </span>
              <span>January 29, 2018</span>
            </span>

            <div className="author">
              <div className="image author-avatar is-64x64">
                <img src="http://hanassets.nd.gov/images/product/test.png" />
              </div>
              <span className="author-name">Adam Hooley</span>
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
        <div className="wrapper">TEMP</div>
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

export default BlogPostPage;
