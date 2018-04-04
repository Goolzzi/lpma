import React, {Component} from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import DocumentCard from "../../../components/DocumentCard";
import BreadCrumb from "../../../components/BreadCrumb";
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
  render() {
    const {data} = this.props;
    return (
      <section className="section level-cards">
        <BreadCrumb parentPath="/foundry" crumbs={crumbs} />
        <div className="container">
          <div className="columns titles-wrapper">
            <div className="column">
              <h2 className="title is-4">Document Suite</h2>
            </div>
            <div className="column">
              <Link to="/contact" className="is-size-5">
                Feedback
              </Link>
            </div>
          </div>
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

          <Link
            to="/foundry"
            className="btn default with-radius-5 larger thirdwidth shadow">
            <span>Back to&nbsp;</span>
            <span className="has-text-weight-bold">Foundry</span>
          </Link>
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
  }
`;
