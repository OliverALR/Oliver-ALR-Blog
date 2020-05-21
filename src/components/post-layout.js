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

const PostLayout = ({ children }) => {
  return (
    <>
      <Layout />
      <Header>
        <Link to="/">Home</Link>
        <main>{children}</main>
      </Header>
      <Footer />
    </>
  );
};

export default PostLayout;
