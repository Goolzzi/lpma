import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  login: PropTypes.func.isRequired,
};

const BooksLoginMessage = ({login}) => (
  <section className="section building-blocks-login">
    <div className="container title-cont">
      <div className="columns">
        <div className="column is-9">
          <span className="is-size-5 has-text-weight-bold">
            If you’re an LPMA member login for access to exclusive resources
          </span>
        </div>
        <div className="column is-3">
          <button
            onClick={login}
            className="btn secondary smaller-text smaller fullwidth">
            Login
          </button>
        </div>
      </div>
    </div>
  </section>
);

BooksLoginMessage.propTypes = propTypes;

export default BooksLoginMessage;
