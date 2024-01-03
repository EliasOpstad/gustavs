import React from "react";
import styled from "styled-components";
import { Column, Row } from "../styles/Style-helper";
import fb from "../Images/fb.svg";
import insta from "../Images/instagram.png";
import {
  ADDRESS,
  BREAKPOINT_MEDIUM,
  EMAIL,
  NAVN,
  OPENING_HOURS,
  OPENING_HOURS_KITCHEN,
  // OPENING_HOURS_KITCHEN_WEEKEND,
  // OPENING_HOURS_WEEKEND,
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

  a {
    color: #75c6ff;
    text-decoration: none;
    &:hover {
      color: #b257ad;
    }
  }
`;

const OpeningHours = styled.div``;
const FollowUs = styled.div`
  text-align: center;
  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    text-align: start;
  }
  a {
    color: #75c6ff;
    text-decoration: none;
    &:hover {
      color: #b257ad;
    }
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

const Instagram = styled.img`
  width: 50px;
`;

const ICONS = styled.div`
  a {
    margin-right: 10px;
  }
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
  const instagramUsername = "Gustavsvinbar";

  return (
    <Container>
      <TextContainer>
        <GustavInformation>
          <FooterTitle>INFORMASJON:</FooterTitle>
          <FooterText>
            Telefon: <a href="tel:92944022">+47 92 94 40 22</a>
            <br />
            E-post: <a href="mailto:jarle@gustavs.no">jarle@gustavs.no</a>
            <Kontakt>
              <p>{ADDRESS}</p>
            </Kontakt>
          </FooterText>
        </GustavInformation>
        <FollowUs>
          <FooterTitle>FØLG OSS PÅ SOSIALE MEDIER</FooterTitle>
          <FooterText>for oppdaterte nyheter!</FooterText>
          <ICONS>
            <a href="https://www.facebook.com/profile.php?id=100095026144226">
              <FB src={fb}></FB>
            </a>
            <a
              href={`https://www.instagram.com/${instagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram src={insta}></Instagram>
            </a>
          </ICONS>
        </FollowUs>
        <OpeningHours>
          <FooterTitle>ÅPNINGSTIDER:</FooterTitle>

          <FooterText>
            {OPENING_HOURS}
            <br />
            {OPENING_HOURS_KITCHEN}
            <br />
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
