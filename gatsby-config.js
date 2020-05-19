module.exports = {
  siteMetadata: {
    title: 'Oliver ALR | Blog',
    description: 'My own blazing fast blog powered by Gatsby',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Jost'],
        },
      },
    },
  ],
};
