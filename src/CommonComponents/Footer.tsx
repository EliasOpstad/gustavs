import React from "react";
import styled from "styled-components";
import { Column, Row } from "../styles/Style-helper";
import fb from "../Images/fb.svg";
import {
  ADDRESS,
  EMAIL,
  NAVN,
  OPENING_HOURS,
  OPENING_HOURS_KITCHEN,
  OPENING_HOURS_KITCHEN_WEEKEND,
  OPENING_HOURS_WEEKEND,
  PHONE,
} from "../helper/HelperVariables";

const Container = styled(Column)`
  height: 500px;
  justify-content: space-between;
  width: 100%;
  background-color: #b257ad58;
  @media (max-width: 768px) {
    height: 600px;
  }
`;
const TextContainer = styled(Row)`
  width: 80%;
  color: black;
  margin-left: 10%;
  justify-content: flex-start;
  gap: 100px;
  padding-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
    padding-top: 10px;
  }
`;
const GustavInformation = styled(Column)``;
const FooterTitle = styled.h3``;
const OpeningHours = styled.div``;
const FollowUs = styled.div``;
const FooterCredits = styled.div`
  height: 60px;
  width: 100%;
  background-color: #303030;
`;
const Header = styled.h4``;

const FB = styled.img`
  width: 50px;
`;
const Kontakt = styled.div`
  line-height: 1.5;
`;
const CodeCreds = styled.div`
  width: 80%;
  color: white;
  margin-left: 10%;
  justify-content: flex-start;

  padding-top: 20px;
`;
const Info = styled.div`
  color: grey;
  p {
    vertical-align: middle;
  }
`;
//   ∏ ∏  ∏ ∏
// ∏ ¿ ¿ ¿ ¿ ∏
// ∏  ? ? ?  ∏
//   ∏ ∏ ∏ ∏
const Footer = () => {
  return (
    <Container>
      <TextContainer>
        <GustavInformation>
          <FooterTitle>GUSTAVS</FooterTitle>
          {ADDRESS}
          <Kontakt>
            <p>
              E-post: {EMAIL} <br />
              Telefon: {PHONE}
            </p>
          </Kontakt>
          {/* <button>Bestill bord</button> */}
        </GustavInformation>
        <OpeningHours>
          <FooterTitle>ÅPNINGSTIDER:</FooterTitle>
          {/* <Header>Restaurant</Header> */}
          <p>
            {OPENING_HOURS}
            <br />
            {OPENING_HOURS_KITCHEN}
          </p>
          <p>
            {OPENING_HOURS_WEEKEND}
            <br />
            {OPENING_HOURS_KITCHEN_WEEKEND}
          </p>
        </OpeningHours>
        <FollowUs>
          <FooterTitle>Følg oss på Sosiale Medier</FooterTitle>
          <p> for nyheter!</p>
          <a href="https://www.facebook.com/profile.php?id=100095026144226">
            <FB src={fb}></FB>
          </a>
        </FollowUs>
      </TextContainer>
      <FooterCredits>
        <CodeCreds>
          <Info>
            <p>{NAVN} | Utviklet av Elias Opstad</p>
          </Info>
        </CodeCreds>
      </FooterCredits>
    </Container>
  );
};

export default Footer;
