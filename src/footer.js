import React from "react";
import styled from "styled-components";

import { FaTelegramPlane, FaGithub, FaEnvelope, FaVk } from "react-icons/fa";

export const Footer = () => (
  <Wrapper>
    <Link href="https://vk.com/lomeat">
      <FaVk size={30} />
    </Link>
    <Link href="https://t.me/lomeat">
      <FaTelegramPlane size={30} />
    </Link>
    <Link href="https://github.com/lomeat/tiny-alarm">
      <FaGithub size={30} />
    </Link>
    <Link href="mailto:lom3at@gmail.com">
      <FaEnvelope size={30} />
    </Link>
  </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 1;
`;

const Link = styled.a`
  font-family: Barlow Condensed, sans-serif;
  font-size: 30px;
  color: #ffe3e1;
  transition: 0.2s ease;
  padding: 0 20px;
  text-decoration: none;
  &:hover {
    text-shadow: 3px 3px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
