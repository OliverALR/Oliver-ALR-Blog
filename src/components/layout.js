import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import gorilla from '../../static/gorilla.ico';
import { Helmet } from 'react-helmet';
// Imported Hooks
import useSiteMetadata from '../hooks/use-sitemetadata';

const GlobalStyle = createGlobalStyle`
    * {
        background-color: rgb(244, 245, 241);
        overflow-x: hidden;
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content={description} />
        <link rel="icon" href={gorilla} />
      </Helmet>
    </>
  );
};

export default Layout;
