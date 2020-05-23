import React from 'react';
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

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: solid 3px rgb(100, 49, 151);
`;

const Header = () => (
  <Container>
    <Img src={require('../../images/me.jpg')} />
    <span>☀️</span>
  </Container>
);

export default Header;
