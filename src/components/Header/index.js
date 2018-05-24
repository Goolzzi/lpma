/* eslint jsx-a11y/anchor-is-valid : 0 */
import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import classNames from "classnames";
import Auth from "../../Auth";
import {v4} from "uuid";
import "./styles.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveMenu: false,
      isFoundryOpen: false,
    };
  }

  handleFoundryItemClick = () => {
    this.setState(({isActiveMenu}) => ({
      isActiveMenu: !isActiveMenu,
    }));
  };

  renderAddTeamMember = isAuthenticated => {
    if (isAuthenticated) {
      return (
        <button
          className="navbar-item add-member nav-btn"
          onClick={() => {
            window.location.replace("https://form.jotform.co/81208927601859");
          }}>
          Invite team
        </button>
      );
    }
    return null;
  };

  renderFoundrNavItems = (slug, name, isFoundryOpen, foundryLinks) => {
    return (
      <button
        key={slug}
        onClick={() =>
          this.setState(prevState => ({
            isFoundryOpen: !prevState.isFoundryOpen,
          }))
        }
        className={classNames("navbar-item has-dropdown", {
          "is-active": isFoundryOpen,
        })}>
        <a href={"javascript:;"} className="navbar-link">
          {name}
        </a>
        <div className="navbar-dropdown">
          <Link key={slug} to={`/foundry/`} className={"navbar-item"}>
            {"My Foundry"}
          </Link>
          {foundryLinks.edges.map(({node: {title, slug}}) => (
            <Link key={slug} to={`/foundry/${slug}`} className={"navbar-item"}>
              {title}
            </Link>
          ))}
        </div>
      </button>
    );
  };

  render() {
    const {topmenu, logo: {file}, foundryLinks} = this.props;
    const {isActive, isFoundryOpen} = this.state;

    return (
      <Auth
        render={auth => {
          this.auth = auth;
          const isAuthenticated = auth.isAuthenticated();
          return (
            <div className="navbar-wrapper">
              <nav className="navbar">
                <div className="navbar-brand">
                  <Link className="navbar-item" to={"/"}>
                    <img src={file.url} alt={file.fileName} />
                  </Link>
                  <button
                    onClick={() =>
                      this.setState(prevState => ({
                        isActive: !prevState.isActive,
                      }))
                    }
                    className={classNames("button navbar-burger", {
                      "is-active": isActive,
                    })}>
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
                <div
                  className={classNames("navbar-menu", {
                    "is-active": isActive,
                  })}>
                  <div className="navbar-end">
                    {topmenu.map(({id, to, name, authRequired, slug}) => {
                      if (slug === "foundry") {
                        return isAuthenticated ? (
                          this.renderFoundrNavItems(
                            slug,
                            name,
                            isFoundryOpen,
                            foundryLinks,
                          )
                        ) : (
                          <Link
                            className={"navbar-item"}
                            onClick={this.handleFoundryItemClick}
                            key={id}
                            to={to}>
                            {name}
                          </Link>
                        );
                      }
                      //hiding join nav item for logged in users.
                      if (slug === "join" && isAuthenticated) {
                        return null;
                      }
                      if (!authRequired || isAuthenticated) {
                        return (
                          <Link
                            key={v4()}
                            className={"navbar-item"}
                            onClick={this.handleFoundryItemClick}
                            to={to}>
                            {name}
                          </Link>
                        );
                      }
                    })}
                    {this.renderAddTeamMember(isAuthenticated)}
                    {this.props.renderLoginLogout()}
                  </div>
                </div>
              </nav>
            </div>
          );
        }}
      />
    );
  }
}

Header.propTypes = {
  topmenu: PropTypes.array.isRequired,
  logo: PropTypes.object.isRequired,
  foundryLinks: PropTypes.object.isRequired,
  renderLoginLogout: PropTypes.func.isRequired,
};

export default Header;
