"use strict";
const path = require("path");

module.exports = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    const sectionTemplate = path.resolve("src/templates/section/index.js");
    const subjectTemplate = path.resolve("src/templates/subject/index.js");
    const stepTemplate = path.resolve("src/templates/step/index.js");

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
          allContentfulFoundrySubject {
            edges {
              node {
                id
                slug
              }
            }
          }
          allContentfulFoundryGude {
            edges {
              node {
                title
                slug
                steps {
                  slug
                }
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
            path: `foundry/${node.slug}`,
            component: sectionTemplate,
            context: {
              slug: node.slug,
              id: node.slug,
              subjectPath: `/foundry/`,
            },
          });
        });
        result.data.allContentfulFoundrySubject.edges.forEach(({node}) => {
          createPage({
            path: `foundry/${node.slug}`,
            component: subjectTemplate,
            context: {
              slug: node.slug,
              id: node.slug,
            },
          });
        });
        result.data.allContentfulFoundryGude.edges.forEach(
          ({node: {slug: parentSlug, steps}}) => {
            steps &&
              steps.forEach(({slug: childSlug}) => {
                createPage({
                  path: `foundry/${parentSlug}/${childSlug}`,
                  component: stepTemplate,
                  context: {
                    slug: childSlug,
                    parentSlug,
                  },
                });
              });
          },
        );
      }),
    );
  });
};
