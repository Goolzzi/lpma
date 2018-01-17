import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {
  topmenu: PropTypes.array.isRequired,
  logo: PropTypes.object.isRequired,
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    const {topmenu, logo: {file}} = this.props;
    const {isActive} = this.state;
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to={"/"}>
            <img src={file.url} alt={file.fileName} />
          </Link>
          <button
            onClick={() => this.setState({isActive: !this.state.isActive})}
            className={`button navbar-burger ${isActive ? "is-active" : ""}`}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            {topmenu.map(({id, to, name}) => (
              <Link className="navbar-item" key={id} to={to}>
                {name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
