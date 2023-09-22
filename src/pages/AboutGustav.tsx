import React from "react";
import styled from "styled-components";
import Gustav from "../Images/Gustav-Helland.png";
import huset from "../Images/Huset.png";
import { BLACK_COLOR, WHITE_COLOR } from "../helper/HelperVariables";

const HomeContainer = styled.div`
  display: grid;
  margin: auto;
  /* background-color: #191616;
  color: white; */
  background-color: ${BLACK_COLOR};
  color: ${WHITE_COLOR};

  padding-bottom: 100px;
`;
const Bilde = styled.img`
  object-fit: cover;
  width: 80%;
  margin: auto;
  height: 500px;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;
const LeftContainer = styled.div`
  margin-right: 10%;
  line-height: 1.6;
`;
const ImageRightContainer = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 90%;
    object-fit: none;
  }
`;

const Headline = styled.h1``;
const ContentContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 50px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;
const Text = styled.p``;

export const AboutGustav = () => {
  return (
    <>
      <HomeContainer>
        <Bilde src={huset} />
        <ContentContainer>
          <LeftContainer>
            <Headline>Gustav's Restaurant</Headline>
            <Text>
              Gustav Helland 1879 til 1958 var en av Stavangers mest
              betydningsfulle arkitekter. Eiganesveien 8, i den rosa
              murbygningen, var hans hans hjem. Du sitter midt i hans arbeidsrom
              når du besøker oss. Han tegnet dette bygget til seg og sin
              familie. Gustav Helland tegnet mange betydningsfulle bygninger,
              deriblant Sola kirke, Lysebotn kraftverk, Stavanger døvekirke,
              Stavanger og Rogalands bank m.m. Han hadde en stor produksjon og
              viktige bidrag til arkitekturen i området.
            </Text>
          </LeftContainer>
          <ImageRightContainer src={Gustav} />
        </ContentContainer>
      </HomeContainer>
    </>
  );
};
