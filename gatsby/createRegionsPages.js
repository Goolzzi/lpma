const path = require("path");

module.exports = function(data, createPage) {
  const regionTemplate = path.resolve("src/templates/region/index.js");
  data.allContentfulDocumentsRegion.edges.forEach(({node}) => {
    createPage({
      path: `/foundry/documents/${node.slug}`,
      component: regionTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};