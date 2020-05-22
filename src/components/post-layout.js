import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'gatsby';
// Layout Components
import Layout from './layout';
import Footer from './footer';

const Header = styled.div`
  display: flex;
`;

const Main = styled.main`
  padding-top: 2em;
  margin-left: 15%;
  margin-right: 15%;
  text-align: left;
  font-size: 1em;
  color: purple;

  & p {
    text-align: center;
    font-size: 0.85em;
    color: rgba(20, 20, 20, 0.75);
  }
`;

const PostLayout = ({ children }) => {
  return (
    <>
      <Layout />
      <Header>
        <Link to="/">Home</Link>
        <Main>{children}</Main>
      </Header>
      <Footer />
    </>
  );
};

export default PostLayout;
