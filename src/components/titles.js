import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Jost', sans-serif;
  font-weight: 800;
  font-size: 1.25em;
  text-align: center;
  color: rgb(51, 55, 70);
`;

const Desc = styled(Title)`
  font-size: 1.15em;
  margin: 0em 4em 0em 4em;
  padding-top: 0.25em;
`;

const Contact = styled(Title)`
  font-size: 1em;
  padding-top: 0.5em;
`;

const Titles = () => (
  <>
    <Title>
      Hi there!, I'm Oliver{' '}
      <span role="img" aria-label="waving hand">
        👋
      </span>
    </Title>
    <Desc>
      Welcome to my blog where you can find{' '}
      <span css="color: #F7E01E;">JavaScript</span>,{' '}
      <span css="color: #52D8FF;">React</span> and my
      <span css="color: #32C119;"> entrepreneurial adventures </span>related
      posts. I'll hope you enjoy it.
    </Desc>
    <Contact>You can keep in touch: oliveralr@protonmail.com</Contact>
  </>
);

export default Titles;
