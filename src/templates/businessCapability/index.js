import React from "react";
import PropTypes from "prop-types";

const propTypes = {};

const BusinessCapability = ({}) => <div />;

export default BusinessCapability;

export const pageQuery = graphql`
  query BusinessCapabilityQuery($slug: String!) {
    contentfulBusinessCapability(slug: {eq: $slug}) {
      id
    }
  }
`;
