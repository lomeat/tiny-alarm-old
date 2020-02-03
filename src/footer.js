import React from "react";
import styled from "styled-components";

export const Footer = () => (
  <Wrapper>
    <Icon>T</Icon>
    <Icon>I</Icon>
    <Icon>G</Icon>
    <Icon>S</Icon>
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

const Icon = styled.a`
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
