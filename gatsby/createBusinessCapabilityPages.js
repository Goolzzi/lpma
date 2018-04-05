const path = require("path");
const constants = require("./constants");
const {foundryCrumb} = constants;

module.exports = function(data, createPage) {
  const bcTemplate = path.resolve("src/templates/businessCapability/index.js");
  data.allContentfulBusinessCapability.edges.forEach(({node}) => {
    createPage({
      path: `foundry/${node.slug}`,
      component: bcTemplate,
      context: {
        slug: node.slug,
        parentPath: `/foundry/`,
        breadCrumbs: [
          foundryCrumb,
          {
            path: node.slug,
            title: node.name,
          },
        ],
      },
    });
  });
};
