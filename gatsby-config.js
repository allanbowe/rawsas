/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = {
  siteMetadata: {
    title: `Raw SAS - SAS Tips n Tricks`,
    description: `Tips n Tricks and other SAS Titbits from around 10 years of SAS projects and tinkering about with SAS`,
    siteUrl: 'https://rawsas.com/',
    author: 'Allan Bowe',
    twitter: '',
    facebook: '',
    youtube: '',
    linkedin: '',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/resources/`,
        name: 'resources',
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'posts',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'lunr',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        //engineOptions: 'speed',

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMarkdownRemark {
              nodes {
                id
                html
                frontmatter {
                  title
                  path
                  tags
                  date(formatString: "MMM DD, YYYY")
                }
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title', 'html'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        //store: ['id', 'path', 'title'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            path: node.frontmatter.path,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            tags: node.frontmatter.tags,
            html: node.html,
          })),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 750,
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Raw SAS - SAS Tips n Tricks',
        short_name: 'Raw SAS',
        description:
          'Tips n Tricks and other SAS Titbits from around 10 years of SAS projects and tinkering about with SAS',
        siteUrl: 'https://rawsas.com/',
        author: 'Allan Bowe',
        homepage_url: 'https:/rawsas.com/',
        start_url: '/',
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: 8,
        matomoUrl: 'https://analytics.4gl.io/',
        siteUrl: 'https://rawsas.com/',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
  ],
}
