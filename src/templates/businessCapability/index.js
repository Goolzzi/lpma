import React from "react";
import PropTypes from "prop-types";
import BCSection from "../../components/specific/foundry/BCSection";
import BackToButton from "../../components/BackToButton";
import TopLinks from "../../components/specific/foundry/TopLinks";

const documentTypes = [
  {documentType: "article", documentTypeTitle: "Documents and Articles"},
  {documentType: "video", documentTypeTitle: "Video"},
  {documentType: "audio", documentTypeTitle: "Audio"},
];

const propTypes = {
  data: PropTypes.object.isRequired,
};

const BusinessCapability = ({
  data: {contentfulBusinessCapability: {name, documents}},
}) => (
  <section className="section level-cards level-links">
    <div className="container">
      <TopLinks />
      <div className="columns titles-wrapper">
        <div className="column">
          <h2 className="title is-4">{name}</h2>
        </div>
        <div className="column" />
      </div>
      {documentTypes.map((documentType, index) => (
        <BCSection key={index} documents={documents} {...documentType} />
      ))}
      <BackToButton to="/foundry/documents" prefix="Documents Suite" />
    </div>
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
        link
      }
    }
  }
`;
