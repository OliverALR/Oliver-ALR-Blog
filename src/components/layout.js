import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
// Imported Hooks
import useSiteMetadata from '../hooks/use-sitemetadata';

const GlobalStyle = createGlobalStyle`
    * {
        background-color: rgb(244, 245, 241);
    }
`;

const Layout = () => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang="en-US" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </>
  );
};

export default Layout;
