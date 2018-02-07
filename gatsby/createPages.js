"use strict";
const path = require("path");

module.exports = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    const sectionTemplate = path.resolve("src/templates/section/index.js");
    resolve(
      graphql(`
        {
          allContentfulFoundrySection {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulFoundrySection.edges.forEach(({node}) => {
          createPage({
            path: node.slug,
            component: sectionTemplate,
            context: {
              slug: node.slug,
              id: node.slug,
            },
          });
        });
      }),
    );
  });
};
