const config = {
  "gatsby": {
    "pathPrefix": "/",
    "siteUrl": "https://creative-coding.underconstruction.fun",
    "gaTrackingId": null,
    "trailingSlash": false
  },
  "header": {
    "logo": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png",
    "logoLink": "https://learn.hasura.io",
    "title": "Creative Coding Course Notes",
    "githubUrl": "https://github.com/osteele/creative-coding.book",
    "helpUrl": "",
    "tweetText": "",
    "links": [
      { "text": "", "link": "" }
    ],
    "search": {
      "enabled": false,
      "indexName": "",
      "algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
      "algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      "algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
    }
  },
  "sidebar": {
    "forcedNavOrder": [
      "/index",
      "/setup-draw-and-call-graphs",
      "/variables",
      "/functions",
      "/arrays",
      "/objects",
      "/appendices",
    ],
    "collapsedNav": [
      "/codeblock" // add trailing slash if enabled above
    ],
    "links": [
      // { "text": "Hasura", "link": "https://hasura.io" },
    ],
    "frontline": false,
    "ignoreIndex": true,
  },
  "siteMetadata": {
    "title": "Creative Coding Course Notes",
    "description": "Documentation built with mdx and hasura/gatsby-gitbook-starter",
    "ogImage": null,
    "docsLocation": "https://github.com/osteele/creative-coding.book/tree/master/content",
    "favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
  },
  "pwa": {
    "enabled": false, // disabling this will also remove the existing service worker.
    "manifest": {
      "name": "Creative Coding Course Notes",
      "short_name": "CreativeCoding",
      "start_url": "/",
      "background_color": "#6b37bf",
      "theme_color": "#6b37bf",
      "display": "standalone",
      "crossOrigin": "use-credentials",
      icons: [
        {
          src: "src/pwa-512.png",
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  }
};

module.exports = config;
