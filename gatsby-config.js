require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitleAlt: `アジ鯖 - アジ鯖、たのしい。`,
    siteTitle: `アジ鯖`,
    siteDescription: `アジ鯖、たのしい。`,
    siteUrl: `https://azisaba.net`,
    author: `@YukiLeafX`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `ホーム`,
            slug: `/`,
          },
          {
            title: `はじめに`,
            slug: `/welcome`,
          },
          {
            title: `ルール`,
            slug: `/terms`,
          },
          {
            title: `参加方法`,
            slug: `/how-to-join`,
          },
          {
            title: `📚 すべての記事`,
            slug: `/blog`,
          },
          {
            title: `🏷 すべてのタグ`,
            slug: `/tags`,
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
          {
            name: `YouTube`,
            url: `https://www.youtube.com/channel/UCHkH9_MKql1MFi0MZ_tqQbg`,
          }
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
        name: `アジ鯖 - アジ鯖、たのしい。`,
        short_name: `アジ鯖`,
        description: `アジ鯖、たのしい。`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#345`,
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
