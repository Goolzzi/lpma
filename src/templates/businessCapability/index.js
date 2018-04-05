import React from "react";
import PropTypes from "prop-types";
import BCSection from "../../components/specific/foundry/BCSection";

const documentTypes = [
  {documentType: "article", documentTypeTitle: "Documents and Articles"},
  {documentType: "video", documentTypeTitle: "Video"},
  {documentType: "audio", documentTypeTitle: "Audio"},
];

const propTypes = {
  data: PropTypes.object.isRequired,
};

const BusinessCapability = ({
  data: {contentfulBusinessCapability: {documents}},
}) => (
  <section>
    {documentTypes.map((documentType, index) => (
      <BCSection key={index} documents={documents} {...documentType} />
    ))}
  </section>
);

BusinessCapability.propTypes = propTypes;

export default BusinessCapability;

export const pageQuery = graphql`
  query BusinessCapabilityQuery($slug: String!) {
    contentfulBusinessCapability(slug: {eq: $slug}) {
      id
      name
      documents {
        id
        type
        title
        article
      }
    }
  }
`;
