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
        max-width: 70vw;
        width: 600px;
        margin: 2rem auto 4rem;
      `}
    >
      {children}
    </main>
  </>
);

export default Layout;
