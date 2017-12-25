module.exports = {
  siteMetadata: {
    title: `lpma`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nq4swzsk9dgh`,
        accessToken: `ba8b8ceb07a42e08499a30361f30517ee29a0fd420aa0371f9ade92a2fd756c0`
      }
    }
  ]
};
