import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Body = styled(Link)`
  text-decoration: none;
  text-align: left;
  padding-bottom: 0.65em;
  cursor: pointer;

  & > p {
    font-family: 'Jost';
    font-size: 0.9em;
    margin-top: -0.25em;

    @media (min-width: 300px) and (max-width: 768px) {
      font-size: 0.8em;
    }
  }
`;

const Title = styled.h2`
  font-family: 'Patua One';
  font-size: 2em;
  font-weight: 800;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.7em;
  }
`;

const Slug = styled.h3`
  font-family: 'Cabin';
  font-size: 1.25em;
  margin-top: -0.35em;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const PostPreview = ({ post }) => (
  <>
    <Body to={post.slug}>
      <Title>{post.title}</Title>
      <p>{post.date} &#x25CF; 3 min read 📖☕️</p>
      <Slug>{post.slug}</Slug>
      <div className="divisor"></div>
    </Body>
  </>
);

export default PostPreview;
