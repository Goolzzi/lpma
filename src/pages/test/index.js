import React from "react";
import styles from "./index.module.scss";

const IndexPage = ({ data }) => (
  <div>
    <code>{JSON.stringify(data)}</code>
    <span className={styles.message}>skad;lkas;ldk;askd;</span>
    <span className="message">skad;lkas;ldk;askd;</span>
  </div>
);

export default IndexPage;

export const pageQuery2 = graphql`
  query PageQuery2 {
    contentfulBook {
      id
      title
      author
    }
  }
`;
