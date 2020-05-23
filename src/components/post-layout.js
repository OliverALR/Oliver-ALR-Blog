import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'gatsby';
// Layout Components
import Layout from './layout';
import Footer from './footer';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2em;
  margin-left: 12%;
  margin-right: 12%;

  & > a {
    text-decoration: none;
    color: rgb(100, 49, 151);
    font-family: 'Cabin';
    font-size: 1.5em;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Main = styled.main`
  padding-top: 1.5em;
  margin-left: 12%;
  margin-right: 12%;
  font-family: 'Jost';
  text-align: left;
  color: rgb(100, 49, 151);

  & h1 {
    font-size: 2.35em;
  }

  & h2,
  h3,
  h5,
  h6 {
    font-family: 'Patua One';
    font-size: 1.7em;
    font-weight: 600;
    padding-top: 1.25em;
  }

  & p {
    text-align: justify;
    line-height: 1.85em;
    font-size: 1.2em;
    color: rgba(0, 0, 0, 0.75);
  }
`;

const PostLayout = ({ children }) => {
  return (
    <>
      <Layout />
      <Header>
        <Link to="/">&larr; Home</Link>
        <span>☀️</span>
      </Header>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PostLayout;
