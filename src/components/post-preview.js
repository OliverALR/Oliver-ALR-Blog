import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Body = styled(Link)`
  text-decoration: none;
  text-align: left;
  padding-bottom: 0.5em;
  cursor: pointer;

  & > p {
    color: rgb(40, 42, 53);
    font-size: 0.9em;
    margin-top: -0.25em;

    @media (min-width: 300px) and (max-width: 768px) {
      font-size: 0.8em;
    }
  }
`;

const Title = styled.h2`
  font-family: 'Jost';
  font-size: 2em;
  font-weight: bold;
  color: rgb(100, 49, 151);

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.7em;
  }
`;

const Slug = styled.h3`
  font-family: 'Jost', sans-serif;
  font-size: 1.25em;
  color: rgba(0, 0, 0, 0.55);
  margin-top: -0.35em;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const PostPreview = () => (
  <>
    <Body to="abrand-new-slug">
      <Title>Post Title</Title>
      <p>Publish Date &#x25CF; 3 min read</p>
      <Slug>This is the slug section</Slug>
      <div
        css={`
          border-bottom: solid 2px rgb(50, 64, 69, 0.25);
        `}
      ></div>
    </Body>
  </>
);

export default PostPreview;
