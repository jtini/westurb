module.exports = {
  siteMetadata: {
    title: `WestUrb | Western Urban Sustainability Advisors, LLC`,
    description: `WestUrb assists local governments (cities, counties, school districts, regional planning agencies) in creating and improving programs in the areas of sustainability, resilience, restoration and regeneration`,
    siteUrl: `https://www.westurb.com`,
    author: `@jtinianow`,
  },
  // Only use pathPrefix with Github Pages
  pathPrefix: "/westurb",
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'uek3tne',
          families: ['Freight Sans Pro', 'Freight Text Pro']
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
