import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import PostLayout from '../components/post-layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        image {
          sharp: childImageSharp {
            fluid(
              maxWidth: 100
              maxHeight: 100
              duotone: { shadow: "#663399", highlight: "#ddbbff" }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <PostLayout>
    <h1
      css={`
        color: rgb(100, 49, 151);
        font-family: 'Patua One';
        font-size: 2.25em;
      `}
    >
      {post.frontmatter.title}
    </h1>
    <p
      css={`
        font-family: 'Jost';
        font-size: 1.5em;
      `}
    >
      Published: {post.frontmatter.date}
    </p>

    <MDXRenderer>{post.body}</MDXRenderer>
  </PostLayout>
);

export default PostTemplate;
