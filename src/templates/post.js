import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PostLayout from '../components/post-layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
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
