// HamburgerMenu.tsx
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  PATH_HOME,
  PATH_ORDERTABLE,
  PATH_ABOUTGUSTAV,
} from "../../RouterFolder/Routes";
import {
  BREAKPOINT_MEDIUM,
  BREAKPOINT_SMALL,
} from "../../helper/HelperVariables";

const ButtonLink = styled.div`
  text-decoration: none;
  color: white;
  @media (max-width: ${BREAKPOINT_SMALL}) {
    font-size: 14px;
  }
`;
const RightHeader = styled.div`
  @media (min-width: ${BREAKPOINT_MEDIUM}) {
    padding: 10px;
    margin: 10px;
    margin: auto;
    gap: 60px;
    margin-right: 10%;
  }
  display: flex;
  gap: 20px;
  margin: auto;
  margin-right: 10%;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${BREAKPOINT_SMALL}) {
    margin: 10px;
    margin-right: 0%;
    justify-content: space-around;
    margin: auto;
    padding: 10px;
  }
`;

const HamburgerMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <RightHeader>
      <ButtonLink onClick={() => navigate(PATH_HOME)}>HJEM</ButtonLink>
      <ButtonLink onClick={() => navigate(PATH_ORDERTABLE)}>
        BESTILL BORD
      </ButtonLink>
      <ButtonLink onClick={() => navigate(PATH_ABOUTGUSTAV)}>OM OSS</ButtonLink>
    </RightHeader>
  );
};

export default HamburgerMenu;
