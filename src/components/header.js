import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0em 0em 0em;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 3px rgb(100, 49, 151);
`;

const Header = () => (
  <Container>
    <Img src={require('../../images/me.jpg')} />
  </Container>
);

export default Header;
