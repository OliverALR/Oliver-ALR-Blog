module.exports = {
  siteMetadata: {
    title: 'My Blog',
    description: 'My own blazing fast blog powered by Gatsby',
  },
  plugins: [
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
    {
      resolve: 'gatsby-plugin-react-svg',
    },
  ],
};
