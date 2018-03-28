import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import LoginLogout from "../../components/LoginLogout";
import "./styles.scss";

const propTypes = {
  title: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  privacy: PropTypes.object.isRequired,
  logo: PropTypes.object.isRequired,
  forUSA: PropTypes.bool.isRequired,
  socialLinks: PropTypes.array.isRequired,
  contactInfo: PropTypes.object.isRequired,
};

//FIXME: improve footer for us and defoult view
const Footer = ({
  title,
  menu,
  privacy,
  contactInfo,
  logo,
  socialLinks,
  forUSA,
}) => {
  const menuItems = forUSA
    ? menu.filter(({country}) => country === "us")
    : menu;
  return (
    <div className="footer">
      {forUSA ? (
        <div className="usa-footer-links">
          <div className="columns is-gapless">
            <div className="column is-6 footer-left">
              <div
                dangerouslySetInnerHTML={{
                  __html: title.childMarkdownRemark.html,
                }}
              />
            </div>
            <div className="column is-6 footer-right">
              <div className="social-networks">
                <span>Follow us:</span>
                {socialLinks.map(({id, href, icon: {file}}) => (
                  <a key={id} href={href}>
                    <img
                      className="social-network-icon"
                      src={file.url}
                      alt="Facebook"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer-links">
          <div className="columns is-gapless">
            <div className="column footer-3 primary-links-column">
              <div
                dangerouslySetInnerHTML={{
                  __html: title.childMarkdownRemark.html,
                }}
              />
              <div className="social-networks">
                {socialLinks.map(({id, href, icon: {file}}) => (
                  <a key={id} href={href}>
                    <img
                      className="social-network-icon"
                      src={file.url}
                      alt="Facebook"
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="column footer-1">
              <div className="vertical-line" />
            </div>
            <div className="column footer-2 white-links-column">
              {menuItems.map(({id, name, to}) => {
                return (
                  <Link key={id} to={to}>
                    {name}
                  </Link>
                );
              })}
              <LoginLogout />
            </div>
            <div className="column footer-1">
              <div className="vertical-line" />
            </div>
            <div className="column footer-2 white-links-column with-button">
              <div
                className="contact-info-wrapper"
                dangerouslySetInnerHTML={{
                  __html: contactInfo.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>
      )}
      <div className="footer-copyright">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <img src={logo.file.url} alt="lpma-logo" />
            </div>
            <div
              className="level-item"
              dangerouslySetInnerHTML={{
                __html: privacy.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = propTypes;

export default Footer;
