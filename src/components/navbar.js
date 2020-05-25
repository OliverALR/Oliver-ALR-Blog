import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = styled.div`
  margin-top: 3em;
  text-align: center;
`;

const List = styled.nav`
  list-style: none;
  display: flex;
  justify-content: space-evenly;

  & > a {
    text-decoration: none;
    /* color: #52d8ff; */
    font-size: 1.2em;
    font-weight: 600;
    font-family: 'Cabin', sans-serif;
  }
`;

const Navbar = () => (
  <>
    <Nav>
      <List>
        <Link to="/" activeClassName="current-page">
          Home
        </Link>
        <Link to="about" activeClassName="current-page">
          About
        </Link>
        <Link to="projects" activeClassName="current-page">
          Projects
        </Link>
      </List>
    </Nav>
  </>
);

export default Navbar;
