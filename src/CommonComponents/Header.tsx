import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PATH_HOME } from "../RouterFolder/Routes";
import HamburgerMenu from "./Nav/HamburgerMenu";
import logo from "../Images/gustav-logo-white.svg";
import pinkHouse from "../Images/pink-house.svg";
import { BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from "../helper/HelperVariables";
const HeaderContainer = styled.div`
  display: flex;
  height: 120px;
  background-color: #1b1b1b;
  align-items: center;
`;

const PinkHouse = styled.img`
  display: none;
  @media (max-width: ${BREAKPOINT_MEDIUM}) {
    display: flex;
    margin-left: 10%;
    align-items: center;
    height: 34px;
    width: auto;
  }
`;
const Logo = styled.img`
  display: flex;
  margin-left: 10%;
  align-items: center;
  height: 90px;
  width: auto;
  @media (max-width: ${BREAKPOINT_MEDIUM}) {
    display: none;
  }
`;

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <Logo src={logo} onClick={() => navigate(PATH_HOME)} />
        <PinkHouse src={pinkHouse} onClick={() => navigate(PATH_HOME)} />
        <HamburgerMenu />
      </HeaderContainer>
    </>
  );
};
