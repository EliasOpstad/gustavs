import React from "react";
import styled from "styled-components";
import { WHITE_COLOR } from "../helper/HelperVariables";

const Div = styled.div`
  width: 80%;
  height: 3px;
  /* background-color: #a620a0; */
  background-color: ${WHITE_COLOR};

  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Line = () => {
  return <Div></Div>;
};

export default Line;
