require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `lpma`,
    siteUrl: `https://lpma.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || "",
        accessToken: "0afc8ae9e8ff21692ab7c4eadd546260bcf7f8d32ac2fb060322a09767074768" || "",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
