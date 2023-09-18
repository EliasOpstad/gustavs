import React from "react";
import styled from "styled-components";
import menu1 from "../Images/Meny-1.png";
import menu2 from "../Images/Meny-2.png";
import { Column } from "../styles/Style-helper";
import { EMAIL, PHONE } from "../helper/HelperVariables";

const Container = styled(Column)`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: center;
  text-align: center;
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
      <h1>Ønsker du å bestille bord hos Gustav's?</h1>
      <p>Ring: {PHONE}</p>
      <p>Email: {EMAIL}</p>
      <h1>Menu</h1>
      <Menu src={menu1} />
      <Menu src={menu2} />
    </Container>
  );
};
