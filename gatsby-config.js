module.exports = {
  siteMetadata: {
    title: `Shaker`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4u3pkg9o29tu`,
        accessToken: `fa071398fba4111330c2c697c2d739faba06d4069394343393965cf07c4af171`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Shaker",
        short_name: "Shaker",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        // icon: "", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    // `gatsby-transformer-remark`,
    // `gatsby-transformer-json`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    `gatsby-plugin-styled-components`
    // ,
    // `gatsby-plugin-netlify` // put last in the array
  ]
};