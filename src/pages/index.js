import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import MemberBenefits from "../components/MemberBenefits";
import Testimonials from "../components/Testimonials";
import Audience from "../components/Audience";
import Top from "../components/Top";
import TopColumns from "../components/TopColumns";
import Exhibits from "../components/Exhibits";
import Bottom from "../components/Bottom";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const IndexPage = ({data}) => (
  <div>
    <Top />
    <TopColumns />
    <MemberBenefits />
    <Audience />
    <Testimonials />
    <Exhibits />
    <Bottom />
  </div>
);

IndexPage.propTypes = propTypes;

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
