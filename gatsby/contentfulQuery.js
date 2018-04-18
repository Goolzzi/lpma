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
  allContentfulConditions {
    edges {
      node {
        title
        slug
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
  allContentfulDocumentsCountry {
    edges {
      node {
        slug
        name
        regions {
            id
            name
            slug
            abbreviation
            downloads {
              ... on ContentfulDocumentList {
                id
                title
                slug
              }
            }
          }
      }
    }
  }
  allContentfulDocumentsRegion {
    edges {
      node {
        name
        slug
        downloads {
          ... on ContentfulDocumentList {
            id
            title
            slug
          }
        }
      }
    }
  }
  allContentfulBusinessCapability {
    edges {
      node {
        slug
        name
      }
    }
  }
}
`;
