import React, {Component} from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import DocumentCard from "../../../components/DocumentCard";
import BreadCrumb from "../../../components/BreadCrumb";
import {foundryCrumb, documentSuiteCrumb} from "../../../../gatsby/constants";
import {Icon} from "react-fa";
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
      <React.Fragment>
        <section className="section level-cards level-links">
          <div className="container">
            <div className="columns top-links">
              <div className="column">
                <Link to="/" className="is-size-5">
                  Looking for something?
                </Link>
                <Link to="/" className="is-size-5">
                  Feedback
                </Link>
              </div>
            </div>
            <div className="columns titles-wrapper">
              <div className="column">
                <h2 className="title is-4">Growth</h2>
              </div>
              <div className="column">
              </div>
            </div>

            <div className="columns is-multiline">
              <div className="column is-12">
                <h4 className="title is-5">Documents and Articles</h4>
                <Link to='/' className='level-link-item'>
                  <Icon name='download' />
                  asdasdasdasd
                </Link>
                <Link to='/' className='level-link-item'>
                  <Icon name='download' />
                  asdasdasdasd
                </Link>
                <Link to='/' className='level-link-item'>
                  <Icon name='download' />
                  asdasdasdasd
                </Link>

                <Link to='/' className='level-link-item see-all'>
                  See all
                </Link>
              </div>

              <div className="column is-12">
                <h4 className="title is-5">Video</h4>
                <Link to='/' className='level-link-item'>
                  <Icon name='download' />
                  asdasdasdasd
                </Link>
                <Link to='/' className='level-link-item'>
                  <Icon name='download' />
                  asdasdasdasd
                </Link>
                <Link to='/' className='level-link-item'>
                  <Icon name='download' />
                  asdasdasdasd
                </Link>

                <Link to='/' className='level-link-item see-all'>
                  See all
                </Link>
              </div>

              <div className="column is-12">
                <h4 className="title is-5">Audeo</h4>
                <Link to='/' className='level-link-item'>
                  <Icon name='download' />
                  asdasdasdasd
                </Link>
                <Link to='/' className='level-link-item'>
                  <Icon name='download' />
                  asdasdasdasd
                </Link>
                <Link to='/' className='level-link-item'>
                  <Icon name='download' />
                  asdasdasdasd
                </Link>

                <Link to='/' className='level-link-item see-all'>
                  See all
                </Link>
              </div>
            </div>

            <Link
              to="/foundry"
              className="btn default with-radius-5 larger thirdwidth shadow">
              Back
            </Link>
          </div>
        </section>


        <section className="section level-cards">
          <BreadCrumb parentPath="/foundry" crumbs={crumbs} />
          <div className="container">

            <div className="columns top-links">
              <div className="column">
                <Link to="/" className="is-size-5">
                  Looking for something?
                </Link>
                <Link to="/" className="is-size-5">
                  Feedback
                </Link>
              </div>
            </div>
            <div className="columns titles-wrapper">
              <div className="column">
                <h2 className="title is-4">Your business capabilities</h2>
                <h4 className="subtitle is-6">Artcles, videos and audio for you to browse.</h4>
              </div>
              <div className="column">
              </div>
            </div>
            <div className="columns is-multiline has-space-botton">
              <div className="column is-4 level-card-wrapper">
                <div className="level-card-item smaller has-text-centered">
                  <Link className="is-size-5 has-icon" to='/'>
                    <Icon name='dollar' />
                    Growth
                  </Link>
                </div>
              </div>

              <div className="column is-4 level-card-wrapper">
                <div className="level-card-item smaller has-text-centered">
                  <Link className="is-size-5 has-icon" to='/'>
                    <Icon name='dollar' />
                    Growth
                  </Link>
                </div>
              </div>

              <div className="column is-4 level-card-wrapper">
                <div className="level-card-item smaller has-text-centered">
                  <Link className="is-size-5 has-icon" to='/'>
                    <Icon name='dollar' />
                    Growth
                  </Link>
                </div>
              </div>

              <div className="column is-4 level-card-wrapper">
                <div className="level-card-item smaller has-text-centered">
                  <Link className="is-size-5 has-icon" to='/'>
                    <Icon name='dollar' />
                    Growth
                  </Link>
                </div>
              </div>

              <div className="column is-4 level-card-wrapper">
                <div className="level-card-item smaller has-text-centered">
                  <Link className="is-size-5 has-icon" to='/'>
                    <Icon name='dollar' />
                    Growth
                  </Link>
                </div>
              </div>

              <div className="column is-4 level-card-wrapper">
                <div className="level-card-item smaller has-text-centered">
                  <Link className="is-size-5 has-icon" to='/'>
                    <Icon name='dollar' />
                    Growth
                  </Link>
                </div>
              </div>
            </div>


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
      </React.Fragment>
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
