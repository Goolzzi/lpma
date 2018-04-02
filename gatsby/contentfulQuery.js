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
      }
    }
  }
  allContentfulDocumentsRegion {
    edges {
      node {
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
}
`;
