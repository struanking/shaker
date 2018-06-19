import React from "react";
import styled from "styled-components";

// c02770
// c03474
const Hero = styled.div`
  background-color: #f2f2f2;
  background-image: -webkit-linear-gradient(35deg, #f2f2f2 35%, #f8f8f8 35%);
  padding: 4rem;
`

export const HeroTitle = styled.h1`
  color: #424153; // 484848;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default ({ children }) => (
  <Hero>
    {children}
  </Hero>
);
