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
    excerpt: post.frontmatter.excerpt,
  }));
};

export default usePosts;
