import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
};

const LPMATeam = ({title, author, content, image: {sizes}}) => (
  <section className="section our-team">
    <h3>{title}</h3>
    <div className="columns is-multiline out-team-item">
      <div className="column img-col is-3">
        <div className="img-wrapper image-wrapper">
          <Img sizes={sizes} />
        </div>
      </div>
      <div className="column is-9">
        <div
          dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}
        />
        <span className="member-name">{author}</span>
      </div>
    </div>
  </section>
);

LPMATeam.propTypes = propTypes;

export default LPMATeam;
