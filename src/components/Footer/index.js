import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {
  title: PropTypes.object.isRequired,
  mainLinks: PropTypes.array.isRequired,
  secondaryLinks: PropTypes.array.isRequired,
  privacy: PropTypes.object.isRequired,
  logo: PropTypes.object.isRequired,
  joinLink: PropTypes.object,
};

const Footer = ({
  title,
  mainLinks,
  secondaryLinks,
  privacy,
  logo,
  joinLink,
}) => (
  <div className="footer">
    <div className="footer-links">
      <div className="columns is-multiline">
        <div className="column footer-3 primary-links-column">
          <div
            dangerouslySetInnerHTML={{__html: title.childMarkdownRemark.html}}
          />
        </div>
        <div className="column footer-1">
          <div className="vertical-line" />
        </div>
        <div className="column footer-2 white-links-column">
          {mainLinks.map(({id, name, to}) => (
            <Link key={id} to={to}>
              {name}
            </Link>
          ))}
        </div>
        <div className="column footer-1">
          <div className="vertical-line" />
        </div>
        <div className="column footer-2 white-links-column with-button">
          {secondaryLinks.map(({id, name, to}) => (
            <Link key={id} to={to}>
              {name}
            </Link>
          ))}
          <Link to={joinLink.to}>
            <button className="btn primary fullwidth">{joinLink.name}</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <img src={logo.file.url} alt="lpma-logo" />
          </div>
          <div
            className="level-item"
            dangerouslySetInnerHTML={{__html: privacy.childMarkdownRemark.html}}
          />
        </div>
      </div>
    </div>
  </div>
);

Footer.propTypes = propTypes;

export default Footer;
