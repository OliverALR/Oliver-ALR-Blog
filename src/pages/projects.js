import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// Layout Components
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
    <h3 css="text-align: center;">This is the projects section</h3>
    <Footer />
  </>
);
