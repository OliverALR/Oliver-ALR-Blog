import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

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
  border: solid 3px rgb(100, 49, 151);
`;

const Header = () => {
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
      <Image fluid={image.sharp.fluid} alt="Oliver ALR" />
      <span>☀️</span>
    </Container>
  );
};

export default Header;
