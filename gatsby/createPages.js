"use strict";
const path = require("path");
const _isEqual = require("lodash").isEqual;

const buildFoundry = process.argv[3] === "foundry";
if (buildFoundry) console.log(" - - - building foundry");

module.exports = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  if (!buildFoundry) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const sectionTemplate = path.resolve("src/templates/section/index.js");
    const subjectTemplate = path.resolve("src/templates/subject/index.js");
    const stepTemplate = path.resolve("src/templates/step/index.js");
    const blogPostTemplate = path.resolve("src/templates/blogpost/index.js");
    const foundryPageTemplate = path.resolve("src/templates/foundry/index.js");

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
          allContentfulBlogPost {
            edges {
              node {
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
                  title
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

        createPage({
          path: `foundry/`,
          component: foundryPageTemplate,
        });

        result.data.allContentfulBlogPost.edges.forEach(({node}) => {
          createPage({
            path: `blog/${node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: node.slug,
            },
          });
        });

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

        const test = {};
        result.data.allContentfulFoundrySubject.edges.forEach(({node}) => {
          const crumb = {
            path: node.slug,
            title: node.title,
          };
          let breadCrumbs;

          let parentCrumb = null;
          subjectsMap.forEach((val, key) => {
            if (_isEqual(key, {title: node.title, slug: node.slug})) {
              parentCrumb = val;
            }
          });

          breadCrumbs = [foundryCrumb, parentCrumb, crumb];

          test[crumb.slug] = breadCrumbs;

          createPage({
            path: `foundry/${node.slug}`,
            component: subjectTemplate,
            context: {
              parentPath: `/foundry/`,
              slug: node.slug,
              id: node.slug,
              breadCrumbs,
            },
          });
        });
        result.data.allContentfulFoundryGuide.edges.forEach(
          ({node: {slug: parentSlug, steps, foundrysubject}}) => {
            const subjectTitle = foundrysubject ? foundrysubject[0].title : "";
            const subjectSlug = foundrysubject ? foundrysubject[0].slug : "";
            steps &&
              steps.forEach(({slug: childSlug, title}, stepIndex) => {
                createPage({
                  path: `foundry/${parentSlug}/${childSlug}`,
                  component: stepTemplate,
                  context: {
                    subjectTitle,
                    subjectPath: `/foundry/${subjectSlug}`,
                    stepIndex,
                    slug: childSlug,
                    parentSlug,
                    parentPath: `/foundry/`,
                    breadCrumbs: [
                      ...test[foundrysubject.slug],
                      {title, path: ""},
                    ],
                  },
                });
              });
          }
        );
      })
    );
  });
};
