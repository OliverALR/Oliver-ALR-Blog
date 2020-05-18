import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  text-align: left;
  padding-bottom: 0.5em;
  cursor: pointer;
  border-bottom: solid 1px rgb(50, 64, 69, 0.25);

  & > p {
    color: rgb(40, 42, 53);
    font-size: 0.9em;
    margin-top: -0.25em;
  }
`;

const Title = styled.h2`
  font-family: 'Jost', sans-serif;
  font-size: 2em;
  font-weight: bold;
  color: rgb(100, 49, 151);
`;

const Slug = styled.h3`
  font-family: 'Jost', sans-serif;
  font-size: 1.25em;
  color: rgba(0, 0, 0, 0.55);
  margin-top: -0.35em;
`;

const PostPreview = () => (
  <>
    <Body>
      <Title>Post Title</Title>
      <p>Publish Date &#x25CF; 3 min read</p>
      <Slug>This is the slug section</Slug>
    </Body>
  </>
);

export default PostPreview;
