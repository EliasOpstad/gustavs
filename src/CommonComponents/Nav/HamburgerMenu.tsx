// HamburgerMenu.tsx
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  PATH_HOME,
  PATH_ORDERTABLE,
  PATH_ABOUTGUSTAV,
} from "../../RouterFolder/Routes";

const ButtonLink = styled.div`
  text-decoration: none;
  margin: 10px;
  padding: 10px;
`;
const RightHeader = styled.div`
  display: flex;
  gap: 20px;
  margin: auto;
  margin-right: 10%;
  &:hover {
    cursor: pointer;
  }
`;

const HamburgerMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <RightHeader>
      <ButtonLink onClick={() => navigate(PATH_HOME)}>Hjem</ButtonLink>
      <ButtonLink onClick={() => navigate(PATH_ORDERTABLE)}>
        Bestill Bord
      </ButtonLink>
      <ButtonLink onClick={() => navigate(PATH_ABOUTGUSTAV)}>Om oss</ButtonLink>
    </RightHeader>
  );
};

export default HamburgerMenu;
