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
};

const Footer = ({
  title,
  mainLinks,
  secondaryLinks,
  privacy,
  logo,
  joinLink,
  forUSA,
}) => {
  const menuItems = forUSA
    ? mainLinks.filter(({country}) => country === "us")
    : mainLinks;
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="columns is-gapless">
          <div className="column footer-3 primary-links-column">
            <div
              dangerouslySetInnerHTML={{__html: title.childMarkdownRemark.html}}
            />
          </div>
          <div className="column footer-1">
            <div className="vertical-line" />
          </div>
          <div className="column footer-2 white-links-column">
            {menuItems.map(({id, name, to, force}) => {
              return (
                <LPMALink force={!!force} key={id} to={to}>
                  {name}
                </LPMALink>
              );
            })}
          </div>
          <div className="column footer-1">
            <div className="vertical-line" />
          </div>
          <div className="column footer-2 white-links-column with-button">
            {secondaryLinks.map(({id, name, to}) => (
              <LPMALink key={id} to={to}>
                {name}
              </LPMALink>
            ))}
            <LPMALink to={joinLink.to}>
              <button className="btn primary fullwidth">{joinLink.name}</button>
            </LPMALink>
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
