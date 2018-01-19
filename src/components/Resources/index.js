import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const ResurceItem = props => {
  const {
    title,
    downloadLink,
    orderLink,
    description: {childMarkdownRemark},
    image,
  } = props;

  return (
    <div className="column is-4-desktop is-6-tablet is-12-mobile resource-item">
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{__html: childMarkdownRemark.html}} />
      {image ? (
        <div className="image is-16by9">
          <img
            src={image.resolutions.src}
            srcSet={image.resolutions.srcSet}
            alt=""
          />
        </div>
      ) : (
        <React.Fragment />
      )}
      <div className="button-wrapper">
        {orderLink ? (
          <Link to={orderLink.to}>
            <button className="btn secondary halfwidth">
              {orderLink.name}
            </button>
          </Link>
        ) : (
          <a href={downloadLink.resourseHref} download>
            <button className="btn secondary halfwidth">
              {downloadLink.name}
            </button>
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
