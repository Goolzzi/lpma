const path = require("path");

module.exports = function(data, createPage) {
  const joinPageTemplate = path.resolve("src/templates/join/index.js");

  createPage({
    path: "join",
    component: joinPageTemplate,
    context: {},
  });

  // createPage({
  //   path: "join-us",
  //   component: joinPageTemplate,
  //   context: {},
  // });
};
