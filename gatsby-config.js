require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitleAlt: `アジ鯖ブログ - @azisaba/blog.azisaba.net`,
    siteTitle: `アジ鯖ブログ`,
    siteDescription: `アジ鯖が運営するちょっとしたブログです。`,
    siteUrl: `https://blog.azisaba.net`,
    author: `@YukiLeafX`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `記事一覧`,
            slug: `/blog`,
          },
          {
            title: `説明`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Discord`,
            url: `https://discord.gg/seheC2W`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/AzisabaNetwork`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `アジ鯖ブログ - @azisaba/blog.azisaba.net`,
        short_name: `アジ鯖ブログ`,
        description: `マインクラフトサーバーのアジ鯖が運営するとてもシンプルなブログです。サーバーの情報からサーバー開発のいろはまでいろいろな記事を書きます。`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f00`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
