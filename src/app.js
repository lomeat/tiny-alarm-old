import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { Body } from "./body";
import { Footer } from "./footer";

export const App = () => (
  <React.Fragment>
    <Helmet>
      <title>Tiny Alarm</title>
      <link
        href="https://fonts.googleapis.com/css?family=Kalam:700|Volkhov|Barlow+Condensed:700"
        rel="stylesheet"
      />
    </Helmet>
    <Container>
      <Wrapper>
        <Body />
        <Footer />
      </Wrapper>
    </Container>
  </React.Fragment>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f15a51;
  height: 100vh;
  width: 100vw;
  outline: none !important;
  user-select: none !important;
  -webkit-user-select: none !important;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60vw;
  margin-bottom: 100px;
`;
