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
    // `gatsby-transformer-remark`,
    // `gatsby-transformer-json`,
    // `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    `gatsby-plugin-netlify` // put last in the array
  ]
};