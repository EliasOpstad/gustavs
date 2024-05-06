// HamburgerMenu.tsx
import React from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  PATH_HOME,
  PATH_ORDERTABLE,
  PATH_ABOUTGUSTAV,
  PATH_JOBBHOSOSS,
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
    margin: auto;
    text-align: center;
    align-items: center;
  }
  @media (max-width: 330px) {
    font-size: 12px;
  }
  &:hover {
    color: #b257ad;
  }
`;
const RightHeader = styled.div`
  @media (min-width: ${BREAKPOINT_MEDIUM}) {
    padding: 10px;
    margin: 10px;
    margin: auto;
    gap: 60px;
    margin-right: 10%;
    text-align: center;
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
    align-items: center;
  }
  @media (max-width: 330px) {
    padding: 5px;
  }
`;

const HamburgerMenu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <RightHeader>
      <ButtonLink onClick={() => navigate(PATH_HOME)}>HJEM</ButtonLink>
      <ButtonLink onClick={() => navigate(PATH_ORDERTABLE)}>
        BOOK BORD
      </ButtonLink>
      <ButtonLink onClick={() => navigate(PATH_ABOUTGUSTAV)}>OM OSS</ButtonLink>
      <ButtonLink onClick={() => navigate(PATH_JOBBHOSOSS)}>
        LEDIG STILLING
      </ButtonLink>
    </RightHeader>
  );
};

export default HamburgerMenu;
