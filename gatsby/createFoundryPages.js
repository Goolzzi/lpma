const path = require("path");
const _isEqual = require("lodash").isEqual;

module.exports = function(data, createPage) {
  const sectionTemplate = path.resolve("src/templates/section/index.js");
  const subjectTemplate = path.resolve("src/templates/subject/index.js");
  const stepTemplate = path.resolve("src/templates/step/index.js");

  const foundryCrumb = {
    title: "My Foundry",
    path: "",
  };

  const subjectsMap = new Map();

  data.allContentfulFoundrySection.edges.forEach(({node}) => {
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

  const obj = {};
  data.allContentfulFoundrySubject.edges.forEach(({node}) => {
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

    obj[crumb.slug] = breadCrumbs;

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
  data.allContentfulFoundryGuide.edges.forEach(
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
              breadCrumbs: [...obj[foundrysubject.slug], {title, path: ""}],
            },
          });
        });
    },
  );
};
