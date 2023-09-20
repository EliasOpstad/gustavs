import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PATH_HOME } from "../RouterFolder/Routes";
import HamburgerMenu from "./Nav/HamburgerMenu";
import {
  BLACK_COLOR,
  BREAKPOINT_MEDIUM,
  BREAKPOINT_SMALL,
  LOGO,
} from "../helper/HelperVariables";
import logo from "../Images/logo.png";
import logoBlack from "../Images/svart-logo.png";
const HeaderContainer = styled.div`
  display: flex;
  height: 120px;
  background-color: #1b1b1b;
  align-items: center;
`;

const Logo = styled.img`
  margin-left: 10%;
  height: 100px;
  width: auto;
  @media (max-width: ${BREAKPOINT_MEDIUM}) {
    height: 60px;
  }
  @media (max-width: ${BREAKPOINT_SMALL}) {
    display: none;
  }
`;

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <Logo src={logoBlack} onClick={() => navigate(PATH_HOME)} />
        <HamburgerMenu />
      </HeaderContainer>
    </>
  );
};
