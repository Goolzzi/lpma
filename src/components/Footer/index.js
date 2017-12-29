import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const propTypes = {
  copyrightHTML: PropTypes.string.isRequired,
};

const Footer = ({copyrightHTML}) => (
  <footer className="footer footer-site">
    page footer
    <div
      className="footer-copyright"
      dangerouslySetInnerHTML={{__html: copyrightHTML}}
    />
  </footer>
);

Footer.propTypes = propTypes;

export default Footer;
