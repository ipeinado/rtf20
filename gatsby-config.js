module.exports = {
  siteMetadata: {
    title: `Raising the Floor`,
    description: `Raising the Floor is an international organization dedicated to make technology accessible for all.`,
    author: `@raisingthefloor`,
    menuLinks: [
      {
        name: `home`,
        link: `/`
      },
      {
        name: `who we are`,
        link: `/who-we-are`
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://live-rtf19.pantheonsite.io/`,
        apiBase: `jsonapi`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raising the Floor - International`,
        short_name: `RtF`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rtf-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
