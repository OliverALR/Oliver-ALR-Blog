import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PostLayout from '../components/post-layout';

const PostTemplate = () => (
  <PostLayout>
    <h1
      css={`
        color: rgb(100, 49, 151);
        font-size: 1.25em;
      `}
    >
      Post Title
    </h1>
    <p>This is the post subtitle</p>
    <MDXRenderer>{`This is some content`}</MDXRenderer>
  </PostLayout>
);

export default PostTemplate;
