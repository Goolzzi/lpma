const path = require("path");
const constants = require("./constants");
const {DOCUMENTS_PATH, foundryCrumb, documentSuiteCrumb} = constants;

module.exports = function(data, createPage) {
  const documentsListTemplate = path.resolve(
    "src/templates/documentsList/index.js",
  );
  data.allContentfulDocumentsCountry.edges.forEach(({node: country}) => {
    if (country.regions) {
      country.regions.forEach(region =>
        region.downloads.forEach(download => {
          if (download.id) {
            createPage({
              path: `/foundry/documents/${region.slug}/${download.slug}`,
              component: documentsListTemplate,
              context: {
                slug: download.slug,
                parentSlug: region.slug,
                foundryCrumb,
                parentPath: "/foundry",
                breadCrumbs: [
                  foundryCrumb,
                  documentSuiteCrumb,
                  {
                    title: region.abbreviation,
                    path: `${DOCUMENTS_PATH}/${region.slug}`,
                  },
                  {
                    title: download.title,
                    path: `${DOCUMENTS_PATH}/${region.slug}/${download.slug}`,
                  },
                ],
              },
            });
          }
        }),
      );
    }
  });
};
