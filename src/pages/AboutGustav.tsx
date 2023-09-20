import React from "react";
import styled from "styled-components";
import Gustav from "../Images/Gustav-Helland.png";
import huset from "../Images/Huset.png";
import Workers from "../CommonComponents/Workers";

const HomeContainer = styled.div`
  display: grid;
  margin: auto;
  /* background-color: #191616;
  color: white; */

  color: black;
  padding-bottom: 100px;
`;
const Bilde = styled.img`
  object-fit: cover;
  object-position: 0;
  width: 80%;
  margin: auto;
  height: 500px;
  margin-top: 80px;
`;
const LeftContainer = styled.div`
  margin-right: 10%;
  line-height: 1.6;
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

  padding-top: 50px;
`;
const Text = styled.p``;

export const AboutGustav = () => {
  return (
    <>
      <HomeContainer>
        <Bilde src={huset} />
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

          <ImageRightContainer src={Gustav} />
        </ContentContainer>
        <Workers />
      </HomeContainer>
    </>
  );
};
