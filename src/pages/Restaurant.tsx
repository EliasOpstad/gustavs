
import React from 'react';
import styled from 'styled-components';
import logo from '../CommonComponents/logo.png';


const Logo = styled.img`
width: 100%;
`
const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const TextContainer = styled.div`
width: 200px;
`;
const LeftContent = styled.div`

`;
const RightContent = styled.div`


`;

export const Restaurant = () => {
  return (
    <>
      <Logo src ={logo}/>
    <Content>
      <LeftContent>
        <h1>RESTAURANT</h1>
        <TextContainer>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dicta! Nisi fugit in nemo, nulla impedit numquam expedita velit magnam ad, quidem, possimus laudantium. Excepturi veritatis voluptatem harum ullam quia!</TextContainer>
      </LeftContent>
      <RightContent>
        <h1>RESTAURANT</h1>
        <TextContainer>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dicta! Nisi fugit in nemo, nulla impedit numquam expedita velit magnam ad, quidem, possimus laudantium. Excepturi veritatis voluptatem harum ullam quia!</TextContainer>
      </RightContent>
    </Content>
    </>
  );
};


