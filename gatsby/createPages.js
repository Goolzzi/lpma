"use strict";

module.exports = ({boundActionCreators}) => {
  const {createRedirect} = boundActionCreators;
  createRedirect({
    fromPath: `/login/*`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `https://halo-identity.lpma.com.au/users/sign_in`,
  });
};
