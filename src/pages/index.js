import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// Layout Components
import Layout from '../components/layout';
import Header from '../components/header';
import Titles from '../components/titles';
import Navbar from '../components/navbar';
import PostPreview from '../components/post-preview';
import BlogGlobal from '../components/blog-global';
import Footer from '../components/footer';

export default () => (
  <>
    <Header />
    <Titles />
    <Navbar />
    <BlogGlobal>
      <PostPreview />
      <PostPreview />
    </BlogGlobal>
    <Footer />
    <Layout></Layout>
  </>
);
