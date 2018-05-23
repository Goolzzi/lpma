import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Auth from "../../Auth";

const JoinLpmaButton = ({joinLink, btnClassName}) => {
  if (!joinLink) {
    return null;
  }
  return (
    <Auth
      render={auth => {
        return !auth.isAuthenticated() ? (
          <Link {...joinLink}>
            <button className={btnClassName}>{joinLink.name}</button>
          </Link>
        ) : null;
      }}
    />
  );
};

JoinLpmaButton.propTypes = {
  joinLink: PropTypes.object,
  btnClassName: PropTypes.string.isRequired,
};

export default JoinLpmaButton;
