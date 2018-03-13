import React from "react";
import LPMALink from "../../utils/LPMALink";
import TopJumbotron from "../../components/TopJumbotron";
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
        title: "The Top 5 Events Every PM MUST Attend This Year",
      },
      centerCont: {
        category: "CATEGORY 1",
        date: "January 29, 2018",
        authorName: "Adam Hooley",
        authorAvatarSrc: "http://hanassets.nd.gov/images/product/test.png",
      },
    },
  ],
};

const BlogPostPage = () => (
  <React.Fragment>
    <TopJumbotron {...tempData} />
  </React.Fragment>
);

export default BlogPostPage;
