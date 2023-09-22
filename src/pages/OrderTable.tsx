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

const Content = styled.div`
  width: 80%;
  margin: auto;
  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    width: 100%;
  }
`;
const Contacts = styled.p`
  font-size: 20px;
`;
const Title = styled.h1`
  padding-top: 40px;
  font-size: 30px;
`;
const MENY = styled.h1`
  font-size: 30px;
  padding-top: 40px;
`;

const Menu = styled.img`
  border: 1px solid black;
  width: 80%;
  margin: auto;
  margin-bottom: 50px;
  @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
    width: 95%;
  }
`;

export const OrderTable = () => {
  return (
    <Container>
      <Content>
        <Title>Ønsker du å bestille bord hos Gustav's?</Title>
        <Contacts>Ring: {PHONE}</Contacts>
        <Contacts>Email: {EMAIL}</Contacts>
        <MENY>MENY</MENY>
        <Menu src={menu1} />
        <Menu src={menu2} />
      </Content>
    </Container>
  );
};
