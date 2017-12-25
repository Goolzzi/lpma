import React from "react";
import Link from "gatsby-link";

class A extends React.Component {
  aaa = () => {};

  render() {
    return <h1>sdsds</h1>;
  }
}

const IndexPage = ({ data }) => (
  <div>
    <h1>{JSON.stringify(data)}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;

export const pageQuery = graphql`
  query PageQuery {
    contentfulBook {
      id
      title
      author
    }
  }
`;
