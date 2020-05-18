import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Github = styled(FaGithub)`
  width: 35px;
  height: 35px;
  opacity: 0.25;
  padding: 2em 0.35em 1em 0em;

  &:hover {
    color: #000;
    opacity: 1;
    transition: all 200ms linear;
  }
`;

const Twitter = styled(FaTwitter)`
  width: 35px;
  height: 35px;
  opacity: 0.25;
  padding: 2em 0em 1em 0.35em;

  &:hover {
    color: rgb(29, 161, 242);
    opacity: 1;
    transition: all 200ms linear;
  }
`;

const Footer = () => (
  <>
    <div
      css={`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <a
        css={`
          color: rgba(0, 0, 0, 0.75);
          text-decoration: none;
        `}
        href="https://github.com/OliverALR"
      >
        <Github />
      </a>
      <a
        css={`
          color: rgba(0, 0, 0, 0.75);
          text-decoration: none;
        `}
        href="https://twitter.com/theoliveralr"
      >
        <Twitter />
      </a>
    </div>

    <small
      css={`
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 0.85em;
        color: rgb(0, 0, 0, 0.5);
      `}
    >
      ©2020 This is Oliver ALR
    </small>
  </>
);

export default Footer;
