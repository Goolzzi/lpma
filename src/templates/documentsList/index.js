import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import DocumentCard from "../../components/specific/foundry/DocumentCard";
import BreadCrumb from "../../components/BreadCrumb";
import "./styles.scss";

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

const backPath = pathname => {
  let pathArray = pathname.split("/");
  pathArray.splice(-1, 1);
  return pathArray.join("/");
};

const propTypes = {
  data: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
};

const DocumentsList = ({
  pathContext: {parentPath, breadCrumbs},
  data: {
    contentfulDocumentsRegion: {name: parentName},
    contentfulDocumentList: {title, documents},
  },
  history: {location: {pathname}},
}) => (
  <section className="section level-cards">
    <BreadCrumb parentPath={parentPath} crumbs={breadCrumbs} />
    <div className="container">
      <div className="columns titles-wrapper">
        <div className="column">
          <h2 className="title is-4">
            {parentName} - {title}
          </h2>
        </div>
        <div className="column">
          <Link to="/contact" className="is-size-5">
            Feedback
          </Link>
        </div>
      </div>
      <div className="columns is-multiline">{renderDocuments(documents)}</div>
      <Link
        to={backPath(pathname)}
        className="btn default with-radius-5 larger thirdwidth shadow">
        <span>&lt; Back to&nbsp;</span>
        <span className="has-text-weight-bold">{parentName}</span>
      </Link>
    </div>
  </section>
);

DocumentsList.propTypes = propTypes;

export default DocumentsList;

export const pageQuery = graphql`
  query DocumentsListQuery($slug: String!, $parentSlug: String!) {
    contentfulDocumentList(slug: {eq: $slug}) {
      title
      documents {
        id
        linkTitle
        link
        description
      }
    }
    contentfulDocumentsRegion(slug: {eq: $parentSlug}) {
      name
    }
  }
`;
