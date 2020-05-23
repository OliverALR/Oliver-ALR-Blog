import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Jost';
  font-weight: 800;
  font-size: 1.25em;
  text-align: center;
  color: rgb(51, 55, 70);
`;

const Desc = styled(Title)`
  font-family: 'Jost';
  font-size: 1.15em;
  letter-spacing: 0.85px;
  margin: 0 20% 0 20%;
  padding-top: 0.25em;

  @media (min-width: 250px) and (max-width: 768px) {
    margin: 0 12.5% 0 12.5%;
    text-align: justify;
  }
`;

const Contact = styled(Title)`
  font-size: 1.1em;
  padding-top: 1.5em;
  margin: 0 20% 0 20%;

  @media (min-width: 300px) and (max-width: 359px) {
    margin: 0 10% 0 10%;
  }
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
      <span css="color: #52D8FF;">React</span> and my{' '}
      <span css="color: #32C119;">entrepreneurial adventures</span> related
      posts. I'll hope you enjoy it.
    </Desc>
    <Contact>
      Keep in touch with me:{' '}
      <span
        css={`
          font-weight: 800;
        `}
      >
        oliveralr@protonmail.com
      </span>
    </Contact>
  </>
);

export default Titles;
