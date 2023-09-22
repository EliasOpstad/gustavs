import React from "react";
import styled from "styled-components";
import menu1 from "../Images/Meny-1.png";
import menu2 from "../Images/Meny-2.png";
import { Column } from "../styles/Style-helper";
import {
  BLACK_COLOR,
  BREAKPOINT_MEDIUM,
  EMAIL,
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

const Contacts = styled.div`
  display: grid;
  width: 60%;
  grid-template-columns: 1fr 1px 1fr;
  margin: auto;
  justify-content: space-between;
  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    width: 80%;
  }
`;
const ContactsElements = styled.p``;
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
const Title = styled.h1`
  font-size: 30px;
`;
const MENY = styled.h1`
  font-size: 30px;
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
        <Contacts>
          <ContactsElements>Telefon: {PHONE}</ContactsElements>
          <ContactsElements>|</ContactsElements>
          <ContactsElements>Email: {EMAIL}</ContactsElements>
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
