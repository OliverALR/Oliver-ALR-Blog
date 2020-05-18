import React from 'react';
import { Link } from 'gatsby';
// Layout components
import Header from '../components/header';
import Titles from '../components/titles';
import Navbar from '../components/navbar';
import Layout from '../components/layout';
import Footer from '../components/footer';

export default () => (
  <>
    <Header />
    <Titles />
    <Navbar />
    <h3 css="text-align: center;">This is the about section</h3>
    <Footer />
  </>
);
