import React from "react";
import styled from "styled-components";
import menu1 from "../Images/NEW_MENY1.png";
import menu2 from "../Images/NEW_MENY2.png";
import { Column, Row } from "../styles/Style-helper";
import PHONE_ICON from "../Images/phone.png";
import EMAIL_ICON from "../Images/email.png";

import {
  BLACK_COLOR,
  BREAKPOINT_MEDIUM,
  EMAIL_BOOKING,
  PHONE,
  WHITE_COLOR,
} from "../helper/HelperVariables";

const Container = styled(Column)`
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: center;
  text-align: center;
  background-color: ${BLACK_COLOR};
  color: ${WHITE_COLOR};
`;

const Contacts = styled(Column)`
  margin-top: 40px;
  display: flex;
  gap: 20px;

  justify-content: center;
  align-items: center;

  @media screen and (width <504px) {
    flex-direction: column;
  }
`;

const ContactsElements = styled.div`
  font-size: 15px;
  align-items: center;

  gap: 10px;
`;
// const Bar = styled.p`
//   align-items: center;
//   @media screen and (max-width: 500px) {
//     display: none;
//   }
// `;
const ManuContainer = styled.div`
  margin-bottom: 30px;
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 30px;
  @media screen and (max-width: 500px) {
    width: 90%;
    font-size: 25px;
    margin: auto;
  }
`;
const MENY = styled.h1`
  font-size: 30px;
`;

const PHONE_DIV = styled.img`
  width: 40px;
  height: auto;
`;
const EMAIL_DIV = styled.img`
  width: 40px;
  height: auto;
`;

const ROW = styled(Row)`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Menu = styled.img`
  border: 1px solid black;
  width: 80%;
  margin: auto;

  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    width: 95%;
  }
`;

export const OrderTable = () => {
  return (
    <Container>
      <Content>
        <Title>Ønsker du å bestille bord hos Gustav's?</Title>
        {/* <h2>Gustav's tar juleferie fra 19 des til 4 januar. God Jul!</h2> */}
        <Contacts>
          <ROW>
            <ContactsElements>Telefon: {PHONE}</ContactsElements>
            <a href="tel:92944022">
              <PHONE_DIV src={PHONE_ICON} alt="Ring 92944022" />
            </a>
          </ROW>
          <ROW>
            <ContactsElements>E-post: {EMAIL_BOOKING}</ContactsElements>
            <a href="mailto:booking@gustavs.no">
              <EMAIL_DIV src={EMAIL_ICON} alt="Email: booking@gustavs.no" />
            </a>
          </ROW>
        </Contacts>

        <MENY>MENY</MENY>
        <ManuContainer>
          <Menu src={menu1} />
          <Menu src={menu2} />
        </ManuContainer>
      </Content>
    </Container>
  );
};
