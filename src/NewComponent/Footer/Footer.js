import React from "react";
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";

const Footer = ({footerIn}) => (
  <CSSTransition in={footerIn} timeout={1000} classNames="footer" unmountOnExit>
    <div className="footer-wrapper">
      <div className="mobile-column">
        <span className="email-us">
          <span className="email-label">Get in touch:</span>
          <span className="email-address">hello@lpma.com</span>
        </span>
        <span className="phone-aus">
          <span role="img" aria-label="flag">
            🇦🇺
          </span>{" "}
          AUS +61 29 146 0050
        </span>
      </div>
      <div className="mobile-column">
        <span className="phone-nz">
          <span role="img" aria-label="flag">
            🇳🇿
          </span>{" "}
          NZ +64 9 886 0520
        </span>
        <span className="phone-us">
          <span role="img" aria-label="flag">
            🇺🇸
          </span>{" "}
          USA 1 3056 092 757
        </span>
      </div>
    </div>
  </CSSTransition>
);

Footer.propTypes = {
  footerIn: PropTypes.bool,
};
Footer.defaultProps = {
  footerIn: false,
};

export default Footer;
