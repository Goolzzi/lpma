import React from "react";
import PropTypes from "prop-types";
import LPMALink from "../../utils/LPMALink";
import "./styles.scss";

const propTypes = {
  title: PropTypes.object.isRequired,
  mainLinks: PropTypes.array.isRequired,
  secondaryLinks: PropTypes.array.isRequired,
  privacy: PropTypes.object.isRequired,
  logo: PropTypes.object.isRequired,
  forUSA: PropTypes.bool.isRequired,
  joinLink: PropTypes.object,
  socialLinks: PropTypes.array.isRequired,
};

//FIXME: improve footer for us and defoult view
const Footer = ({
  title,
  mainLinks,
  secondaryLinks,
  privacy,
  logo,
  joinLink,
  socialLinks,
  forUSA,
}) => {
  const menuItems = forUSA
    ? mainLinks.filter(({country}) => country === "us")
    : mainLinks;
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
              {menuItems.map(({id, name, to, force}) => {
                return (
                  <LPMALink force={force} key={id} to={to}>
                    {name}
                  </LPMALink>
                );
              })}
            </div>
            <div className="column footer-1">
              <div className="vertical-line" />
            </div>
            <div className="column footer-2 white-links-column with-button">
              {secondaryLinks.map(({id, name, to, force}) => (
                <LPMALink key={id} to={to} force={force}>
                  {name}
                </LPMALink>
              ))}
              <LPMALink {...joinLink}>
                <button className="btn primary fullwidth">
                  {joinLink.name}
                </button>
              </LPMALink>
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
