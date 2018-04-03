const path = require("path");

module.exports = function(data, createPage) {
  const documentsListTemplate = path.resolve(
    "src/templates/documentsList/index.js",
  );
  data.allContentfulDocumentsRegion.edges.forEach(({node}) =>
    node.downloads.forEach(download => {
      if (download.id) {
        createPage({
          path: `/foundry/documents/${node.slug}/${download.slug}`,
          component: documentsListTemplate,
          context: {
            slug: download.slug,
            parentSlug: node.slug,
          },
        });
      }
    }),
  );
};
