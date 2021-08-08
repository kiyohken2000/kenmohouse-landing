module.exports = {
  siteMetadata: {
    siteTitle: `Ocacatalk`,
    defaultTitle: `Ocacatalk`,
    siteTitleShort: `Ocacatalk`,
    siteDescription: `Ocacatalk: Drop-in live chat`,
    siteUrl: `https://ocacatalk.ml`,
    siteAuthor: `@votepurchase`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
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
        icon: `static/logo-lg.png`,
      },
    },
    `gatsby-plugin-sitemap`,
     {
       resolve: `gatsby-plugin-google-analytics`,
       options: {
         trackingId: `UA-181015020-7`,
       },
     },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ocacatalk.ml`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
