"use strict";
const path = require("path");
const _isEqual = require("lodash").isEqual;

module.exports = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    const sectionTemplate = path.resolve("src/templates/section/index.js");
    const subjectTemplate = path.resolve("src/templates/subject/index.js");
    const stepTemplate = path.resolve("src/templates/step/index.js");

    const foundryCrumb = {
      title: "My Foundry",
      path: "",
    };

    resolve(
      graphql(`
        {
          allContentfulFoundrySection {
            edges {
              node {
                id
                title
                slug
                subjects {
                  title
                  slug
                }
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
          allContentfulFoundryGuide {
            edges {
              node {
                title
                slug
                steps {
                  slug
                }
                foundrysubject {
                  title
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

        const subjectsMap = new Map();
        result.data.allContentfulFoundrySection.edges.forEach(({node}) => {
          node.subjects.forEach(subj => {
            subjectsMap.set(subj, {
              title: node.title,
              path: node.slug,
            });
          });

          createPage({
            path: `foundry/${node.slug}`,
            component: sectionTemplate,
            context: {
              slug: node.slug,
              id: node.slug,
              parentPath: `/foundry/`,
              breadCrumbs: [
                foundryCrumb,
                {
                  path: node.slug,
                  title: node.title,
                },
              ],
            },
          });
        });

        result.data.allContentfulFoundrySubject.edges.forEach(({node}) => {
          const crumb = {
            path: node.slug,
            title: node.title,
          };

          let parentCrumb;
          subjectsMap.forEach((val, key) => {
            if (_isEqual(key, {title: node.title, slug: node.slug})) {
              parentCrumb = val;
            }
          });
          createPage({
            path: `foundry/${node.slug}`,
            component: subjectTemplate,
            context: {
              parentPath: `/foundry/`,
              slug: node.slug,
              id: node.slug,
              breadCrumbs: [foundryCrumb, parentCrumb, crumb],
            },
          });
        });
        result.data.allContentfulFoundryGuide.edges.forEach(
          ({node: {slug: parentSlug, steps, foundrysubject}}) => {
            const subjectTitle = foundrysubject[0].title;
            const subjectSlug = foundrysubject[0].slug;
            steps &&
              steps.forEach(({slug: childSlug}, stepIndex) => {
                createPage({
                  path: `foundry/${parentSlug}/${childSlug}`,
                  component: stepTemplate,
                  context: {
                    subjectTitle,
                    subjectPath: `/foundry/${subjectSlug}`,
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
