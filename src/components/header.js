import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled, { keyframes } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

const appear = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  } 
  33% {
    transform: translateY(-66px);
    opacity: 0.33;
  } 66% {
    transform: translateY(-33px);
    opacity: 0.66;
  } 100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 58%;
  margin: 0 21% 0 21%;
  padding: 1.5em 0em 0em 0em;

  @media (min-width: 250px) and (max-width: 768px) {
    margin: 0 12.5% 0 12.5%;
    width: 76%;
  }
`;

const Image = styled(Img)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Moon = styled(FaMoon)`
  width: 30px;
  height: 30px;
  animation: ${appear} 750ms linear;

  &:hover {
    color: #000;
    transition: all 500ms linear;
  }
`;

const Sun = styled(FaSun)`
  width: 35px;
  height: 35px;
  color: rgb(199, 200, 196);
  animation: ${appear} 750ms linear;

  &:hover {
    color: #fff;
    transition: all 400ms linear;
  }
`;

const Header = () => {
  const [light, setLight] = useState(true);
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    if (light) {
      setLight(false);
    } else {
      setLight(true);
    }
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "me.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 600, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Image className="profile" fluid={image.sharp.fluid} alt="Oliver ALR" />
      <span
        css={`
          cursor: pointer;
        `}
        onClick={themeToggler}
      >
        {light ? <Moon className="mode-icon" /> : <Sun />}
      </span>
    </Container>
  );
};

export default Header;
