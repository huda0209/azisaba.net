module.exports = {
  siteMetadata: {
    siteTitle: `アジ鯖`,
    defaultTitle: `アジ鯖`,
    siteTitleShort: `アジ鯖`,
    siteDescription: `アジ鯖、たのしい。`,
    siteUrl: `https://azisaba.net`,
    siteAuthor: `@azisaba`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7FFFD4`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/azisaba/web`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://azisaba.net`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
