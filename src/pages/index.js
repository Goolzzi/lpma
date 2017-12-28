import React from "react";
import Link from "gatsby-link";

const IndexPage = ({data}) => (
  <div>
    <h1>index page</h1>

    <code>{JSON.stringify(data)}</code>
    <ul>
      {data.allContentfulBook.edges.map(({node: {title, id}}) => (
        <li key={id}>
          <Link to={id}>{title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default IndexPage;

export const pageQuery = graphql`
  query PageQuery {
    allContentfulBook(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`;
