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
        spaceId: process.env.CONTENTFUL_SPACE_ID || "",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-catch-links`,
  ],
};
