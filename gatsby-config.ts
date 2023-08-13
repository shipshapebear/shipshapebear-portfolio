import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const prismicConfig = require("./prismic-configuration");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Aaron Jay`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `shipshapebear`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require("./src/utils/linkResolver").linkResolver,
      },
    },
    // {
    //   resolve: "gatsby-plugin-prismic-previews",
    //   options: {
    //     repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    //     accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    //   },
    // },
    // "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap`,
          },
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
