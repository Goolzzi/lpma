import React, {Component} from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import DocumentCard from "../../../components/specific/foundry/DocumentCard";
import BreadCrumb from "../../../components/BreadCrumb";
import BackToFoundryButton from "../../../components/BackToFoundryButton";
import BCCard from "../../../components/specific/foundry/BCCard";
import TopLinks from "../../../components/specific/foundry/TopLinks";
import DocumentTitle from "../../../components/specific/foundry/DocumentTitle";
import {foundryCrumb, documentSuiteCrumb} from "../../../../gatsby/constants";
import "./styles.scss";

const crumbs = [foundryCrumb, documentSuiteCrumb];

const renderRegionLinks = regions => (
  <p>
    Jump to:{" "}
    {regions.map(({id, abbreviation, slug}) => (
      <Link key={id} to={`/foundry/documents/${slug}`} className="region-link">
        {abbreviation}
      </Link>
    ))}
  </p>
);

const renderCountryDetails = country => (
  <React.Fragment>
    <p>{country.excerpt}</p>
    {country.hasRegions ? (
      renderRegionLinks(country.regions)
    ) : (
      <React.Fragment />
    )}
  </React.Fragment>
);

const propTypes = {
  data: PropTypes.object.isRequired,
};

class DocumentsPage extends Component {
  renderBusinessCapabilities = () => {
    const {data: {allContentfulBusinessCapability}} = this.props;
    return (
      <div className="columns is-multiline has-space-botton">
        {allContentfulBusinessCapability.edges.map(({node}) => (
          <BCCard key={node.id} node={node} />
        ))}
      </div>
    );
  };

  renderDocuments = () => {
    const {data} = this.props;
    return (
      <div className="columns is-multiline">
        {data.allContentfulDocumentsCountry.edges.map(({node: country}) => (
          <DocumentCard
            key={country.id}
            title={country.name}
            titleLink={`/foundry/documents/${country.slug}`}>
            {renderCountryDetails(country)}
          </DocumentCard>
        ))}
      </div>
    );
  };

  render() {
    return (
      <section className="section level-cards">
        <BreadCrumb parentPath="/foundry" crumbs={crumbs} />
        <div className="container">
          <TopLinks />
          <DocumentTitle
            title="Your business capabilities"
            subtitle="Artcles, videos and audio for you to browse."
          />
          {this.renderBusinessCapabilities()}
          <DocumentTitle
            title="Document Suite"
            subtitle="Artcles, videos and audio for you to browse."
          />
          {this.renderDocuments()}
          <BackToFoundryButton />
        </div>
      </section>
    );
  }
}

DocumentsPage.propTypes = propTypes;

export default DocumentsPage;

export const pageQuery = graphql`
  query DocumentsPageQuery {
    allContentfulDocumentsCountry {
      edges {
        node {
          slug
          name
          excerpt
          hasRegions
          regions {
            id
            abbreviation
            slug
          }
        }
      }
    }
    allContentfulBusinessCapability {
      edges {
        node {
          id
          slug
          name
          iconName
        }
      }
    }
  }
`;
