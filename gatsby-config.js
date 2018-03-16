require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `lpma`,
    siteUrl: `https://lpma.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || "nq4swzsk9dgh",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "ba8b8ceb07a42e08499a30361f30517ee29a0fd420aa0371f9ade92a2fd756c0",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-catch-links`,
  ],
};
