import React from "react";
import PropTypes from "prop-types";

const LoginLogout = ({logout, login, isAuthenticated, cssClass}) => {
  if (isAuthenticated) {
    return (
      <button className={cssClass} onClick={() => logout()}>
        Logout
      </button>
    );
  }
  return (
    <button className={cssClass} onClick={() => login()}>
      Login
    </button>
  );
};

LoginLogout.propTypes = {
  logout: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  cssClass: PropTypes.string,
};

export default LoginLogout;
