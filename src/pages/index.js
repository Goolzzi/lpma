import React from "react";
import Link from "gatsby-link";

class A extends React.Component {
  aaa = () => {};

  render() {
    return <React.Fragment>sdsds</React.Fragment>;
  }
}

const IndexPage = ({data}) => (
  <div>
    <React.Fragment>sdsds</React.Fragment>;
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
