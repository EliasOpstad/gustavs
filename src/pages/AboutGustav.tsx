import React from "react";
import styled from "styled-components";
import logo from "../CommonComponents/logo.png";
import { ImageRow } from "../CommonComponents/ImageRow";
import { Column } from "../styles/Style-helper";
import Workers from "../CommonComponents/Workers";

const HomeContainer = styled.div`
  display: grid;
  margin: auto;
`;
const Logo = styled.img`
  object-fit: cover;
  width: 80%;
  margin: auto;
  height: 300px;
  margin-top: 80px;
`;
const ImageRightContainer = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;

const Headline = styled.h1``;
const ContentContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 200px;
`;
const Text = styled.p``;
const LeftContainer = styled.div``;
const RightContainer = styled.div``;
export const AboutGustav = () => {
  return (
    <>
      <HomeContainer>
        <Logo src={logo} />
        <ContentContainer>
          <LeftContainer>
            <Headline>Gustavs Restaurant</Headline>
            <Text>
              Gustav Helland 1879 til 1958 var en av Stavangers mest
              betydningsfulle arkitekter. Eiganesveien 8 med i den rosa
              murbygningen var hans hans hjem og du sitter i hans arbeids rom
              når du besøker oss. Han tegnet dette bygget til seg og sin
              familie. Gustav Helland tegnet mange betydningsfulle bygninger,
              deriblant Sola kirke, Lysebotn kraftverk, Stavanger døvekirke,
              Stavanger og Rogalands bank m.m. Han hadde en stor produksjon og
              viktige bidrag til arkitekturen i området.
            </Text>
          </LeftContainer>
          <RightContainer>
            <ImageRightContainer src={logo} />
          </RightContainer>
        </ContentContainer>
        <Workers />
      </HomeContainer>
    </>
  );
};
