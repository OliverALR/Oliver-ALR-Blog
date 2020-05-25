import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import gorilla from '../../static/gorilla.ico';
import { Helmet } from 'react-helmet';
// Imported Hooks
import useSiteMetadata from '../hooks/use-sitemetadata';

const GlobalStyle = createGlobalStyle`
    /* 
      -- Light Mode --
      background site: rgb(244, 245, 241);
      h1 index font color: rgb(51, 55, 70);
      h2 font color: 
      <a/> tags and border-bottom color: rgb(100, 49, 151);
      h2 font color:  rgb(100, 49, 151);
      h3 and slug color: rgba(0, 0, 0, 0.55);
      p color: rgb(40, 42, 53);
      post preview border-bottom: solid 2px rgb(50, 64, 69, 0.25);
      social nets icons color: rgba(0, 0, 0, 0.75);
      copyright color: rgb(0, 0, 0, 0.5);


      -- Dark Mode --
      background site: rgb(40, 44, 53);
      h1 index font color:  rgb(244, 245, 241);
      <a/> tags color: rgb(154, 52, 255);
      h2 font color: rgba(175, 99, 252, 0.85);
      h3 and slug color: rgb(185, 185, 185);
      p color: rgb(244, 245, 241);
      post preview border-bottom: solid 2px rgba(213, 213, 213, 0.4);
      copyright color: rgb(244, 245, 241, 0.75);
     */

    * body {
        background-color: ${({ theme }) => theme.body};
        transition: background 500ms ease-in-out;
        overflow-x: hidden;
    }

    .profile {
      border: solid 3px ${({ theme }) => theme.profile};
    }

    h1 {
      color:  ${({ theme }) => theme.h1};
    }

    h2 {
      color: ${({ theme }) => theme.h2};
    }

    h3 {
      color: ${({ theme }) => theme.h3};
    }

    p {
      color:  ${({ theme }) => theme.p};
    }

    .email {
      color: ${({ theme }) => theme.email};
    }

    /* Moon Icon scheme for light theme */
    .mode-icon {
      color: ${({ theme }) => theme.mode_icon};
    }

    a {
      color: ${({ theme }) => theme.a};

      &.current-page {
        border-bottom: 2px solid ${({ theme }) => theme.border_bottom};
      }
    }

    .divisor {
      border-bottom: solid 2px ${({ theme }) => theme.divisor};
    }

    .social-icons {
      & > .github {
        color: ${({ theme }) => theme.social_icons};
        &:hover {
          color: #fff;
        }
      }

      & > .twitter {
        color: ${({ theme }) => theme.social_icons};
        &:hover {
          color: rgb(29, 161, 242);
        }
      }

      & > .codepen {
        color: ${({ theme }) => theme.social_icons};
        &:hover {
          color: #fff;
        }
      }
    }

    .copyright {
      color: ${({ theme }) => theme.divisor};
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
