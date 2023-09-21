import React from "react";
import styled from "styled-components";
import menu1 from "../Images/Meny-1.png";
import menu2 from "../Images/Meny-2.png";
import { Column } from "../styles/Style-helper";
import { EMAIL, PHONE } from "../helper/HelperVariables";

const Container = styled(Column)`
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: center;
  text-align: center;
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
`;
const Contacts = styled.p`
  font-size: 20px;
`;
const Title = styled.h1`
  font-size: 30px;
`;

const Menu = styled.img`
  border: 1px solid black;
  width: 80%;
  margin: auto;
  margin-bottom: 50px;
`;

export const OrderTable = () => {
  return (
    <Container>
      <Content>
        <Title>Ønsker du å bestille bord hos Gustav's?</Title>
        <Contacts>Ring: {PHONE}</Contacts>
        <Contacts>Email: {EMAIL}</Contacts>
        <h1>Menu</h1>
        <Menu src={menu1} />
        <Menu src={menu2} />
      </Content>
    </Container>
  );
};
