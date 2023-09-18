import React from "react";
import styled from "styled-components";
import logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";
import { PATH_HOME } from "../RouterFolder/Routes";
import HamburgerMenu from "./Nav/HamburgerMenu";

const HeaderContainer = styled.div`
  display: flex;
  height: 120px;
  background-color: white;
  align-items: center;
`;

const Logo = styled.img`
  margin-left: 10%;
  height: 100px !important;
  width: auto;
  @media screen and (max-width(800px)) {
    width: 20%;
  }
`;

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <Logo src={logo} onClick={() => navigate(PATH_HOME)} />
        <HamburgerMenu />
      </HeaderContainer>
    </>
  );
};
