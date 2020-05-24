module.exports = {
  siteMetadata: {
    title: 'Oliver ALR | Blog',
    description: 'My own blazing fast blog powered by Gatsby',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/post-layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [
          { resolve: 'gatsby-remark-images', options: { maxWidth: 590 } },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `Balsamiq Sans`,
          `Cabin`,
          `Jost`,
          `Patua One`,
          `sans-serif\:400,500,700,800`,
          `cursive\:400,800`,
        ],
        display: 'swap',
      },
    },
  ],
};
