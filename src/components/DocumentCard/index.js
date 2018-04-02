import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import {Icon} from "react-fa";
import "./styles.scss";

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  titleLink: PropTypes.string.isRequired,
  isDownloadable: PropTypes.bool.isRequired,
};

const DocumentCard = ({title, titleLink, isDownloadable, children}) => (
  <div className="column is-6 level-card-wrapper">
    <div className="level-card-item">
      {isDownloadable ? (
        <a href={titleLink}>
          <h4 className="title is-5"><Icon name='download' /> {title}</h4>
        </a>
      ) : (
        <Link to={titleLink}>
          <h4 className="title is-5">{title}</h4>
        </Link>
      )}
      {children}
    </div>
  </div>
);

DocumentCard.propTypes = propTypes;

export default DocumentCard;
