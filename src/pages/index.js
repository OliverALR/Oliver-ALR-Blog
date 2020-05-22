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
// Data Hooks
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Layout />
      <Header />
      <Titles />
      <Navbar />
      <BlogGlobal>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </BlogGlobal>
      <Footer />
    </>
  );
};
