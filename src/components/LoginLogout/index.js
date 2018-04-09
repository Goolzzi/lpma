/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const LoginLogout = ({logout, login, isAuthenticated, cssClass}) => {
  if (isAuthenticated) {
    return (
      <a className={cssClass} onClick={() => logout()}>
        Logout
      </a>
    );
  }
  return (
    <a className={cssClass} onClick={() => login()}>
      Login
    </a>
  );
};

LoginLogout.propTypes = {
  logout: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  cssClass: PropTypes.string,
};

export default LoginLogout;
