module.exports = {
  siteMetadata: {
    siteTitle: `アジ鯖公式ホームページ`,
    defaultTitle: `アジ鯖公式ホームページ | アジ鯖、たのしい。`,
    siteTitleShort: `アジ鯖`,
    siteDescription: `アジ鯖は誰でも楽しめるサーバーを提供し、日々進化を続けているJava版マインクラフトのサーバーです。`,
    siteUrl: `https://azisaba.net`,
    siteAuthor: `@azisaba`,
    siteImage: `/sexy-banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
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
        name: `アジ鯖公式ホームページ`,
        short_name: `アジ鯖`,
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
