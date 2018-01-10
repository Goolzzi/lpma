import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {
  copyrightHTML: PropTypes.string.isRequired,
};

const Footer = ({copyrightHTML}) => (
  <div className="footer">
    <div className="footer-links">
      <div className="columns is-multiline">
        <div className="column footer-3 primary-links-column">
          <Link to="#">Leading Property</Link>
          <Link to="#">Managers Association</Link>
        </div>
        <div className="column footer-1">
          <div className="vertical-line" />
        </div>
        <div className="column footer-2 white-links-column">
          <Link to="#">Membership</Link>
          <Link to="#">Resources</Link>
          <Link to="#">Foundary</Link>
          <Link to="#">Events</Link>
          <Link to="#">Contact Us</Link>
          <Link to="#">About</Link>
          <Link to="#">Login</Link>
        </div>
        <div className="column footer-1">
          <div className="vertical-line" />
        </div>
        <div className="column footer-2 white-links-column with-button">
          <Link to="#">Building Your Business</Link>
          <Link to="#">Building Your Career</Link>

          <button className="btn primary fullwidth">Join the LPMA</button>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <img
              src={require("./../../assets/images/logo.svg")}
              alt="lpma-logo"
            />
          </div>
          <div
            className="level-item"
            dangerouslySetInnerHTML={{__html: copyrightHTML}}
          />
        </div>
      </div>
    </div>
  </div>
);

Footer.propTypes = propTypes;

export default Footer;
