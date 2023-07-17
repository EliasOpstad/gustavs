
import React from 'react';
import styled from "styled-components";
import logo from "./logo.png";
import { useNavigate } from 'react-router-dom';
import { PATH_ABOUTGUSTAV, PATH_HOME, PATH_ORDERTABLE, PATH_RESTAURANT, PATH_TODAYSMENU } from '../RouterFolder/Routes';
const HeaderContainer = styled.div`
  height: 120px;
  background-color: grey;
  display: flex;
  justify-content: space-between;

`;


const Logo = styled.img`
    max-width: 15%;
    margin-left: 100px;
`;

const RightHeader = styled.div`
  display: flex;
  gap: 20px;
  margin: auto;
`;

const ButtonLink = styled.div`
  text-decoration: none;
  margin: 10px;
`;

export const Header = () => {
  const navigate = useNavigate();

  
  return (
    <>
        <HeaderContainer>
            <Logo src ={logo} onClick={() => navigate(PATH_HOME)}/>
            <RightHeader>
              <ButtonLink onClick={() => navigate(PATH_HOME)}>Hjem</ButtonLink>
              <ButtonLink onClick={() => navigate(PATH_RESTAURANT)}>Restauranten</ButtonLink>
              <ButtonLink onClick={() => navigate(PATH_TODAYSMENU)}>Dagens Meny</ButtonLink>
              <ButtonLink onClick={() => navigate(PATH_ORDERTABLE)}>Bestill Bord</ButtonLink>
              <ButtonLink onClick={() => navigate(PATH_ABOUTGUSTAV)}>Om oss</ButtonLink>
            </RightHeader>
        </HeaderContainer>
    </>
  );
}