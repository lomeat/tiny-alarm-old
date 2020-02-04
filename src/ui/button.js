import React from "react";
import styled from "styled-components";

export const Button = props => (
  <Wrapper>
    <StyledButton onClick={props.handleClick}>{props.name}</StyledButton>
  </Wrapper>
);

const Wrapper = styled.div`
  background: transparent;
  margin: 0 20px;
  transition: 0.2s ease;
  &:hover {
    box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
  }
`;

const StyledButton = styled.button`
  background: transparent;
  padding: 15px 40px;
  font-family: "Barlow Condensed", sans-serif;
  color: #ffe3e1;
  border: 7px solid #ffe3e1;
  font-size: 38px;
  text-transform: uppercase;
  transition: 0.2s ease;
  outline: none;
  &:hover {
    cursor: pointer;
    box-shadow: inset 5px 5px rgba(0, 0, 0, 0.5);
    text-shadow: 5px 5px rgba(0, 0, 0, 0.5);
  }
`;
