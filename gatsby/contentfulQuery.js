module.exports = `
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
`;
