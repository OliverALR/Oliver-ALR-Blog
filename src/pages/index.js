import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/themes';
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

  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
    </ThemeProvider>
  );
};
