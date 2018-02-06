import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {};

const FoundrySection = props => (
  <div className="markdown">
    {/*<h1>{props.location.pathname}</h1>
    <code>{JSON.stringify(props)}</code>*/}

    <h3>asdasd</h3>
    <p>asd sdf sdf s</p>
    <blockquote>sdf sdf sdf sdfsd fs</blockquote>
  </div>
);

FoundrySection.propTypes = propTypes;

export default FoundrySection;

// export const pageQuery = graphql`
//   query FoundrySectionPageQuery {
//     allContentfulResoursesJumbotron() {
//     }
//   }
// `;
