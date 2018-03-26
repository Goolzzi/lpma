const path = require("path");

module.exports = function(data, createPage) {
  const conditionsTemplate = path.resolve("src/templates/conditions/index.js");
  data.allContentfulConditions.edges.forEach(({node}) => {
    createPage({
      path: `${node.slug}`,
      component: conditionsTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
