const path = require("path");

module.exports = function(data, createPage) {
  const bcTemplate = path.resolve("src/templates/businessCapability/index.js");
  data.allContentfulBusinessCapability.edges.forEach(({node}) => {
    createPage({
      path: `foundry/${node.slug}`,
      component: bcTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
