import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            date
            title
            slug
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map((post) => ({
    date: post.frontmatter.date,
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    excerpt: post.frontmatter.excerpt,
  }));
};

export default usePosts;
