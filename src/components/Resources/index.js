import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Img from "gatsby-image";
import classNames from "classnames";
import "./styles.scss";

const ResurceItem = props => {
  const {
    title,
    downloadLink,
    orderLink,
    downloadableResources,
    description: {childMarkdownRemark},
    image,
  } = props;

  return (
    <div className="column is-4-desktop is-6-tablet is-12-mobile resource-item">
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{__html: childMarkdownRemark.html}} />
      {image ? (
        <div className="image is-1.5by1">
          <Img sizes={image.sizes} />
        </div>
      ) : null}
      <div
        className={classNames({
          "button-wrapper": true,
          static: !image,
        })}>
        {orderLink && (
          <Link to={orderLink.to}>
            <button className="btn secondary halfwidth">
              {orderLink.name}
            </button>
          </Link>
        )}
        {downloadableResources && (
          <a href={downloadableResources.file.url} download>
            <button className="btn secondary halfwidth">Download</button>
          </a>
        )}
      </div>
    </div>
  );
};

const propTypes = {
  info: PropTypes.array.isRequired,
  edges: PropTypes.array.isRequired,
};

const Resources = ({info, edges}) => {
  const {
    childContentfulColumnTextRemarkContentTextNode: {childMarkdownRemark},
  } = info[0];

  return (
    <section className="section resources">
      <p
        className="top-p"
        dangerouslySetInnerHTML={{__html: childMarkdownRemark.html}}
      />
      <div className="columns is-gapless is-multiline">
        {edges.map(({node}) => <ResurceItem key={node.id} {...node} />)}
      </div>
    </section>
  );
};

Resources.propTypes = propTypes;

export default Resources;
