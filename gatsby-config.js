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
        formatString: `YYYY年MM月DD日`,
        navigation: [
          {
            title: `ホーム`,
            slug: `/`,
          },
          {
            title: `ルール`,
            slug: `/terms`,
          },
          {
            title: `入り方`,
            slug: `/how-to-join`,
          },
          {
            title: `投票`,
            slug: `/vote`,
          },
        ],
        externalLinks: [
          {
            name: `💬 ディスコード`,
            url: `https://discord.gg/seheC2W`,
          },
          {
            name: `🐦 ツイッター`,
            url: `https://twitter.com/AzisabaNetwork`,
          },
          {
            name: `▶ YouTube`,
            url: `https://www.youtube.com/channel/UCHkH9_MKql1MFi0MZ_tqQbg`,
          },
          {
            name: `📷 ものすたぐらむ`,
            url: `https://monocraft.net/servers/xWBVrf1nqB2P0LxlMm2v/photos`
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
