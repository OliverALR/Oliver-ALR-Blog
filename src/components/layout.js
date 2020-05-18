import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: rgb(244, 245, 241);
  }
`;

const Layout = ({ children }) => (
  <>
    <main
      css={`
        max-width: 90vw;
        margin: 2.5rem auto 4rem;
        width: 75%;
        display: block;
      `}
    >
      {children}
    </main>
  </>
);

export default Layout;
