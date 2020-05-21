// exports.createPages = async ({ action, graphql, reporter }) => {
//   const result = await graphql(`
//     query {
//       allMdx {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     reporter.panic('Failed to create Post', result.errors);
//   }

//   const posts = result.data.allMdx.nodes;

//   posts.forEach((post) => {
//     action.createPage({
//       path: post.frontmatter.slug,
//       component: require.resolve('./src/templates/post.js'),
//       context: {
//         slug: post.frontmatter.slug,
//       },
//     });
//   });
// };
