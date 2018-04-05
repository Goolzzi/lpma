import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import {Icon} from "react-fa";
import DocumentCard from "../../components/specific/foundry/DocumentCard";
import BreadCrumb from "../../components/BreadCrumb";
import BackToFoundryButton from "../../components/BackToFoundryButton";
import "./styles.scss";

const renderRegions = regions =>
  regions.map(region => (
    <DocumentCard
      key={region.id}
      title={region.name}
      titleLink={`/foundry/documents/${region.slug}`}>
      <p>{region.excerpt}</p>
    </DocumentCard>
  ));

const renderDocuments = documents =>
  documents.map(document => (
    <DocumentCard
      key={document.id}
      isDownloadable
      title={document.linkTitle}
      titleLink={document.link}>
      <p>{document.description}</p>
    </DocumentCard>
  ));

const propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
};

const CountryTemplate = ({
  pathContext: {parentPath, breadCrumbs},
  data: {
    contentfulDocumentsCountry: {
      name,
      excerpt,
      downloadAllLink,
      hasRegions,
      regions,
      documents,
    },
  },
}) => (
  <section className="section level-cards">
    <BreadCrumb parentPath={parentPath} crumbs={breadCrumbs} />
    <div className="container">
      <div className="columns titles-wrapper">
        <div className="column">
          <h2 className="title is-4">{name}</h2>
        </div>
        <div className="column">
          <Link to="/contact" className="is-size-5">
            Feedback
          </Link>
        </div>
      </div>
      <p>{excerpt}</p>
      <p>
        {downloadAllLink ? (
          <a href={downloadAllLink}>
            <Icon name="download" /> Download all
          </a>
        ) : (
          <React.Fragment />
        )}
      </p>
      <div className="columns is-multiline">
        {hasRegions ? renderRegions(regions) : renderDocuments(documents)}
      </div>
      <BackToFoundryButton />
    </div>
  </section>
);

CountryTemplate.propTypes = propTypes;

export default CountryTemplate;

export const pageQuery = graphql`
  query CountryQuery($slug: String!) {
    contentfulDocumentsCountry(slug: {eq: $slug}) {
      name
      slug
      hasRegions
      documents {
        id
        link
        linkTitle
        description
      }
      regions {
        id
        name
        slug
        excerpt
      }
      excerpt
      downloadAllLink
    }
  }
`;
