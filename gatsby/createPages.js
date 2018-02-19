"use strict";
const path = require("path");

module.exports = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  const foundryCrumb = {
    title: "My Foundry",
    to: "/",
  };

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
                title
                slug
              }
            }
          }
          allContentfulFoundrySubject {
            edges {
              node {
                id
                title
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

        const sectionBreadCrumbs = [foundryCrumb];

        result.data.allContentfulFoundrySection.edges.forEach(({node}) => {
          sectionBreadCrumbs[1] = {
            path: `foundry/${node.slug}`,
            title: node.title,
          };

          createPage({
            path: `foundry/${node.slug}`,
            component: sectionTemplate,
            context: {
              slug: node.slug,
              id: node.slug,
              subjectPath: `/foundry/`,
              breadCrumbs: [sectionBreadCrumbs[1]],
            },
          });
        });

        result.data.allContentfulFoundrySubject.edges.forEach(({node}) => {
          const crumb = {
            path: `foundry/${node.slug}`,
            title: node.title,
          };
          createPage({
            path: `foundry/${node.slug}`,
            component: subjectTemplate,
            context: {
              slug: node.slug,
              id: node.slug,
              breadCrumbs: [crumb],
            },
          });
        });
        result.data.allContentfulFoundryGude.edges.forEach(
          ({node: {slug: parentSlug, steps}}) => {
            steps &&
              steps.forEach(({slug: childSlug}, stepIndex) => {
                createPage({
                  path: `foundry/${parentSlug}/${childSlug}`,
                  component: stepTemplate,
                  context: {
                    stepIndex,
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
