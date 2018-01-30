import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const LPMATeam = ({title, author, content, image: {resolutions}}) => (
  <section className="section our-team">
    <h3>{title}</h3>
    <div className="columns is-multiline out-team-item">
      <div className="column img-col is-3">
        <div className="img-wrapper">
          <img
            src={resolutions.src}
            srcSet={resolutions.srcSet}
            alt="prof-pic"
          />
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
