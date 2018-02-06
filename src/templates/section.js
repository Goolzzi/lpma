import React from "react";
import PropTypes from "prop-types";

const propTypes = {};

const FoundrySection = props => (
  <div>
    <h1>{props.location.pathname}</h1>
    <code>{JSON.stringify(props)}</code>
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
