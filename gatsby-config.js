module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mp4fj9fzt99q`,
        accessToken: `8eb674edd26e48fbd2b7d522a456cc75b4101451b7d070dceb92a0c4bad4991c`
      }
    }
  ]
};
