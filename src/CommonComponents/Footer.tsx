import React from "react";
import styled from "styled-components";
import { Column, Row } from "../styles/Style-helper";
import fb from "../Images/fb.svg";
import {
  ADDRESS,
  BREAKPOINT_MEDIUM,
  EMAIL,
  NAVN,
  OPENING_HOURS,
  OPENING_HOURS_KITCHEN,
  OPENING_HOURS_KITCHEN_WEEKEND,
  OPENING_HOURS_WEEKEND,
  PHONE,
} from "../helper/HelperVariables";

const Container = styled(Column)`
  height: 280px;
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
  display: flex;
  justify-content: space-between;

  padding-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
    padding-top: 10px;
  }
`;
const GustavInformation = styled(Column)``;
const FooterTitle = styled.h3`
  margin-bottom: 0px;
`;
const FooterText = styled.p`
  margin-top: 5px;
  line-height: 1.5;
`;
const OpeningHours = styled.div``;
const FollowUs = styled.div`
  text-align: center;
  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    text-align: start;
  }
`;
const FooterCredits = styled.div`
  height: 60px;
  width: 100%;
  background-color: #303030;
`;

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

const Footer = () => {
  return (
    <Container>
      <TextContainer>
        <GustavInformation>
          <FooterTitle>INFORMASJON:</FooterTitle>
          <FooterText>
            E-post: {EMAIL} <br />
            Telefon: {PHONE}
            <Kontakt>
              <p>{ADDRESS}</p>
            </Kontakt>
          </FooterText>
        </GustavInformation>
        <FollowUs>
          <FooterTitle>FØLG OSS PÅ SOSIALE MEDIER</FooterTitle>
          <FooterText>for oppdaterte nyheter!</FooterText>
          <a href="https://www.facebook.com/profile.php?id=100095026144226">
            <FB src={fb}></FB>
          </a>
        </FollowUs>
        <OpeningHours>
          <FooterTitle>ÅPNINGSTIDER:</FooterTitle>

          <FooterText>
            {OPENING_HOURS}
            <br />
            {OPENING_HOURS_KITCHEN}
            <br />
            {OPENING_HOURS_WEEKEND}
            <br />
            {OPENING_HOURS_KITCHEN_WEEKEND}
          </FooterText>
        </OpeningHours>
      </TextContainer>
      <FooterCredits>
        <CodeCreds>
          <Info>{NAVN} | Utviklet av Elias Opstad</Info>
        </CodeCreds>
      </FooterCredits>
    </Container>
  );
};

export default Footer;
