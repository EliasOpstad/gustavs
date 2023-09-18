import React from "react";
import styled from "styled-components";
import { Column, Row } from "../styles/Style-helper";
import {
  OPENING_HOURS,
  OPENING_HOURS_KITCHEN,
} from "../helper/HelperVariables";

const Container = styled.div`
  height: 500px;
  width: 100%;
  background-color: #414042;
  position: relative;
`;
const TextContainer = styled(Row)`
  width: 80%;
  color: white;
  margin-left: 10%;
  justify-content: flex-start;
  padding-top: 40px;
`;
const GustavInformation = styled(Column)``;
const FooterTitle = styled.h3``;
const OpeningHours = styled.div``;
const FollowUs = styled.div``;
const FooterCredits = styled.div`
  height: 60px;
  width: 100%;
  background-color: #303030;
  position: absolute;
  bottom: 0;
`;
const Header = styled.h4``;
const Kontakt = styled.div`
  line-height: 0.5;
`;
const CodeCreds = styled.div`
  width: 80%;
  color: white;
  margin-left: 10%;
  justify-content: flex-start;

  padding-top: 20px;
`;
const Info = styled(Row)`
  gap: 20px;
  margin: auto;
  text-align: center;
  align-items: center;
  color: grey;
  vertical-align: middle;
`;

const Footer = () => {
  return (
    <Container>
      <TextContainer>
        <GustavInformation>
          <FooterTitle>GUSTAVS</FooterTitle>
          <p>Adresse 18, Stavanger</p>
          <Kontakt>
            <p>E-post: gustav@info.no</p>
            <p>Telefon: 47 47 47 47</p>
          </Kontakt>
          <button>Bestill bord</button>
        </GustavInformation>
        <OpeningHours>
          <FooterTitle>ÅPNINGSTIDER:</FooterTitle>
          <Header>Restaurant</Header>
          <p>
            {OPENING_HOURS}
            <br />
            {OPENING_HOURS_KITCHEN}
          </p>
        </OpeningHours>
        <FollowUs>
          <FooterTitle>Følg oss på Sosiale Medier</FooterTitle>
          <p> for nyheter!</p>
        </FollowUs>
      </TextContainer>
      <FooterCredits>
        <CodeCreds>
          <Info>
            <p>Gustavs Vinbar & Tapas</p>
            <p>|</p>
            <p>Utviklet av Elias Opstad</p>
          </Info>
        </CodeCreds>
      </FooterCredits>
    </Container>
  );
};

export default Footer;
